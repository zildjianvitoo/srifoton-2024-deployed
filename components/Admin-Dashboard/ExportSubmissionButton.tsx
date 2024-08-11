// components/Admin-Dashboard/ExportSubmissionButton.tsx

"use client";

import React, { useState } from "react";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { UiUxDesign } from '@/lib/types/competitions/uiUxDesignTypes';
import { WebDevelopment } from '@/lib/types/competitions/webDevelopmentTypes';
import { Button } from "../ui/button";
import useAuthOrNullRedirect from "@/hooks/useAuthOrNullRedirect";

type SubmissionType = UiUxDesign | WebDevelopment;

interface ExportSubmissionButtonProps {
    data: SubmissionType[];
    collectionName: string;
}

const ExportSubmissionButton: React.FC<ExportSubmissionButtonProps> = ({ data, collectionName }) => {
    useAuthOrNullRedirect(true);

    const [loading, setLoading] = useState(false);

    const handleExport = async () => {
        setLoading(true);
        const zip = new JSZip();
        for (const entry of data) {
            if (entry.submission && entry.submission !== "No Submission") {
                const response = await fetch(entry.submission);
                const blob = await response.blob();
                zip.file(`${entry.team_name}-${entry.id}-SRIFOTON2024.zip`, blob);
            }
        }
        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, collectionName + `Submissions-SRIFOTON2024.zip`);
        setLoading(false);
    };

    return (
        <Button onClick={handleExport} disabled={loading} variant={"srifoton"}>
            {loading ? <span className="spinner"></span> : "Export Submissions"}
        </Button>
    );
};

export default ExportSubmissionButton;
