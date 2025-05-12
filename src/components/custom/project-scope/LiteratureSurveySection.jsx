import React from "react";
import Link from "next/link";

const LiteratureSurveySection = () => {
  return (
    <section
      id="literature-survey"
      className="about-two py-120 position-relative z-1 mash-bg-main-two mash-reverse"
    >
      <div className="position-relative">
        <div className="container">
          <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
            <div className="col-xl-6 pe-xl-5">
              <div className="about-two__thumb position-relative">
                <figure className="text-center">
                  <img
                    src="assets/images/custom/project-scope/image.png"
                    className="rounded-16 cover-img wow bounceIn"
                    alt="Descriptive Alt Text"
                    data-tilt=""
                    data-tilt-max={10}
                    data-tilt-speed={500}
                    data-tilt-perspective={5000}
                    data-tilt-full-page-listening=""
                  />
                  <figcaption className="mt-3 text-secondary figure-font">
                    Figure 1: Age Groups of Participants in Studies of
                    Personalized Learning [1]
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-two-content">
                <div className="mb-40">
                  <h2 className="mb-24 wow bounceIn">Literature Survey</h2>
                  <p className="text-secondary wow bounceInUp">
                    In recent years, adaptive learning has emerged as a
                    transformative approach in higher education, allowing
                    students to learn at their own pace and based on their
                    individual strengths and learning styles. Traditional
                    systems in Sri Lanka often follow rigid teaching models,
                    leaving many students struggling to keep up [1]. To address
                    this gap, research emphasizes the importance of using
                    machine learning methods for student clustering and
                    real-time adaptation. These methods enable personalized
                    learning interventions by analyzing academic performance,
                    learning behavior, and engagement levels. Unlike static LMS
                    platforms, adaptive systems offer real-time feedback,
                    improving student motivation and academic retention [2].
                    Studies also support the use of content-based filtering and
                    microlearning techniques to deliver customized educational
                    materials that match each learner’s preferences. These tools
                    have been shown to significantly improve engagement and
                    knowledge retention [3].
                  </p>
                  <p className="text-secondary wow bounceInUp mt-16">
                    Furthermore, integrating social learning strategies through
                    peer grouping and performance prediction enhances
                    collaborative learning environments. Despite international
                    success, such dynamic and personalized systems are still
                    underutilized in Sri Lanka. This research aims to fill that
                    gap by incorporating these proven methods into one
                    integrated platform, enhancing educational outcomes across
                    Sri Lankan universities.
                  </p>
                  <h6 className="mt-24 wow bounceIn fw-semibold text-dark">
                    References
                  </h6>
                  <div className="reference-font">
                    <p className="wow bounceInUp text-secondary mb-3">
                      [1] Bernacki, Matthew & Greene, Meghan & Lobczowski,
                      Nikki. (2021). A Systematic Review of Research on
                      Personalized Learning: Personalized by Whom, to What, How,
                      and for What Purpose. Educational Psychology Review. 33.
                      1-41. 10.1007/s10648-021-09615-8.
                    </p>
                    <p className="wow bounceInUp text-secondary mb-3">
                      [2] Y. Chen, X. Li, J. Liu, and Z. Ying, ‘Recommendation
                      System for Adaptive Learning,’ Applied Psychological
                      Measurement, vol. 42, no. 1, pp. 24–41, Jan. 2018, doi:
                      10.1177/0146621617697959.
                    </p>
                    <p className="wow bounceInUp text-secondary mb-3">
                      [3] J. Shu, X. Shen, H. Liu, B. Yi, and Z. Zhang, ‘A
                      content-based recommendation algorithm for learning
                      resources,’ Multimedia Systems, vol. 24, no. 2, pp.
                      163–173, Mar. 2018, doi: 10.1007/s00530 017-0539-8.
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

export default LiteratureSurveySection;
