// components/Admin-Dashboard/CompetitionCollectionsTable.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { db } from '@/lib/firebase';
import useCompetitiveProgramming from '@/hooks/useCompetitiveProgramming';
import useUiUxDesign from '@/hooks/useUiUxDesign';
import useWebDevelopment from '@/hooks/useWebDevelopment';
import useMobileLegends from '@/hooks/useMobileLegends';
import { Button } from '../ui/button';
import ExportCSVButton from './ExportCSVButton';
import ExportSubmissionButton from './ExportSubmissionButton';

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
    { name: "Competitive Programming", collection: "competitive_programmings", type: 'CompetitiveProgramming' },
    { name: "UI/UX Design", collection: "ui_ux_designs", type: 'UiUxDesign' },
    { name: "Web Development", collection: "web_developments", type: 'WebDevelopment' },
    { name: "Mobile Legends", collection: "mobile_legends", type: 'MobileLegends' }
];

const CompetitionCollectionsTable: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTab, setCurrentTab] = useState(competitionCollections[0].collection);
    const [currentData, setCurrentData] = useState<any[]>([]);
    const [verifying, setVerifying] = useState<string | null>(null);
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

    const itemsPerPage = 10;

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
                    if (!uiuxLoading) data = uiuxCompetitions.map(entry => ({
                        ...entry,
                        submission: entry.submission || 'No Submission'
                    }));
                    break;
                case 'web_developments':
                    if (!wdLoading) data = wdCompetitions.map(entry => ({
                        ...entry,
                        submission: entry.submission || 'No Submission'
                    }));
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
                setCurrentData(data);
                setLoading(false);
            }
        }
    }, [currentTab, loadedTabs, cpLoading, uiuxLoading, wdLoading, mlLoading, cpCompetitions, uiuxCompetitions, wdCompetitions, mlCompetitions]);

    const handleVerify = async (id: string) => {
        setVerifying(id);
        const entryDoc = doc(db, currentTab, id);
        await updateDoc(entryDoc, { is_verified: true });
        setCompetitions(prev => {
            const updatedTabData = prev[currentTab].map(entry =>
                entry.id === id ? { ...entry, is_verified: true } : entry
            );

            return {
                ...prev,
                [currentTab]: updatedTabData
            };
        });
        setVerifying(null);
    };

    useEffect(() => {
        setCurrentData(competitions[currentTab] || []);
    }, [competitions, currentTab]);

    const currentEntries = competitions[currentTab] || [];
    const filteredEntries = currentEntries.filter((entry: CompetitionEntry) =>
        entry.team_name && entry.team_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPages = Math.ceil(filteredEntries.length / itemsPerPage);
    const paginatedEntries = filteredEntries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [currentTab]);

    const currentCollectionType = competitionCollections.find(collection => collection.collection === currentTab)?.type;

    return (
        <div className="p-4 text-primary">
            <h3 className="admin-section border-b-2 border-gray-300 z-30 text-primary bg-background px-4 font-monument text-xl uppercase lg:text-2xl xl:px-6 xl:text-3xl">Competitions</h3>
            {/* For larger screens */}
            <div className="hidden md:flex mb-4 space-x-2">
                {competitionCollections.map(collection => (
                    <Button
                        key={collection.collection}
                        onClick={() => setCurrentTab(collection.collection)}
                        className={`flex-1 p-2 ${currentTab === collection.collection ? 'bg-primary-300 text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
                    >
                        {collection.name}
                    </Button>
                ))}
            </div>

            {/* For mobile screens */}
            <div className="md:hidden mb-4">
                <Button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full p-2 bg-muted text-muted-foreground"
                >
                    {competitionCollections.find(collection => collection.collection === currentTab)?.name}
                </Button>
                {isDropdownOpen && (
                    <div className="mt-2 bg-white shadow-lg rounded-md">
                        {competitionCollections.map(collection => (
                            <div
                                key={collection.collection}
                                onClick={() => {
                                    setCurrentTab(collection.collection);
                                    setIsDropdownOpen(false);
                                }}
                                className={`p-2 cursor-pointer ${currentTab === collection.collection ? 'bg-primary-300 text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
                            >
                                {collection.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <input
                type="text"
                placeholder="Search by Team Name"
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
                                    <th className="p-2 text-center">Team Name</th>
                                    <th className="p-2 text-center">Name 1</th>
                                    <th className="p-2 text-center">Proof</th>
                                    {currentTab !== 'competitive_programmings' && currentTab !== 'mobile_legends' && <th className="p-2 text-center">Submission</th>}
                                    <th className="p-2 text-center">Date</th>
                                    <th className="p-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedEntries.map((entry: CompetitionEntry) => (
                                    <tr key={entry.id} className="border-b">
                                        <td className="p-2 text-center">{entry.team_name}</td>
                                        <td className="p-2 text-center">{entry.name_1}</td>
                                        <td className="p-2 text-center"><a href={entry.proof} className="text-blue-500 underline">{entry.payment_method}</a></td>
                                        {entry.submission && <td className="p-2 text-center">
                                            {entry.submission === "No Submission" ? (
                                                <span className="text-gray-400">No Submission</span>
                                            ) : (
                                                <a href={entry.submission} className="text-blue-500 underline">Submission</a>
                                            )}
                                        </td>}
                                        <td className="p-2 text-center">
                                            {entry.date instanceof Timestamp
                                                ? entry.date.toDate().toLocaleString()
                                                : new Timestamp(entry.date.getTime() / 1000, 0).toDate().toLocaleString()}
                                        </td>
                                        <td className="p-2 text-center text-primary">
                                            {entry.is_verified ? 'Verified' : (
                                                <Button
                                                    onClick={() => {
                                                        if (window.confirm(`Are you sure to verify ${entry.team_name}?`)) {
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
                    <div className={`flex flex-col ${currentTab === 'ui_ux_designs' || currentTab === 'web_developments' ? 'lg:flex-row' : 'md:flex-row'} justify-between items-center`}>
                        <div className="space-x-4 mb-4 md:mb-1">
                            <ExportCSVButton data={currentData} collectionName={currentCollectionType ?? 'Null'} />
                            {(currentTab === 'ui_ux_designs' || currentTab === 'web_developments') && (
                                <ExportSubmissionButton data={currentData} collectionName={currentCollectionType ?? 'Null'} />
                            )}
                        </div>
                        <div className="space-x-2">
                            <Button
                                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-2 bg-muted text-muted-foreground rounded disabled:opacity-50"
                            >
                                Previous
                            </Button>
                            <span>
                                Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, filteredEntries.length)} of {filteredEntries.length} entries
                            </span>
                            <span>({currentPage} / {totalPages})</span>
                            <Button
                                onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="p-2 bg-muted text-muted-foreground rounded disabled:opacity-50"
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CompetitionCollectionsTable;
