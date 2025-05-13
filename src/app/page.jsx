import AboutOne from "@/components/AboutOne";
import AboutTwo from "@/components/AboutTwo";
import BannerOne from "@/components/BannerOne";
import ChooseUsOne from "@/components/ChooseUsOne";
import Header from "@/components/custom/common/Header";
import IntroductionSection from "@/components/custom/home/IntroductionSection";
import ExploreCourseOne from "@/components/ExploreCourseOne";
import FeaturesOne from "@/components/FeaturesOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import InstructorOne from "@/components/InstructorOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Learning Compass - LMS",
  description:
    "Empowering Students with Smart, Personalized, and Adaptive Learning Journeys",
};

const page = () => {
  return (
    <>
      {/* <HeaderOne /> */}
      <Header />
      <Animation />
      <BannerOne />
      <IntroductionSection />
      {/* <ExploreCourseOne /> */}
      {/* AboutOne */}
      {/* <AboutTwo /> */}
      {/* InstructorOne */}
      {/* <InstructorOne /> */}
      {/* CHooseUsOne */}
      {/* <ChooseUsOne /> */}
      {/* CounterOne */}
      {/* <CounterOne /> */}
      {/* TestimonialsOne */}
      {/* <TestimonialsOne /> */}
      {/* BlogOne */}
      {/* <BlogOne /> */}
      {/* CertificateOne */}
      {/* <CertificateOne /> */}
      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
