"use client";

import React, { useEffect, useState } from "react";
import FlashCard from "@/components/Dashboard/FlashCard";
import { getMobileLegendsByUserId } from "@/lib/network/competitions/mobileLegendsQueries";
import { getCompetitiveProgrammingByUserId } from "@/lib/network/competitions/competitiveProgrammingQueries";
import { getUiUxDesignByUserId } from "@/lib/network/competitions/uiUxDesignQueries";
import { getWebDevelopmentByUserId } from "@/lib/network/competitions/webDevelopmentQueries";
import { getTalkshowsByUserId } from "@/lib/network/talkshows/talkshowQueries";
import { getWorkshopsByUserId } from "@/lib/network/workshops/workshopQueries";
import CardCrook from "@/components/Root/CardCrook.dasboard";
import { auth } from "@/lib/firebase";
import { redirect } from "next/navigation";

export default function ActivitiesPage() {
  const [competitions, setCompetitions] = useState<any[]>([]);
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [talkshows, setTalkshows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const user = auth.currentUser;

  if (!user) {
    redirect("/dashboard/logout");
  }

  const userId = user.uid;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const mobileLegends = (await getMobileLegendsByUserId(userId)).map(comp => ({ ...comp, type: "Mobile Legends" }));
      const competitiveProgramming = (await getCompetitiveProgrammingByUserId(userId)).map(comp => ({ ...comp, type: "Competitive Programming" }));
      const uiUxDesign = (await getUiUxDesignByUserId(userId)).map(comp => ({ ...comp, type: "UI/UX Design" }));
      const webDevelopment = (await getWebDevelopmentByUserId(userId)).map(comp => ({ ...comp, type: "Web Development" }));
      const workshops = await getWorkshopsByUserId(userId);
      const talkshows = await getTalkshowsByUserId(userId);

      setCompetitions([...mobileLegends, ...competitiveProgramming, ...uiUxDesign, ...webDevelopment]);
      setWorkshops(workshops);
      setTalkshows(talkshows);
      setLoading(false);
    }

    fetchData();

  }, [userId]);


  return (
    <section className="mt-16 overflow-hidden md:mt-40 lg:absolute lg:right-0 lg:top-28 lg:mt-0 lg:w-4/5 xl:top-40">
      <CardCrook className="mx-auto !w-full font-monument lg:!w-2/3">
        <img
          src="/img/stamp.png"
          alt="stamp"
          className="absolute right-4 top-10 hidden size-20 font-monument md:right-12 md:top-4 md:block lg:right-6 lg:top-2 lg:size-32"
        />
        <h3 className="text-center text-xl">Activities</h3>
        <div className="mt-10 flex flex-col space-y-8">
          <div className="flex flex-col space-y-8">
            <h3 className="text-xl">Competitions</h3>
            {loading ? (
              <div className="spinner-loading"></div>
            ) :
              competitions.map((comp) => (
                <FlashCard
                  key={comp.id}
                  title={comp.type}
                  name={comp.team_name || comp.name_1}
                  date={new Date(comp.date).toLocaleDateString()}
                  message={comp.is_verified ? "verified" : "waiting"}
                  project={Boolean(comp.submission)}
                />
              ))}
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="text-xl">Talkshow</h3>
            {loading ? (
              <div className="spinner-loading"></div>
            ) :
              talkshows.map((talkshow) => (
                <FlashCard
                  key={talkshow.id}
                  title="Talkshow"
                  name={talkshow.name}
                  date={new Date(talkshow.date).toLocaleDateString()}
                  message={talkshow.is_verified ? "verified" : "waiting"}
                  project={false}
                />
              ))}
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="text-xl">Workshop</h3>
            {loading ? (
              <div className="spinner-loading"></div>
            ) :
              workshops.map((workshop) => (
                <FlashCard
                  key={workshop.id}
                  title="Workshop"
                  name={workshop.name}
                  date={new Date(workshop.date).toLocaleDateString()}
                  message={workshop.is_verified ? "verified" : "waiting"}
                  project={false}
                />
              ))}
          </div>
        </div>
      </CardCrook>
    </section>
  );
}
