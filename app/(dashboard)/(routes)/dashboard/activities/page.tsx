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
import { toast } from "sonner";

export default function ActivitiesPage() {
  const [competitions, setCompetitions] = useState<any[]>([]);
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [talkshows, setTalkshows] = useState<any[]>([]);
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

  useEffect(() => {
    async function fetchData() {
      const userId = user?.uid;
      try {
        const [
          mobileLegends,
          competitiveProgramming,
          uiUxDesign,
          webDevelopment,
          workshops,
          talkshows,
        ] = await Promise.all([
          getMobileLegendsByUserId(userId!).then((data) =>
            data.map((comp) => ({ ...comp, type: "Mobile Legends" })),
          ),
          getCompetitiveProgrammingByUserId(userId!).then((data) =>
            data.map((comp) => ({
              ...comp,
              type: "Competitive Programming",
            })),
          ),
          getUiUxDesignByUserId(userId!).then((data) =>
            data.map((comp) => ({ ...comp, type: "UI/UX Design" })),
          ),
          getWebDevelopmentByUserId(userId!).then((data) =>
            data.map((comp) => ({ ...comp, type: "Web Development" })),
          ),
          getWorkshopsByUserId(userId!),
          getTalkshowsByUserId(userId!),
        ]);

        setCompetitions([
          ...mobileLegends,
          ...competitiveProgramming,
          ...uiUxDesign,
          ...webDevelopment,
        ]);
        setWorkshops(workshops);
        setTalkshows(talkshows);

        const invalidWorkshops = workshops.filter(
          (workshop) => workshop.is_verified && !workshop.ticket_number
        );
        const invalidTalkshows = talkshows.filter(
          (talkshow) => talkshow.is_verified && !talkshow.ticket_number
        );

        if (invalidWorkshops.length > 0 || invalidTalkshows.length > 0) {
          toast.error(
            "Ada talkshow/workshop Anda yang tidak memiliki nomor tiket, harap hubungi Contact Person."
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [user?.uid]);

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
            {loading ? (
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
            {loading ? (
              <div className="spinner-loading"></div>
            ) : (
              talkshows.map((talkshow) => (
                <div key={talkshow.id}>
                  <FlashCard
                    title="Talkshow"
                    name={talkshow.name}
                    date={new Date(talkshow.date.seconds * 1000).toLocaleDateString()}
                    message={talkshow.is_verified ? "verified" : "waiting"}
                    project={false}
                  />
                  {talkshow.is_verified && (
                    <div>
                      <PDFViewer className="h-24">
                        <Ticket
                          name={talkshow.name}
                          noTicket={talkshow.ticket_number ?? ""}
                          isWorkshop={false}
                        />
                      </PDFViewer>
                    </div>
                  )}
                  <div className="flex space-y-8 lg:space-x-4 lg:space-y-0">
                    {loading ? (
                      <Button size={"sm"} variant={"srifoton"}>
                        Loading Ticket...
                      </Button>
                    ) : (
                      talkshow.is_verified && (
                        <PDFDownloadLink
                          document={
                            <Ticket
                              name={talkshow.name}
                              noTicket={talkshow.ticket_number ?? ""}
                              isWorkshop={false}
                            />
                          }
                          fileName={`Ticket Talkshow ${talkshow.ticket_number ?? ""}.pdf`}
                        >
                          <Button size={"sm"} variant={"srifoton"}>
                            Download Ticket
                          </Button>
                        </PDFDownloadLink>
                      )
                    )}
                    <Link href={"#"}>
                      <Button size={"sm"} variant={"srifoton"}>
                        Join Whatsapp Group
                      </Button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="text-xl">Workshop</h3>
            {loading ? (
              <div className="spinner-loading"></div>
            ) : (
              workshops.map((workshop) => (
                <div key={workshop.id}>
                  <FlashCard
                    title="Workshop"
                    name={workshop.name}
                    date={new Date(workshop.date.seconds * 1000).toLocaleDateString()}
                    message={workshop.is_verified ? "verified" : "waiting"}
                    project={false}
                  />
                  {workshop.is_verified && (
                    <div>
                      <PDFViewer className="h-24">
                        <Ticket
                          name={workshop.name}
                          noTicket={workshop.ticket_number ?? ""}
                          isWorkshop={true}
                        />
                      </PDFViewer>
                    </div>
                  )}
                  <div className="flex space-y-8 lg:space-x-4 lg:space-y-0">
                    {loading ? (
                      <Button size={"sm"} variant={"srifoton"}>
                        Loading Ticket...
                      </Button>
                    ) : (
                      workshop.is_verified && (
                        <PDFDownloadLink
                          document={
                            <Ticket
                              name={workshop.name}
                              noTicket={workshop.ticket_number ?? ""}
                              isWorkshop={true}
                            />
                          }
                          fileName={`Ticket Workshop ${workshop.ticket_number ?? ""}.pdf`}
                        >
                          <Button size={"sm"} variant={"srifoton"}>
                            Download Ticket
                          </Button>
                        </PDFDownloadLink>
                      )
                    )}
                    <Link href={"#"}>
                      <Button size={"sm"} variant={"srifoton"}>
                        Join Whatsapp Group
                      </Button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </CardCrook>
    </section>
  );
}
