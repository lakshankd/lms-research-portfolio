"use client";

const ResearchObjectivesSection = () => {
  return (
    <section
      id="research-objectives"
      className="about py-120 position-relative z-1 bg-main-25"
    >
      <div className="position-relative">
        <div className="container">
          <div className="section-heading text-center">
            <div className="section-heading__inner">
              <h2 className="mb-24 wow bounceInLeft">Research Objectives</h2>
            </div>
          </div>

          <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
            <div>
              <div className="about-content">
                <div
                  className="flex-align align-items-start gap-28 mb-32"
                  data-aos="fade-left"
                  data-aos-duration={200}
                >
                  <span className="w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0">
                    <img
                      src="assets/images/custom/project-scope/target-icon.png"
                      alt=""
                    />
                  </span>
                  <div className="flex-grow-1">
                    <h4 className="text-neutral-500 mb-12">
                      Adaptive Pathway Creation
                    </h4>
                    <p className="text-neutral-500">
                      To enhance university students' academic performance by
                      dynamically assessing their current knowledge and
                      generating personalized learning paths using advanced data
                      integration and real-time clustering using Self-Organizing
                      Maps.
                    </p>
                  </div>
                </div>

                <div
                  className="flex-align align-items-start gap-28 mb-32 pt-40 border-top border-neutral-50 mt-40 border-dashed border-0"
                  data-aos="fade-left"
                  data-aos-duration={200}
                >
                  <span className="w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0">
                    <img
                      src="assets/images/custom/project-scope/target-icon.png"
                      alt=""
                    />
                  </span>
                  <div className="flex-grow-1">
                    <h4 className="text-neutral-500 mb-12">
                      Content Delivery Optimization
                    </h4>
                    <p className="text-neutral-500">
                      To manage educational resources efficiently and recommend
                      content specifically suited to each student's learning
                      path and progress will guarantee that every student
                      receives the help and resources they need.
                    </p>
                  </div>
                </div>

                <div
                  className="flex-align align-items-start gap-28 mb-32 pt-40 border-top border-neutral-50 mt-40 border-dashed border-0"
                  data-aos="fade-left"
                  data-aos-duration={200}
                >
                  <span className="w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0">
                    <img
                      src="assets/images/custom/project-scope/target-icon.png"
                      alt=""
                    />
                  </span>
                  <div className="flex-grow-1">
                    <h4 className="text-neutral-500 mb-12">
                      Performance Insight Analytics
                    </h4>
                    <p className="text-neutral-500">
                      To Implement advanced predictive analytics and real-time
                      performance monitoring to enhance student success and
                      engagement through personalized learning paths using the
                      Adaptive Learning approach.
                    </p>
                  </div>
                </div>

                <div
                  className="flex-align align-items-start gap-28 mb-32 pt-40 border-top border-neutral-50 mt-40 border-dashed border-0"
                  data-aos="fade-left"
                  data-aos-duration={200}
                >
                  <span className="w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0">
                    <img
                      src="assets/images/custom/project-scope/target-icon.png"
                      alt=""
                    />
                  </span>
                  <div className="flex-grow-1 ">
                    <h4 className="text-neutral-500 mb-12">
                      Collaborative Learning Model
                    </h4>
                    <p className="text-neutral-500">
                      To develop and implement a dynamic, personalized learning
                      system for university students by leveraging Graph Neural
                      Networks and Social Network Analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchObjectivesSection;
