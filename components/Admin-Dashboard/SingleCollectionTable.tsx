// components/Admin-Dashboard/SingleCollectionTable.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { db } from '@/lib/firebase';
import useTalkshow from '@/hooks/useTalkshow';
import useWorkshop from '@/hooks/useWorkshop';
import { Button } from '../ui/button';
import useAuthOrNullRedirect from '@/hooks/useAuthOrNullRedirect';
import useAdminPermissionDenied from '@/hooks/useAdminPermissionDenied';

interface SingleEntry {
  id?: string;
  type: string;
  name: string;
  proof?: string;
  is_verified: boolean;
  payment_method: string;
  date: Timestamp;
}

interface SingleCollectionTableProps {
  collectionType: 'talkshows' | 'workshops';
}

const SingleCollectionTable: React.FC<SingleCollectionTableProps> = ({ collectionType }) => {
  useAuthOrNullRedirect(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [verifying, setVerifying] = useState<string | null>(null);
  const [items, setItems] = useState<SingleEntry[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const itemsPerPage = 10;

  const { talkshows, loading: tsLoading, error: tsError } = useTalkshow();
  const { workshops, loading: wsLoading, error: wsError } = useWorkshop();

  useAdminPermissionDenied(tsError === 'permission-denied' || wsError === 'permission-denied');

  const transformEntry = (entry: any): SingleEntry => ({
    id: entry.id,
    type: entry.type,
    name: entry.name,
    proof: entry.proof,
    is_verified: entry.is_verified,
    payment_method: entry.payment_method,
    date: entry.date
  });

  useEffect(() => {
    setLoading(true);
    let data: SingleEntry[] = [];

    if (!loaded) {
      switch (collectionType) {
        case 'talkshows':
          if (!tsLoading) data = talkshows.map(transformEntry);
          break;
        case 'workshops':
          if (!wsLoading) data = workshops.map(transformEntry);
          break;
        default:
          break;
      }

      if (data.length > 0) {
        setItems(data);
        setLoaded(true);
      }
    }
    setLoading(false);
  }, [collectionType, loaded, tsLoading, wsLoading, talkshows, workshops]);

  const handleVerify = async (id: string) => {
    setVerifying(id);
    const entryDoc = doc(db, collectionType, id);
    await updateDoc(entryDoc, { is_verified: true });
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, is_verified: true } : item
      )
    );
    setVerifying(null);
  };

  const filteredEntries = items.filter((entry: SingleEntry) => entry.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const totalPages = Math.ceil(filteredEntries.length / itemsPerPage);
  const paginatedEntries = filteredEntries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [collectionType]);

  return (
    <div className="p-4 text-primary">
      <h3 className="admin-section border-b-2 border-gray-300 z-30 text-primary bg-background px-4 font-monument text-xl uppercase lg:text-2xl xl:px-6 xl:text
        -3xl">{collectionType === 'talkshows' ? 'Talkshows' : 'Workshops'}</h3>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-input rounded"
      />
      {loading ? (
        <div className="spinner-container">
          <div className="spinner-loading"></div>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto mb-4">
            <table className="w-full mb-4 border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-center">Type</th>
                  <th className="p-2 text-center">Name</th>
                  <th className="p-2 text-center">Proof</th>
                  <th className="p-2 text-center">Date</th>
                  <th className="p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedEntries.map((entry: SingleEntry) => (
                  <tr key={entry.id} className="border-b">
                    <td className="p-2 text-center">{entry.type}</td>
                    <td className="p-2 text-center">{entry.name}</td>
                    <td className="p-2 text-center">
                      <a href={entry.proof}
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer" >{entry.payment_method}
                      </a>
                    </td>
                    <td className="p-2 text-center">
                      {entry.date.toDate().toLocaleString()}
                    </td>
                    <td className="p-2 text-center text-primary">
                      {entry.is_verified ? 'Verified' : (
                        <Button
                          onClick={() => {
                            if (window.confirm(`Are you sure to verify ${entry.name}?`)) {
                              handleVerify(entry.id as string);
                            }
                          }}
                          disabled={verifying === entry.id}
                          className="p-2 bg-secondary text-secondary-foreground rounded"
                        >
                          {verifying === entry.id ? <div className="spinner"></div> : 'Verify'}
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center">
            <Button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="p-2 bg-muted text-muted-foreground rounded disabled:opacity-50"
            >
              Prev
            </Button>
            <span>
              Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, filteredEntries.length)} of {filteredEntries.length} entries
            </span>
            <Button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-2 bg-muted text-muted-foreground rounded disabled:opacity-50"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCollectionTable;
