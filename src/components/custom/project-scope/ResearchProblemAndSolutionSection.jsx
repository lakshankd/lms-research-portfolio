import React from "react";

const ResearchProblemAndSolutionSection = () => {
  return (
    <section
      id="research-problem"
      className="features py-120 position-relative overflow-hidden mash-bg-main mash-bg-main-two mash-reverse"
    >
      <div className="container">
        <div className=" text-center">
          <h2 className="mb-24 wow bounceIn">Research Problem </h2>
          <div className="border-start border-4 border-primary p-16  wow bounceInUp">
            <h5 className="text-neutral-500 fw-semibold mb-0 lh-lg fst-italic">
              “How do current Learning Management Systems in Sri Lankan
              universities fail to provide personalized learning due to static
              content and basic tracking, and how can they use advanced data
              analytics for real-time assessments and early intervention for
              at-risk students?”
            </h5>
          </div>
          {/* <h5 className="text-main-600 mb-0 wow bounceInUp lh-lg">
            “How do current Learning Management Systems in Sri Lankan
            universities fail to provide personalized learning due to static
            content and basic tracking, and how can they use advanced data
            analytics for real-time assessments and early intervention for
            at-risk students?”
          </h5> */}
          {/* <p className="wow bounceInUp"></p> */}
        </div>
      </div>
    </section>
  );
};

export default ResearchProblemAndSolutionSection;
