import Breadcrumb from "@/components/Breadcrumb";
import ContactInner from "@/components/ContactInner";
import Header from "@/components/custom/common/Header";
import ContactUs from "@/components/custom/contact-us/ContactUs";
import FooterOne from "@/components/FooterOne";
import Animation from "@/helper/Animation";
import React from "react";

export const metadata = {
  title: "Learning Compass - Contact Us",
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
      <Breadcrumb title={"Contact Us"} />

      {/* Contact Us */}
      <ContactUs />

      <FooterOne />
    </>
  );
};

export default page;
