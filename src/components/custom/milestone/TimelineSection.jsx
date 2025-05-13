import React from "react";
import Timeline from "./Timeline";

const TimelineSection = () => {
  return (
    <section className="features py-120 position-relative overflow-hidden z-1 mash-bg-main-two mash-reverse">
      <div className="container">
        <div className=" text-center">
          <h2 className="mb-24 wow bounceIn">Timeline Summary</h2>
        </div>
        <div>
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
