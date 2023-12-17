import React from 'react';
import {GamesColumn} from "@/components/GamesColumn/GamesColumn";
import {MainColumn} from "@/components/MainColumn/MainColumn";

const Main = () => {
  return (
      <div className="min-h-screen flex justify-center items-start pt-[60px] pb-[60px]">
        <div className="w-full max-w-[1200px] flex justify-between gap-x-5">
          {/* Left Column */}
          <GamesColumn/>
          <MainColumn/>
        </div>
      </div>
  );
}


export default Main;
