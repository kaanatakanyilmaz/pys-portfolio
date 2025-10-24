import React from "react";
import ContentLeft from "./content-left";
import ContentRight from "./content-right";
import ContentHeader from "./content-header";
import ContentCenter from "./content-center";
function Portfolio() {
  return (
    <div className="bg-[#f2f1fb] flex flex-col items-center px-20  ">
      <ContentHeader />
      <div className="flex flex-col items-center xl:flex-row ">
        <ContentLeft />
        <ContentRight />
      </div>
      <div>
        <ContentCenter />
      </div>
    </div>
  );
}

export default Portfolio;
