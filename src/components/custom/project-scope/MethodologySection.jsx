import React from "react";

const MethodologySection = () => {
  return (
    <section
      id="methodology"
      className="certificate-two py-120 position-relative z-1 mash-bg-main-two mash-reverse"
    >
      <div className="section-heading text-center">
        <h2 className="mb-24 wow bounceIn">Methodology</h2>
      </div>
      <div className="position-relative">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="mb-16 text-center">
              <div>
                <img
                  src="assets/images/custom/project-scope/methodology.png"
                  alt=""
                  className="img-fluid col-xl-6"
                  data-tilt=""
                  data-tilt-max={10}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-full-page-listening=""
                />
              </div>
            </div>

            {/* <div className="col-lg-6 pe-lg-5"> */}
            <div
              className="certificate-two-item animation-item mb-28 pb-28"
              data-aos="fade-up"
              data-aos-duration={200}
            >
              <p className="text-secondary wow bounceInUp">
                This section discusses in detail the approach followed in
                designing the proposed system. Figure illustrates the System
                High Level Architecture Diagram. The solution to the system
                consists of four main components:
              </p>

              <ol className="text-secondary wow bounceInUp custom_ol my-16 ps-48">
                <li className="mb-8">
                  Dynamic knowledge assessment and personalized path generation
                </li>
                <li className="mb-8">
                  Personalized content delivery and resource management
                </li>
                <li className="mb-8">
                  Predictive analytics and performance monitoring
                </li>
                <li className="mb-8">
                  Collaborative learning and peer interaction
                </li>
              </ol>
              <p className="text-secondary wow bounceInUp">
                This research adopted a mixed-method approach, collecting both
                quantitative and qualitative data from 10,000 final-year Sri
                Lankan university students, resulting in over 40,000 records.
                Academic records and authorized survey responses were used to
                understand students’ demographics, learning behaviors, and
                preferences. The system employed Self-Organizing Maps (SOMs) to
                cluster students based on learning patterns and XGBoost
                Regressor to predict Grade Point Average (GPA). Personalized
                content was recommended using Artificial Neural Networks (ANNs)
                and content-based filtering, tailored to learning styles and
                engagement levels. Ridge Regression was used for performance
                prediction, and XGBoost classifiers, combined with GNNs and
                Social Network Analysis (SNA), enabled effective peer group
                formation. Data preprocessing included imputation,
                normalization, feature extraction, stratified sampling, and
                outlier detection to ensure data quality and reduce bias.
                Ethical clearance was secured, ensuring anonymization and
                informed consent. Cross-validation techniques were used to
                validate models, and interventions were reviewed by academic
                staff to avoid harm from misclassification. Each module
                contributed to real-time personalized learning paths and
                adaptive support, improving academic engagement, early risk
                detection, and collaborative learning. This adaptive framework
                aims to transform static university learning systems into
                dynamic, responsive platforms that support individual growth and
                institutional success.
              </p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-6">
              <div className="certificate-two__thumb">
                <img
                  src="assets/images/custom/project-scope/methodology.png"
                  alt=""
                  data-tilt=""
                  data-tilt-max={10}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-full-page-listening=""
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
