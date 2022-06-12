import React, {useEffect} from "react";
import dynamic from "next/dynamic";

const JobList = dynamic(
  () => 
    import("../src/components/layout/JobList/JobList").catch((err) => {
      return () => <>can't load list... {err}</>
    }),
    {
      loading: () => <>Loading...</>,
      ssr: false
    }
)

export default function Home() {
  
  return (
    <div className="w-full bg-gray-100 h-screen flex flex-col content-around">
      <div className="w-full ">
          <JobList/>
      </div>

    </div>
  );
}
