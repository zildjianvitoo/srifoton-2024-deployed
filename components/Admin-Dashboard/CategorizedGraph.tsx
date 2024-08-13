// components/Admin-Dashboard/CategorizedGraph.tsx

"use client";

import React, { useEffect } from "react";
import SectionContent from "./SectionContent";
import AdminDashboardGraph from "./AdminDashboardGraph";
import useSegmentData from "@/hooks/useSegmentData";
import useAuthOrNullRedirect from "@/hooks/useAuthOrNullRedirect";
import useAdminPermissionDenied from "@/hooks/useAdminPermissionDenied";

const CategorizedGraph = () => {
  useAuthOrNullRedirect(true);

  const { data, loading, error } = useSegmentData();

  useAdminPermissionDenied(error === "permission-denied");

  // useEffect(() => {
  //     console.log(data);
  // }, [data]);

  if (loading)
    return (
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
      total:
        "Total: " +
        (data.competition.competitiveProgramming.verified +
          data.competition.competitiveProgramming.nonVerified),
    },
    {
      name: "UI/UX Design",
      verified: data.competition.uiUxDesign.verified,
      nonVerified: data.competition.uiUxDesign.nonVerified,
      total:
        "Total: " +
        (data.competition.uiUxDesign.verified +
          data.competition.uiUxDesign.nonVerified),
    },
    {
      name: "Web Development",
      verified: data.competition.webDevelopment.verified,
      nonVerified: data.competition.webDevelopment.nonVerified,
      total:
        "Total: " +
        (data.competition.webDevelopment.verified +
          data.competition.webDevelopment.nonVerified),
    },
    {
      name: "Mobile Legends",
      verified: data.competition.mobileLegends.verified,
      nonVerified: data.competition.mobileLegends.nonVerified,
      total:
        "Total: " +
        (data.competition.mobileLegends.verified +
          data.competition.mobileLegends.nonVerified),
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
        <h3 className="admin-section xl:text -3xl z-30 border-b-2 border-gray-300 bg-background px-4 font-monument text-xl uppercase text-primary lg:text-2xl xl:px-6">
          Competitions
        </h3>
        <div className="h-[400px] w-full">
          <AdminDashboardGraph data={competitionData} title="Competition" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 md:flex-row">
        <div className="w-full md:w-1/2">
          <h3 className="admin-section xl:text -3xl z-30 border-b-2 border-gray-300 bg-background px-4 font-monument text-xl uppercase text-primary lg:text-2xl xl:px-6">
            Talkshow
          </h3>
          <div className="h-[400px] w-full">
            <AdminDashboardGraph data={talkshowData} title="Talkshow" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="admin-section xl:text -3xl z-30 border-b-2 border-gray-300 bg-background px-4 font-monument text-xl uppercase text-primary lg:text-2xl xl:px-6">
            Workshop
          </h3>
          <div className="h-[400px] w-full">
            <AdminDashboardGraph data={workshopData} title="Workshop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorizedGraph;
