import React from "react";
import Card from "./Card";
import RecentProjectImg1 from "../assets/RecentProjectImg-1.png";
import RecentProjectImg2 from "../assets/RecentProjectImg-2.png";
import RecentProjectImg3 from "../assets/RecentProjectImg-3.png";

const RecentProject = () => {
  return (
    <div className="container pt-33 font-poppins">
      <h4 className="font-semibold leading-[120%]">
        Best Project of the Years
      </h4>
      <h2 className="font-bold text-[50px] leading-[120%] mt-4 pb-11.25">
        Our recent projects
      </h2>
      <div className="flex justify-between">
        <Card image={RecentProjectImg1} />
        <Card image={RecentProjectImg2} />
        <Card image={RecentProjectImg3} />
      </div>
    </div>
  );
};

export default RecentProject;
