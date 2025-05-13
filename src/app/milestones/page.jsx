import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/custom/common/Header";
import TimelineSection from "@/components/custom/milestone/TimelineSection";
import FooterOne from "@/components/FooterOne";
import Animation from "@/helper/Animation";
import React from "react";

export const metadata = {
  title: "Learning Compass - Milestones",
  description:
    "Empowering Students with Smart, Personalized, and Adaptive Learning Journeys",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"Milestones"} />

      {/* Timeline Section */}
      <TimelineSection />
      <FooterOne />
    </>
  );
};

export default page;
