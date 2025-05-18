import React from "react";
import Link from "next/link";

const SupervisorsSection = () => {
  return (
    <section className="instructor py-120 position-relative z-1">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape one animation-scalation"
      />
      <img
        src="assets/images/shapes/shape6.png"
        alt=""
        className="shape six animation-scalation"
      />
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="mb-24">Meet Our Supervisors </h2>
        </div>
        <div className="row gy-4">
          {/* card 01 */}
          <div className="col-lg-3 col-sm-6">
            <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
              <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                <img
                  src="assets/images/custom/about-us/supervisors/Ms_NarmadaGamage.jpg"
                  alt="Supervisor Image"
                  className="scale-hover-item__img rounded-12 profile-img transition-2"
                />
              </div>
              <div className="p-12 position-relative">
                <div className="">
                  <h4 className="pb-12 border-bottom border-neutral-50 mb-12 border-dashed border-0">
                    Ms. Narmada Gamage
                  </h4>
                  <div className="flex-between gap-8 flex-wrap mb-16">
                    <p className="px-20 py-1 text-white bg-main-two-600 rounded-8 about-card-font">
                      Supervisor
                    </p>
                  </div>
                  <div className="flex-between gap-8 flex-wrap mb-16 ">
                    <div className="flex-align gap-8">
                      <span className="text-neutral-700 about-card-font fw-medium">
                        Sri Lanka Institute of Information Technology
                      </span>
                    </div>
                  </div>
                  <div className="flex-between gap-8 flex-wrap mb-16">
                    <div className="flex-align gap-8">
                      <span className="text-neutral-700 about-card-font fw-medium">
                        <b>Department:</b> Computer Systems Engineering
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-12 border-top border-neutral-50 mt-12 border-dashed border-0">
                  <Link
                    href="mailto:narmada.g@sliit.lk"
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                  >
                    <i className="ph ph-envelope" />
                    Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* card 02 */}
          <div className="col-lg-3 col-sm-6">
            <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
              <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                <img
                  src="assets/images/custom/about-us/supervisors/Ms_BuddhimaAttanayaka.png"
                  alt="Supervisor Image"
                  className="scale-hover-item__img rounded-12 profile-img transition-2"
                />
              </div>
              <div className="p-12 position-relative">
                <div className="">
                  <h4 className="pb-12 border-bottom border-neutral-50 mb-12 border-dashed border-0">
                    Ms. Buddhima Attanayaka
                  </h4>
                  <div className="flex-between gap-8 flex-wrap mb-16">
                    <p className="px-20 py-1 text-white bg-main-two-600 rounded-8 about-card-font">
                      Co-Supervisor
                    </p>
                  </div>
                  <div className="flex-between gap-8 flex-wrap mb-16 ">
                    <div className="flex-align gap-8">
                      <span className="text-neutral-700 about-card-font fw-medium">
                        Sri Lanka Institute of Information Technology
                      </span>
                    </div>
                  </div>
                  <div className="flex-between gap-8 flex-wrap mb-16">
                    <div className="flex-align gap-8">
                      <span className="text-neutral-700 about-card-font fw-medium">
                        <b>Department:</b> Computer Systems Engineering
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-12 border-top border-neutral-50 mt-12 border-dashed border-0">
                  <Link
                    href="mailto:buddhima.a@sliit.lk "
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                  >
                    <i className="ph ph-envelope" />
                    Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupervisorsSection;
