"use client";

import React, { useEffect, useState } from "react";
import { getCompetitiveProgrammingById } from "@/lib/network/competitions/competitiveProgrammingQueries";
import { getUiUxDesignById } from "@/lib/network/competitions/uiUxDesignQueries";
import { getMobileLegendById } from "@/lib/network/competitions/mobileLegendsQueries";
import { getWebDevelopmentById } from "@/lib/network/competitions/webDevelopmentQueries";
import { useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { CompetitiveProgramming } from "@/lib/types/competitions/competitiveProgrammingTypes";

export default function Page() {
  const params = useParams<{ competition: string; id: string }>();
  const [data, setData] = useState<any>(null);
  let comp: CompetitiveProgramming | null = null;

  useEffect(() => {
    async function fetchData() {
      try {
        switch (params.competition) {
          case "competitive_programmings":
            comp = await getCompetitiveProgrammingById(params.id!);
            break;
          case "ui_ux_designs":
            comp = await getUiUxDesignById(params.id!);
            break;
          case "web_developments":
            comp = await getWebDevelopmentById(params.id!);
            break;
          case "mobile_legends":
            comp = await getMobileLegendById(params.id!);
            break;
          default:
          // code block
        }
        setData(comp);
        console.log(comp);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    console.log(data);
  }, [params.id]);

  return (
    <section className="mb-10">
      {data && (
        <div className="space-y-4 text-white">
          <div className="space-y-2">
            <label htmlFor="" className="text-xl">
              College
            </label>
            <Input placeholder={data.college} disabled />
          </div>
          <div className="space-y-2">
            <label htmlFor="" className="text-xl">
              Team Name
            </label>
            <Input placeholder={data.team_name} disabled />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="space-y-4 md:w-1/3">
              <h1 className="text-xl uppercase">Leader</h1>
              <div className="space-y-2">
                <label htmlFor="" className="text-xl">
                  Name
                </label>
                <Input placeholder={data.name_1} disabled />
              </div>
              <div className="space-y-2">
                <label htmlFor="" className="text-xl">
                  Nim
                </label>
                <Input placeholder={data.nim_1} disabled />
              </div>
              <div className="space-y-2">
                <label htmlFor="" className="text-xl">
                  Instagram
                </label>
                <Input placeholder={data.instagram_1} disabled />
              </div>
              <div className="space-y-2">
                <label htmlFor="" className="text-xl">
                  Phone Number
                </label>
                <Input placeholder={data.phone_number_1} disabled />
              </div>
            </div>
            {data.name_2 && (
              <div className="space-y-4 md:w-1/3">
                <h1 className="text-xl uppercase">Member 1</h1>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Name
                  </label>
                  <Input placeholder={data.name_2} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Nim
                  </label>
                  <Input placeholder={data.nim_2} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Instagram
                  </label>
                  <Input placeholder={data.instagram_2} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Phone Number
                  </label>
                  <Input placeholder={data.phone_number_2} disabled />
                </div>
              </div>
            )}
            {data.name_3 && (
              <div className="space-y-4 md:w-1/3">
                <h1 className="text-xl uppercase">Member 2</h1>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Name
                  </label>
                  <Input placeholder={data.name_3} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Nim
                  </label>
                  <Input placeholder={data.nim_3} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Instagram
                  </label>
                  <Input placeholder={data.instagram_3} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Phone Number
                  </label>
                  <Input placeholder={data.phone_number_3} disabled />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            {data.name_4 && (
              <div className="space-y-4 md:w-1/3">
                <h1 className="text-xl uppercase">Member 3</h1>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Name
                  </label>
                  <Input placeholder={data.name_4} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Nim
                  </label>
                  <Input placeholder={data.nim_4} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Instagram
                  </label>
                  <Input placeholder={data.instagram_4} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Phone Number
                  </label>
                  <Input placeholder={data.phone_number_4} disabled />
                </div>
              </div>
            )}
            {data.name_5 && (
              <div className="space-y-4 md:w-1/3">
                <h1 className="text-xl uppercase">Member 4</h1>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Name
                  </label>
                  <Input placeholder={data.name_5} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Nim
                  </label>
                  <Input placeholder={data.nim_5} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Instagram
                  </label>
                  <Input placeholder={data.instagram_5} disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-xl">
                    Phone Number
                  </label>
                  <Input placeholder={data.phone_number_5} disabled />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
