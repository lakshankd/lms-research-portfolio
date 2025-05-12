import React from "react";
import Link from "next/link";

const ResearchGapSection = () => {
  return (
    <section
      id="research-gap"
      className="features-two py-120 position-relative overflow-hidden bg-main-25"
    >
      <div className="container">
        <div className="section-heading text-center">
          <div className="section-heading__inner">
            <h2 className="mb-24 wow bounceInLeft">Research Gap</h2>
            <p>
              Following areas are the research gaps found in most of the recent
              researches.
            </p>
          </div>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-6 col-sm-12 col-xs-12"
            data-aos="fade-up"
            data-aos-duration={200}
          >
            <div className="h-100 d-flex flex-column features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/custom/project-scope/icon-one.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Personalized Assessment and Learning Path Generation
              </h4>
              <p className="transition-1 item-hover__text   ">
                Most existing educational systems fail to assess students’
                knowledge levels dynamically or offer real-time diagnostic
                feedback. Traditional assessments are periodic and static, which
                limits the system's ability to adapt to individual learners’
                progress on the fly. Students who are ahead or falling behind
                often remain unnoticed until major examinations, reducing
                opportunities for timely intervention. There is a lack of
                integration between formative assessments and adaptive content
                delivery systems that could help personalize learning paths
                instantly. A real-time, diagnostic knowledge assessment module
                that continuously evaluates student comprehension and adjusts
                recommendations accordingly is largely missing in current Sri
                Lankan higher education platforms.
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32" />
            </div>
          </div>

          <div
            className="col-lg-6 col-sm-12 col-xs-12"
            data-aos="fade-up"
            data-aos-duration={400}
          >
            <div className="h-100 d-flex flex-column features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/custom/project-scope/icon-two.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text ">
                Personalized Content Delivery and Resource Alignment
              </h4>
              <p className="transition-1 item-hover__text  ">
                Learning platforms in Sri Lanka generally deliver uniform
                content to all students regardless of their learning style,
                attention span, or resource preferences. This one-size-fits-all
                model ignores key factors such as study preferences, time of
                engagement, and preferred learning formats like video, text, or
                audio. Although some platforms allow access to different types
                of material, none systematically align content delivery based on
                a learner’s behavior, style, or study rhythm. This research
                identifies the gap in building a personalized content
                recommendation engine that integrates individual traits and
                behavioral data to deliver tailored learning experiences,
                improving comprehension, retention, and overall academic
                performance.
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32" />
            </div>
          </div>

          <div
            className="col-lg-6 col-sm-12 col-xs-12"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <div className="h-100 d-flex flex-column  features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/custom/project-scope/icon-three.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text ">
                Predictive Performance Monitoring and Risk Identification
              </h4>
              <p className="transition-1 item-hover__text  ">
                Most academic monitoring systems are limited to historical grade
                tracking and do not utilize predictive analytics to identify
                at-risk students before academic failure occurs. These systems
                lack real-time data analysis that incorporates diverse
                indicators such as class attendance, LMS interaction, quiz
                patterns, and study hours. As a result, interventions are often
                reactive rather than proactive. There is a significant gap in
                implementing machine learning–based models capable of
                forecasting student performance trends early, which can guide
                educators and institutions in deploying personalized support and
                retention strategies. This gap undermines the ability to offer
                timely academic support and prevent student dropout.
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32" />
            </div>
          </div>

          <div
            className="col-lg-6 col-sm-12 col-xs-12"
            data-aos="fade-up"
            data-aos-duration={800}
          >
            <div className="h-100 d-flex flex-column features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/custom/project-scope/icon-four.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Collaborative Learning and Peer Engagement Modeling
              </h4>
              <p className="transition-1 item-hover__text  ">
                While collaborative learning is widely acknowledged as essential
                for academic success, current systems do not adequately support
                dynamic and data-driven group formation. Grouping is often
                random or based on fixed criteria such as class or subject.
                There is minimal use of social or behavioral analytics to
                optimize peer interaction. No established systems integrate data
                on hobbies, engagement behavior, social influence, or learning
                pace to create effective, collaborative study groups. This
                leaves peer learning potential largely untapped. There is a
                clear gap in utilizing clustering algorithms and relationship
                modeling to support dynamic, interest-aligned, and academically
                balanced peer collaboration.
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchGapSection;
