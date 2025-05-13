import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/custom/common/Header";
import FooterOne from "@/components/FooterOne";
import Animation from "@/helper/Animation";
import React from "react";

export const metadata = {
  title: "Learning Compass - Achievements",
  description:
    "Empowering Students with Smart, Personalized, and Adaptive Learning Journeys",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* Header*/}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"Achievements"} />

      <FooterOne />
    </>
  );
};

export default page;
