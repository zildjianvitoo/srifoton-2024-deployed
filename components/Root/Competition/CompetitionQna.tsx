import React from "react";
import SectionHeader from "../SectionHeader";
import CompetitionChat from "./CompetitionChat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CompetitionQna() {
  return (
    <section id="competition-qna">
      <div className="mt-40">
        <SectionHeader text="competition qna" />
        <Tabs defaultValue="chat-1" className="mt-20 flex">
          <TabsList className="w-1/2">
            <div className="relative w-full">
              <TabsTrigger
                value="chat-1"
                className="relative mb-10 w-3/4 rounded-md bg-[#B7B38C] p-5 text-left font-ponnala text-lg data-[state=active]:w-4/5 data-[state=active]:bg-primary-100 data-[state=active]:text-xl"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in ?
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="chat-1"
                className="absolute left-0 top-[65%] h-0 w-0 border-r-[4rem] border-t-[1.5rem] border-l-transparent border-r-transparent border-t-[#B7B38C] data-[state=active]:border-t-primary-100"
              ></TabsTrigger>
            </div>
            <div className="relative w-full">
              <TabsTrigger
                value="chat-2"
                className="relative mb-10 w-3/4 rounded-md bg-[#B7B38C] p-5 text-left font-ponnala text-lg data-[state=active]:w-4/5 data-[state=active]:bg-primary-100 data-[state=active]:text-xl"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in ?
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="chat-2"
                className="absolute left-0 top-[65%] h-0 w-0 border-r-[4rem] border-t-[1.5rem] border-l-transparent border-r-transparent border-t-[#B7B38C] data-[state=active]:border-t-primary-100"
              ></TabsTrigger>
            </div>
            <div className="relative w-full">
              <TabsTrigger
                value="chat-3"
                className="relative mb-10 w-3/4 rounded-md bg-[#B7B38C] p-5 text-left font-ponnala text-lg data-[state=active]:w-4/5 data-[state=active]:bg-primary-100 data-[state=active]:text-xl"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in ?
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="chat-3"
                className="absolute left-0 top-[65%] h-0 w-0 border-r-[4rem] border-t-[1.5rem] border-l-transparent border-r-transparent border-t-[#B7B38C] data-[state=active]:border-t-primary-100"
              ></TabsTrigger>
            </div>
            <div className="relative w-full">
              <TabsTrigger
                value="chat-4"
                className="relative mb-10 w-3/4 rounded-md bg-[#B7B38C] p-5 text-left font-ponnala text-lg data-[state=active]:w-4/5 data-[state=active]:bg-primary-100 data-[state=active]:text-xl"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in ?
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="chat-4"
                className="absolute left-0 top-[65%] h-0 w-0 border-r-[4rem] border-t-[1.5rem] border-l-transparent border-r-transparent border-t-[#B7B38C] data-[state=active]:border-t-primary-100"
              ></TabsTrigger>
            </div>
            <div className="relative w-full">
              <TabsTrigger
                value="chat-5"
                className="relative mb-10 w-3/4 rounded-md bg-[#B7B38C] p-5 text-left font-ponnala text-lg data-[state=active]:w-4/5 data-[state=active]:bg-primary-100 data-[state=active]:text-xl"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in ?
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="chat-5"
                className="absolute left-0 top-[65%] h-0 w-0 border-r-[4rem] border-t-[1.5rem] border-l-transparent border-r-transparent border-t-[#B7B38C] data-[state=active]:border-t-primary-100"
              ></TabsTrigger>
            </div>
          </TabsList>
          <div className="w-1/2">
            <TabsContent
              value="chat-1"
              className="relative mx-auto mb-10 w-4/5 rounded-md bg-primary-100 p-5 text-left font-ponnala text-lg"
            >
              <div className="absolute left-[10%] top-[90%] h-0 w-0 border-l-[2rem] border-r-[2rem] border-t-[2rem] border-l-transparent border-r-transparent border-t-primary-100"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.1
              </p>
            </TabsContent>
            <TabsContent
              value="chat-2"
              className="relative mx-auto mb-10 w-4/5 rounded-md bg-primary-100 p-5 text-left font-ponnala text-lg"
            >
              <div className="absolute left-[10%] top-[90%] h-0 w-0 border-l-[2rem] border-r-[2rem] border-t-[2rem] border-l-transparent border-r-transparent border-t-primary-100"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.2
              </p>
            </TabsContent>
            <TabsContent
              value="chat-3"
              className="relative mx-auto mb-10 w-4/5 rounded-md bg-primary-100 p-5 text-left font-ponnala text-lg"
            >
              <div className="absolute left-[10%] top-[90%] h-0 w-0 border-l-[2rem] border-r-[2rem] border-t-[2rem] border-l-transparent border-r-transparent border-t-primary-100"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.3
              </p>
            </TabsContent>
            <TabsContent
              value="chat-4"
              className="relative mx-auto mb-10 w-4/5 rounded-md bg-primary-100 p-5 text-left font-ponnala text-lg"
            >
              <div className="absolute left-[10%] top-[90%] h-0 w-0 border-l-[2rem] border-r-[2rem] border-t-[2rem] border-l-transparent border-r-transparent border-t-primary-100"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.4
              </p>
            </TabsContent>
            <TabsContent
              value="chat-5"
              className="relative mx-auto mb-10 w-4/5 rounded-md bg-primary-100 p-5 text-left font-ponnala text-lg"
            >
              <div className="absolute left-[10%] top-[90%] h-0 w-0 border-l-[2rem] border-r-[2rem] border-t-[2rem] border-l-transparent border-r-transparent border-t-primary-100"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.5
              </p>
            </TabsContent>
            <div className="mx-auto h-[30rem] w-2/3 bg-white"></div>
          </div>
        </Tabs>
        {/* <div className="mt-20 flex">
          <div className="w-1/2">
            <CompetitionChat>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in ?
              </p>
            </CompetitionChat>
            <CompetitionChat>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in ?
              </p>
            </CompetitionChat>
            <CompetitionChat>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in ?
              </p>
            </CompetitionChat>
            <CompetitionChat>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in ?
              </p>
            </CompetitionChat>
            <CompetitionChat>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in ?
              </p>
            </CompetitionChat>
          </div>
          <div className="w-1/2">
            <div className="relative mx-auto mb-10 w-4/5 rounded-md bg-primary-100 p-5 text-left font-ponnala text-lg"></div>
            <div className="mx-auto h-[30rem] w-2/3 bg-white"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
