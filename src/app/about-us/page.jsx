import Breadcrumb from "@/components/Breadcrumb";
import SupervisorsSection from "@/components/custom/about-us/SupervisorsSection";
import TeamSection from "@/components/custom/about-us/TeamSection";
import Header from "@/components/custom/common/Header";
import FooterOne from "@/components/FooterOne";
import Animation from "@/helper/Animation";
import React from "react";

export const metadata = {
  title: "Learning Compass - About Us",
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
      <Breadcrumb title={"About Us"} />

      <SupervisorsSection />

      <TeamSection />

      <FooterOne />
    </>
  );
};

export default page;
