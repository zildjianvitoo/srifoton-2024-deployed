import React from "react";
import SectionHeader from "../SectionHeader";
import CompetitionChat from "./CompetitionChat";

export default function CompetitionQna() {
  return (
    <section id="competition-qna">
      <div className="mt-40">
        <SectionHeader text="competition qna" />
        <div className="mt-20 flex">
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
            <div className="relative mx-auto mb-10 w-4/5 rounded-md bg-primary-100 p-5 text-left font-ponnala text-lg">
              <div className="absolute left-[10%] top-[90%] h-0 w-0 border-l-[2rem] border-r-[2rem] border-t-[2rem] border-l-transparent border-r-transparent border-t-primary-100"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
              </p>
            </div>
            <div className="mx-auto h-[30rem] w-2/3 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
