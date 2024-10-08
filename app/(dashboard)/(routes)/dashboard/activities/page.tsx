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
import { onAuthStateChanged, UserInfo } from "firebase/auth";
import Ticket from "@/components/Ticket";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ActivitiesPage() {
  const [competitions, setCompetitions] = useState<any[]>([]);
  const [workshops, setWorkshops] = useState<any[]>([
    {id:"1234", name:"testinger", date:{seconds:"99999"}, is_verified:true}
  ]);
  const [talkshows, setTalkshows] = useState<any[]>([
    {id:"1234", name:"testinger", date:{seconds:"99999"}, is_verified:true}
  ]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserInfo>();

  useEffect(() => {
    onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        // console.log(userFirebase);
        setUser(userFirebase);
      }
    });
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const userId = user?.uid;
  //     try {
  //       const [
  //         mobileLegends,
  //         competitiveProgramming,
  //         uiUxDesign,
  //         webDevelopment,
  //         workshops,
  //         talkshows,
  //       ] = await Promise.all([
  //         getMobileLegendsByUserId(userId!).then((data) =>
  //           data.map((comp) => ({ ...comp, type: "Mobile Legends" })),
  //         ),
  //         getCompetitiveProgrammingByUserId(userId!).then((data) =>
  //           data.map((comp) => ({
  //             ...comp,
  //             type: "Competitive Programming",
  //           })),
  //         ),
  //         getUiUxDesignByUserId(userId!).then((data) =>
  //           data.map((comp) => ({ ...comp, type: "UI/UX Design" })),
  //         ),
  //         getWebDevelopmentByUserId(userId!).then((data) =>
  //           data.map((comp) => ({ ...comp, type: "Web Development" })),
  //         ),
  //         getWorkshopsByUserId(userId!),
  //         getTalkshowsByUserId(userId!),
  //       ]);

  //       setCompetitions([
  //         ...mobileLegends,
  //         ...competitiveProgramming,
  //         ...uiUxDesign,
  //         ...webDevelopment,
  //       ]);
  //       setWorkshops(workshops);
  //       setTalkshows(talkshows);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, [user?.uid]);

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
            {!loading ? (
              <div className="spinner-loading"></div>
            ) : (
              competitions.map((comp) => (
                <FlashCard
                  key={comp.id}
                  title={comp.type}
                  name={comp.team_name || comp.name_1}
                  date={new Date(comp.date.seconds * 1000).toLocaleDateString()}
                  message={comp.is_verified ? "verified" : "waiting"}
                  project={
                    comp.type === "UI/UX Design" ||
                    comp.type === "Web Development"
                  }
                />
              ))
            )}
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="text-xl">Talkshow</h3>
            {!loading ? (
              <div className="spinner-loading"></div>
            ) : (
              talkshows.map((talkshow) => (
                <>
                <FlashCard
                  key={talkshow.id}
                  title="Talkshow"
                  name={talkshow.name}
                  date={new Date(
                    talkshow.date.seconds * 1000,
                  ).toLocaleDateString()}
                  message={talkshow.is_verified ? "verified" : "waiting"}
                  project={false}
                />
                <div>
                <PDFViewer className="h-[200px]">
                  <Ticket name={talkshow.name} noTicket={`SRIFOTON-${talkshow.id}`} isWorkshop={false}/>
                </PDFViewer>
                </div>
                <div className="flex space-y-8 lg:space-x-4 lg:space-y-0">
                {!loading ?
                  <Button size={"sm"} variant={"srifoton"}>Loading Ticket...</Button>
                  :

                  <PDFDownloadLink
                    document={<Ticket name={talkshow.name} noTicket={`SRIFOTON-${talkshow.id}`} isWorkshop={false}/>}
                    fileName={`Ticket Talkshow SRIFOTON-${talkshow.id}.pdf`}
                  >
                    <Button size={"sm"} variant={"srifoton"}>Download Ticket</Button>
                  </PDFDownloadLink>
                }
                  <Link href={"#"}>
                    <Button size={"sm"} variant={"srifoton"}>Join Whatsapp Group</Button>
                  </Link>
                </div>
                </>
              ))
            )}
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="text-xl">Workshop</h3>
            {!loading ? (
              <div className="spinner-loading"></div>
            ) : (
              workshops.map((workshop) => (
                <>
                  <FlashCard
                    key={workshop.id}
                    title="Workshop"
                    name={workshop.name}
                    date={new Date(
                      workshop.date.seconds * 1000,
                    ).toLocaleDateString()}
                    message={workshop.is_verified ? "verified" : "waiting"}
                    project={false}
                  />
                  <Ticket name={workshop.name} noTicket={`SRIFOTON-${workshop.id}`} isWorkshop={true}/>
                  <div className="flex-col lg:flex space-y-4 lg:space-x-4 lg:space-y-0">
                    <PDFDownloadLink
                      document={<Ticket name={workshop.name} noTicket={`SRIFOTON-${workshop.id}`} isWorkshop={true}/>}
                      fileName={`Ticket Talkshow SRIFOTON-${workshop.id}.pdf`}
                    >
                      {!loading ?
                        <Button size={"sm"} variant={"srifoton"}>Loading Ticket...</Button> :
                        <Button size={"sm"} variant={"srifoton"}>Download Ticket</Button>
                      }
                    </PDFDownloadLink>
                    <Link href={"#"}>
                      <Button size={"sm"} variant={"srifoton"} >Join Whatsapp Group</Button>
                    </Link>
                  </div>
                </>
              ))
            )}
          </div>
        </div>
      </CardCrook>
    </section>
  );
}
