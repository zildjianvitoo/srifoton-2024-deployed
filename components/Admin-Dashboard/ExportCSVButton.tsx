// components/Admin-Dashboard/ExportCSVButton.tsx

"use client";

import React, { useState } from "react";
import { saveAs } from 'file-saver';
import { CompetitiveProgramming } from '@/lib/types/competitions/competitiveProgrammingTypes';
import { Button } from "../ui/button";
import { UiUxDesign } from "@/lib/types/competitions/uiUxDesignTypes";
import { WebDevelopment } from "@/lib/types/competitions/webDevelopmentTypes";
import { MobileLegends } from "@/lib/types/competitions/mobileLegendsTypes";
import { Talkshow } from "@/lib/types/talkshowTypes";
import { Workshop } from "@/lib/types/workshopTypes";
import { Timestamp } from "firebase/firestore";

type CollectionType = CompetitiveProgramming | UiUxDesign | WebDevelopment | MobileLegends | Talkshow | Workshop;

interface ExportCSVButtonProps {
    data: CollectionType[];
    collectionName: string;
}

const ExportCSVButton: React.FC<ExportCSVButtonProps> = ({ data, collectionName }) => {
    const [loading, setLoading] = useState(false);

    const convertToCSV = (data: CollectionType[]) => {
        if (data.length === 0) return '';

        const header = ['No', ...Object.keys(data[0])];
        const rows = data.map((item, index) => {
            const values = Object.values(item).map(value => {
                if (value instanceof Timestamp) {
                    return value.toDate().toLocaleString();
                }
                return value;
            });
            return [index + 1, ...values];
        });

        return [header, ...rows].map(row => row.join(',')).join('\n');
    };

    const handleExport = () => {
        setLoading(true);
        const csvData = convertToCSV(data);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const now = new Date().toISOString();
        saveAs(blob, `${now}-${collectionName}-SRIFOTON2024.csv`);
        setLoading(false);
    };

    return (
        <Button onClick={handleExport} disabled={loading} variant={"srifoton"}>
            {loading ? <span className="spinner"></span> : "Export to CSV"}
        </Button>
    );
};

export default ExportCSVButton;
