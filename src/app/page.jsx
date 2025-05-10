import BannerOne from "@/components/BannerOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Learning Compass - LMS",
  description:
    "Empowering Students with Smart, Personalized, and Adaptive Learning Journeys",
};

const page = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />
      {/* Animation */}
      <Animation />
      {/* BannerOne */}
      <BannerOne />
      {/* BrandOne */}
      {/* <BrandOne /> */}
      {/* FeaturesOne */}
      {/* <FeaturesOne /> */}

      {/* ExploreCourseOne */}
      {/* <ExploreCourseOne /> */}
      {/* AboutOne */}
      {/* <AboutOne /> */}
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
