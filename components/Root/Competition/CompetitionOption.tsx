import React from "react";
import SectionHeader from "../SectionHeader";
import CardCrook from "../CardCrook";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

export default function CompetitionOption({}: Props) {
  return (
    <section id="competition-option">
      <div className="mt-20 flex flex-col gap-6 sm:mt-0 md:gap-7 lg:gap-9">
        {/* <SectionHeader text="Competition Options" />
        <div className="mt-6 flex flex-col gap-14 md:gap-20 lg:gap-28 xl:flex-row">
          <CardCrook className="max-xl:mx-auto">
            <div className="flex h-full w-full flex-col justify-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl">
                COMPETITIVE PROGRAMMING
              </h2>
              <hr className="mt-5 border-[2px] border-text-200 lg:mt-7" />
              <p className="mt-8 text-justify font-inter text-sm lg:mt-12 lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet. Pellentesque commodo lacus at sodales sodales. Quisque
                sagittis orci ut diam condimentum, vel euismod erat placerat. In
                iaculis arcu eros, eget tempus orci facilisis id.
              </p>
              <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:gap-12 xl:flex-row xl:gap-20">
                <div className="flex gap-5">
                  <Link href={"/register"}>
                    <Button
                      variant={"outline"}
                      className="border-[3px] text-sm lg:text-base"
                    >
                      Register
                    </Button>
                  </Link>
                  <Link href={"/register"}>
                    <Button
                      variant={"outline"}
                      className="border-[3px] text-sm lg:text-base"
                    >
                      More Info
                    </Button>
                  </Link>
                </div>

                <div className="flex">
                  <p className="bg-background-200 text-xl">Rp</p>

                  <h3 className="mt-2 text-2xl md:text-3xl lg:text-4xl">
                    100.000
                  </h3>
                  <p className="bg-background-200 mt-4 text-xl">/Team</p>
                </div>
              </div>
            </div>
          </CardCrook>
          <div className="lg:text-md flex w-full font-monument text-xs text-background md:flex-row xl:flex-col">
            <div className="m-2 h-[5rem] w-1/4 content-center bg-[#FFF9F1] text-center uppercase xl:mx-auto xl:h-1/4 xl:w-2/3">
              <h3>
                COMPETITIVE <br /> PROGRAMMING
              </h3>
            </div>
            <div className="m-2 h-[5rem] w-1/4 content-center bg-[#FFF9F1] text-center uppercase xl:mx-auto xl:h-1/4 xl:w-2/3">
              <h3>
                UI/UX <br /> DESIGN
              </h3>
            </div>
            <div className="m-2 h-[5rem] w-1/4 content-center bg-[#FFF9F1] text-center uppercase xl:mx-auto xl:h-1/4 xl:w-2/3">
              <h3>
                WEB <br /> DEVELOPMENT
              </h3>
            </div>
            <div className="m-2 h-[5rem] w-1/4 content-center bg-[#FFF9F1] text-center uppercase xl:mx-auto xl:h-1/4 xl:w-2/3">
              <h3>E-SPORT</h3>
            </div>
          </div>
        </div> */}
        <Tabs defaultValue="competitive-programming" className="flex">
          <TabsContent value="competitive-programming" className="w-full">
            <CardCrook className="!w-full max-xl:mx-auto">
              <div className="flex h-full w-full flex-col justify-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl">
                  COMPETITIVE PROGRAMMING
                </h2>
                <hr className="mt-5 border-[2px] border-text-200 lg:mt-7" />
                <p className="mt-8 text-justify font-inter text-sm lg:mt-12 lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet. Pellentesque commodo lacus at sodales sodales.
                  Quisque sagittis orci ut diam condimentum, vel euismod erat
                  placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                </p>
                <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:gap-12 xl:flex-row xl:gap-20">
                  <div className="flex gap-5">
                    <Link href={"/register"}>
                      <Button
                        variant={"outline"}
                        className="border-[3px] text-sm lg:text-base"
                      >
                        Register
                      </Button>
                    </Link>
                    <Link href={"/register"}>
                      <Button
                        variant={"outline"}
                        className="border-[3px] text-sm lg:text-base"
                      >
                        More Info
                      </Button>
                    </Link>
                  </div>

                  <div className="flex">
                    <p className="bg-background-200 text-xl">Rp</p>

                    <h3 className="mt-2 text-2xl md:text-3xl lg:text-4xl">
                      100.000
                    </h3>
                    <p className="bg-background-200 mt-4 text-xl">/Team</p>
                  </div>
                </div>
              </div>
            </CardCrook>
          </TabsContent>
          <TabsContent value="ui/ux-design" className="w-full">
            <CardCrook className="!w-full max-xl:mx-auto">
              <div className="flex h-full w-full flex-col justify-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl">
                  UI/UX DESIGN
                </h2>
                <hr className="mt-5 border-[2px] border-text-200 lg:mt-7" />
                <p className="mt-8 text-justify font-inter text-sm lg:mt-12 lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet. Pellentesque commodo lacus at sodales sodales.
                  Quisque sagittis orci ut diam condimentum, vel euismod erat
                  placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                </p>
                <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:gap-12 xl:flex-row xl:gap-20">
                  <div className="flex gap-5">
                    <Link href={"/register"}>
                      <Button
                        variant={"outline"}
                        className="border-[3px] text-sm lg:text-base"
                      >
                        Register
                      </Button>
                    </Link>
                    <Link href={"/register"}>
                      <Button
                        variant={"outline"}
                        className="border-[3px] text-sm lg:text-base"
                      >
                        More Info
                      </Button>
                    </Link>
                  </div>

                  <div className="flex">
                    <p className="bg-background-200 text-xl">Rp</p>

                    <h3 className="mt-2 text-2xl md:text-3xl lg:text-4xl">
                      100.000
                    </h3>
                    <p className="bg-background-200 mt-4 text-xl">/Team</p>
                  </div>
                </div>
              </div>
            </CardCrook>
          </TabsContent>
          <TabsContent value="web-development" className="w-full">
            <CardCrook className="!w-full max-xl:mx-auto">
              <div className="flex h-full w-full flex-col justify-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl">
                  WEB DEVELOPMENT
                </h2>
                <hr className="mt-5 border-[2px] border-text-200 lg:mt-7" />
                <p className="mt-8 text-justify font-inter text-sm lg:mt-12 lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet. Pellentesque commodo lacus at sodales sodales.
                  Quisque sagittis orci ut diam condimentum, vel euismod erat
                  placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                </p>
                <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:gap-12 xl:flex-row xl:gap-20">
                  <div className="flex gap-5">
                    <Link href={"/register"}>
                      <Button
                        variant={"outline"}
                        className="border-[3px] text-sm lg:text-base"
                      >
                        Register
                      </Button>
                    </Link>
                    <Link href={"/register"}>
                      <Button
                        variant={"outline"}
                        className="border-[3px] text-sm lg:text-base"
                      >
                        More Info
                      </Button>
                    </Link>
                  </div>

                  <div className="flex">
                    <p className="bg-background-200 text-xl">Rp</p>

                    <h3 className="mt-2 text-2xl md:text-3xl lg:text-4xl">
                      100.000
                    </h3>
                    <p className="bg-background-200 mt-4 text-xl">/Team</p>
                  </div>
                </div>
              </div>
            </CardCrook>
          </TabsContent>
          <TabsContent value="e-sport" className="w-full">
            <CardCrook className="!w-full max-xl:mx-auto">
              <div className="flex h-full w-full flex-col justify-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl">E-SPORT</h2>
                <hr className="mt-5 border-[2px] border-text-200 lg:mt-7" />
                <p className="mt-8 text-justify font-inter text-sm lg:mt-12 lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet. Pellentesque commodo lacus at sodales sodales.
                  Quisque sagittis orci ut diam condimentum, vel euismod erat
                  placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                </p>
                <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:gap-12 xl:flex-row xl:gap-20">
                  <div className="flex gap-5">
                    <Link href={"/register"}>
                      <Button
                        variant={"outline"}
                        className="border-[3px] text-sm lg:text-base"
                      >
                        Register
                      </Button>
                    </Link>
                    <Link href={"/register"}>
                      <Button
                        variant={"outline"}
                        className="border-[3px] text-sm lg:text-base"
                      >
                        More Info
                      </Button>
                    </Link>
                  </div>

                  <div className="flex">
                    <p className="bg-background-200 text-xl">Rp</p>

                    <h3 className="mt-2 text-2xl md:text-3xl lg:text-4xl">
                      100.000
                    </h3>
                    <p className="bg-background-200 mt-4 text-xl">/Team</p>
                  </div>
                </div>
              </div>
            </CardCrook>
          </TabsContent>
          <TabsList className="mx-auto w-1/2">
            <TabsTrigger value="competitive-programming">
              competitive
              <br />
              programming
            </TabsTrigger>
            <TabsTrigger value="ui/ux-design">
              ui/ux
              <br />
              design
            </TabsTrigger>
            <TabsTrigger value="web-development">
              web
              <br />
              development
            </TabsTrigger>
            <TabsTrigger value="e-sport">e-sport</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
