import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/custom/common/Header";
import DocumentDownloadSection from "@/components/custom/downloads/DocumentDownloadSection";
import PresentationDownloadSection from "@/components/custom/downloads/PresentationDownloadSection";
import FooterOne from "@/components/FooterOne";
import Animation from "@/helper/Animation";
import React from "react";

export const metadata = {
  title: "Learning Compass - Downloads",
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
      <Breadcrumb title={"Downloads"} />

      {/* Document Download Section */}
      <DocumentDownloadSection />

      <PresentationDownloadSection />

      <FooterOne />
    </>
  );
};

export default page;
