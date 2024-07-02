import React from "react";
import SectionHeader from "../SectionHeader";
import CardCrook from "../CardCrook";

export default function Timeline() {
  return (
    <section id="event-timeline">
      <div className="mt-40 px-8 md:px-12 lg:px-20 xl:px-[7rem]">
        <SectionHeader text="event timeline" />

        {/* in progress buat timelinenya kak  */}

        <ul className="mt-40 flex h-[30rem] items-center overflow-hidden border-2 border-primary p-8">
          <li className="m-0 bg-red-500">
            <CardCrook className="mx-auto xl:w-full">
              <p>Open Registration Competition</p>
            </CardCrook>
            <div className="mt-10 flex h-1 w-full bg-primary"></div>
          </li>
          <li className="m-0 bg-red-500">
            <CardCrook className="mx-auto xl:w-full">
              <p>Open Registration Competition</p>
            </CardCrook>
            <div className="mt-10 flex h-1 w-full bg-primary"></div>
          </li>
          <li className="m-0 bg-red-500">
            <CardCrook className="mx-auto xl:w-full">
              <p>Open Registration Competition</p>
            </CardCrook>
            <div className="mt-10 flex h-1 w-full bg-primary"></div>
          </li>
          <li className="m-0 bg-red-500">
            <CardCrook className="mx-auto xl:w-full">
              <p>Open Registration Competition</p>
            </CardCrook>
            <div className="mt-10 flex h-1 w-full bg-primary"></div>
          </li>
        </ul>
      </div>
    </section>
  );
}
