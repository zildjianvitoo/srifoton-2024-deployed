"use client";

import React, { useEffect } from "react";
import SectionContent from "./SectionContent";
import AdminDashboardGraph from "./AdminDashboardGraph";
import useSegmentData from "@/hooks/useSegmentData";

const CategorizedGraph = () => {
    const { data, loading, error } = useSegmentData();

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (loading) return (
        <div className="spinner-container">
            <div className="spinner-loading"></div>
        </div>
    );
    if (error) return <div>{error}</div>;
    if (!data) return <div>No data available</div>;


    const competitionData = [
        {
            name: "Competitive Programming",
            verified: data.competition.competitiveProgramming.verified,
            nonVerified: data.competition.competitiveProgramming.nonVerified,
            total: "Total: " + (data.competition.competitiveProgramming.verified + data.competition.competitiveProgramming.nonVerified),
        },
        {
            name: "UI/UX Design",
            verified: data.competition.uiUxDesign.verified,
            nonVerified: data.competition.uiUxDesign.nonVerified,
            total: "Total: " + (data.competition.uiUxDesign.verified + data.competition.uiUxDesign.nonVerified),
        },
        {
            name: "Web Development",
            verified: data.competition.webDevelopment.verified,
            nonVerified: data.competition.webDevelopment.nonVerified,
            total: "Total: " + (data.competition.webDevelopment.verified + data.competition.webDevelopment.nonVerified),
        },
        {
            name: "Mobile Legends",
            verified: data.competition.mobileLegends.verified,
            nonVerified: data.competition.mobileLegends.nonVerified,
            total: "Total: " + (data.competition.mobileLegends.verified + data.competition.mobileLegends.nonVerified),
        },
    ];

    const talkshowData = [
        {
            name: "Talkshow",
            verified: data.talkshow.verified,
            nonVerified: data.talkshow.nonVerified,
            total: "Total: " + (data.talkshow.verified + data.talkshow.nonVerified),
        },
    ];

    const workshopData = [
        {
            name: "Workshop",
            verified: data.workshop.verified,
            nonVerified: data.workshop.nonVerified,
            total: "Total: " + (data.workshop.verified + data.workshop.nonVerified),
        },
    ];

    return (
        <section id="categorized-graph" className="flex flex-col gap-8">
            <div className="w-full">
                <h3 className="admin-section border-b-2 border-gray-300 z-30 text-primary bg-background px-4 font-monument text-xl uppercase lg:text-2xl xl:px-6 xl:text
        -3xl">Competition</h3>
                <div className="w-full h-[400px]">
                    <AdminDashboardGraph data={competitionData} title="Competition" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full">
                <div className="w-full md:w-1/2">
                    <h3 className="admin-section border-b-2 border-gray-300 z-30 text-primary bg-background px-4 font-monument text-xl uppercase lg:text-2xl xl:px-6 xl:text
        -3xl">Talkshow</h3>
                    <div className="w-full h-[400px]">
                        <AdminDashboardGraph data={talkshowData} title="Talkshow" />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="admin-section border-b-2 border-gray-300 z-30 text-primary bg-background px-4 font-monument text-xl uppercase lg:text-2xl xl:px-6 xl:text
        -3xl">Workshop</h3>
                    <div className="w-full h-[400px]">
                        <AdminDashboardGraph data={workshopData} title="Workshop" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorizedGraph;
