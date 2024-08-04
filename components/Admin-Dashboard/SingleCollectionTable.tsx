// components/Admin-Dashboard/SingleCollectionTable.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { db } from '@/lib/firebase'; 
import useTalkshow from '@/hooks/useTalkshow';
import useWorkshop from '@/hooks/useWorkshop';

interface SingleEntry {
  id: string;
  type: string;  
  name: string;
  proof: string;
  is_verified: boolean;
  payment_method: string;
  date: Timestamp;
}

interface SingleCollectionTableProps {
  collectionType: 'talkshow' | 'workshop';
}

const SingleCollectionTable: React.FC<SingleCollectionTableProps> = ({ collectionType }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [verifying, setVerifying] = useState<string | null>(null);
  const [items, setItems] = useState<SingleEntry[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const itemsPerPage = 5;

  const { talkshows, loading: tsLoading } = useTalkshow();
  const { workshops, loading: wsLoading } = useWorkshop();

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
        case 'talkshow':
          if (!tsLoading) data = talkshows.map(transformEntry);
          break;
        case 'workshop':
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
    setCurrentPage(1); // Reset to first page when changing tab
  }, [collectionType]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by team name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Proof</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedEntries.map((entry: SingleEntry) => (
                <tr key={entry.id}>
                  <td>{entry.type}</td>
                  <td>{entry.name}</td>
                  <td><a href={entry.proof}>{entry.payment_method}</a></td>
                  <td>{entry.date.toDate().toLocaleString()}</td>
                  <td>
                    {entry.is_verified ? 'Verified' : (
                      <button onClick={() => handleVerify(entry.id)} disabled={verifying === entry.id}>
                        {verifying === entry.id ? 'Verifying...' : 'Verify'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
            <span>Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, filteredEntries.length)} of {filteredEntries.length} entries</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCollectionTable;
