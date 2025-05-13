import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/custom/common/Header";
import LiteratureSurveySection from "@/components/custom/project-scope/LiteratureSurveySection";
import MethodologySection from "@/components/custom/project-scope/MethodologySection";
import ResearchGapSection from "@/components/custom/project-scope/ResearchGapSection";
import ResearchObjectivesSection from "@/components/custom/project-scope/ResearchObjectivesSection";
import ResearchProblemAndSolutionSection from "@/components/custom/project-scope/ResearchProblemAndSolutionSection";
import TechnologiesSection from "@/components/custom/project-scope/TechnologiesSection";
import FooterOne from "@/components/FooterOne";
import Animation from "@/helper/Animation";
import React from "react";

export const metadata = {
  title: "Learning Compass - Project Scope",
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
      <Breadcrumb title={"Research Scope"} />

      {/* Literature Survey Section */}
      <LiteratureSurveySection />

      {/* Research Gap Section */}
      <ResearchGapSection />

      {/* Research Problem and Solution Section */}
      <ResearchProblemAndSolutionSection />

      {/* Research Objective Section */}
      <ResearchObjectivesSection />

      {/* Methodology Section */}
      <MethodologySection />

      {/* Technologies Section */}
      <TechnologiesSection />

      <FooterOne />
    </>
  );
};

export default page;
