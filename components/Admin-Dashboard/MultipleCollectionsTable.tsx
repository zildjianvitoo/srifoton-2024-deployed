// components/Admin-Dashboard/MultipleCollectionsTable.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { db } from '@/lib/firebase';
import useCompetitiveProgramming from '@/hooks/useCompetitiveProgramming';
import useUiUxDesign from '@/hooks/useUiUxDesign';
import useWebDevelopment from '@/hooks/useWebDevelopment';
import useMobileLegends from '@/hooks/useMobileLegends';

interface CompetitionEntry {
    id?: string;
    team_name: string;
    name_1: string;
    proof?: string;
    submission?: string; 
    is_verified: boolean;
    payment_method: string;
    date: Date;
}

const competitionCollections = [
    { name: "Competitive Programming", collection: "competitive_programmings" },
    { name: "UI/UX Design", collection: "ui_ux_designs" },
    { name: "Web Development", collection: "web_developments" },
    { name: "Mobile Legends", collection: "mobile_legends" }
];

const MultipleCollectionsTable: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTab, setCurrentTab] = useState(competitionCollections[0].collection);
    const [verifying, setVerifying] = useState<string | null>(null); // Track the ID of the entry being verified
    const [competitions, setCompetitions] = useState<{ [key: string]: CompetitionEntry[] }>({
        competitive_programmings: [],
        ui_ux_designs: [],
        web_developments: [],
        mobile_legends: [],
    });
    const [loadedTabs, setLoadedTabs] = useState<{ [key: string]: boolean }>({
        competitive_programmings: false,
        ui_ux_designs: false,
        web_developments: false,
        mobile_legends: false,
    });
    const [loading, setLoading] = useState(false);

    const itemsPerPage = 5;

    const { competitions: cpCompetitions, loading: cpLoading } = useCompetitiveProgramming();
    const { competitions: uiuxCompetitions, loading: uiuxLoading } = useUiUxDesign();
    const { competitions: wdCompetitions, loading: wdLoading } = useWebDevelopment();
    const { competitions: mlCompetitions, loading: mlLoading } = useMobileLegends();

    useEffect(() => {
        if (!loadedTabs[currentTab]) {
            setLoading(true);
            let data: CompetitionEntry[] = [];

            switch (currentTab) {
                case 'competitive_programmings':
                    if (!cpLoading) data = cpCompetitions;
                    break;
                case 'ui_ux_designs':
                    if (!uiuxLoading) data = uiuxCompetitions;
                    break;
                case 'web_developments':
                    if (!wdLoading) data = wdCompetitions;
                    break;
                case 'mobile_legends':
                    if (!mlLoading) data = mlCompetitions;
                    break;
                default:
                    break;
            }

            if (data.length > 0) {
                setCompetitions(prev => ({ ...prev, [currentTab]: data }));
                setLoadedTabs(prev => ({ ...prev, [currentTab]: true }));
                setLoading(false);
            }
        }
    }, [currentTab, loadedTabs, cpLoading, uiuxLoading, wdLoading, mlLoading, cpCompetitions, uiuxCompetitions, wdCompetitions, mlCompetitions]);

    const handleVerify = async (id: string) => {
        setVerifying(id);
        const entryDoc = doc(db, currentTab, id);
        await updateDoc(entryDoc, { is_verified: true });
        setCompetitions(prev => ({
            ...prev,
            [currentTab]: prev[currentTab].map(entry =>
                entry.id === id ? { ...entry, is_verified: true } : entry
            )
        }));
        setVerifying(null);
    };

    const currentEntries = competitions[currentTab] || [];
    const filteredEntries = currentEntries.filter((entry: CompetitionEntry) => entry.team_name.toLowerCase().includes(searchTerm.toLowerCase()));
    const totalPages = Math.ceil(filteredEntries.length / itemsPerPage);
    const paginatedEntries = filteredEntries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [currentTab]);

    return (
        <div>
            <div className="tabs">
                {competitionCollections.map(collection => (
                    <button
                        key={collection.collection}
                        onClick={() => setCurrentTab(collection.collection)}
                        className={currentTab === collection.collection ? 'active' : ''}
                    >
                        {collection.name}
                    </button>
                ))}
            </div>
            <input
                type="text"
                placeholder="Search by Team Name"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            {loading ? (
                <div className="spinner-container">
                    <div className="spinner-loading"></div>
                </div>
            ) : (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Name 1</th>
                                <th>Proof</th>
                                {currentTab !== 'competitive_programmings' && currentTab !== 'mobile_legends' && <th>Submission</th>}
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedEntries.map((entry: CompetitionEntry) => (
                                <tr key={entry.id}>
                                    <td>{entry.team_name}</td>
                                    <td>{entry.name_1}</td>
                                    <td><a href={entry.proof}>{entry.payment_method}</a></td>
                                    {entry.submission && <td><a href={entry.submission}>Submission</a></td>}
                                    <td>{entry.date.toLocaleString()}</td>
                                    <td>
                                        {entry.is_verified ? 'Verified' : (
                                            <button onClick={() => handleVerify(entry.id as string)} disabled={verifying === entry.id}>
                                                {verifying === entry.id ? <div className="spinner-loading"></div> : 'Verify'}
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

export default MultipleCollectionsTable;
