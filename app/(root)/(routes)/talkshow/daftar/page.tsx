import TalkshowForm from "@/components/Root/Talkshow/TalkshowForm";
import WorkshopForm from "@/components/Root/Workshop/WorkshopForm";

export default function TalkshowRegistration() {
  return (
    <>
      <div className={"flex flex-col gap-14 lg:gap-20"}>
        <div className="relative mx-auto flex w-fit flex-col gap-6 text-center text-whtc">
          <h1 className="srifoton-header font-monument uppercase">WORKSHOP</h1>
          <p className="srifoton-text mx-auto">
            Hai, silahkan isi secara detail informasi kamu
          </p>
        </div>
      </div>
      <TalkshowForm />
    </>
  );
}
