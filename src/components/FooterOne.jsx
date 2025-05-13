import Link from "next/link";

const FooterOne = () => {
  return (
    <footer className="footer bg-main-25 position-relative z-1">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape five animation-scalation"
      />
      <img
        src="assets/images/shapes/shape6.png"
        alt=""
        className="shape one animation-scalation"
      />
      <div className="py-120 ">
        <div className="container container-two">
          <div className="row row-cols-xxl-3 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-5">
            <div className="col" data-aos="fade-up" data-aos-duration={300}>
              <div className="footer-item">
                <div className="custom_footer-item__logo">
                  <Link href="/">
                    {" "}
                    <img
                      src="assets/images/logo/logo-new.png"
                      alt=""
                      style={{ height: "200px" }}
                    />
                  </Link>
                </div>
                <p className="my-32">
                  Empowering Students with Smart, Personalized, and Adaptive
                  Learning Journeys
                </p>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration={400}>
              <div className="footer-item">
                <h4 className="footer-item__title mb-32">Explore</h4>
                <ul className="footer-menu">
                  <li className="mb-16">
                    <Link
                      href="/milestones"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Milestones
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/downloads"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Downloads
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/about-us"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="contact-us"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration={600}>
              <div className="footer-item">
                <h4 className="footer-item__title mb-32">Useful</h4>
                <ul className="footer-menu">
                  <li className="mb-16">
                    <Link
                      href="/project-scope/#research-gap"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Research Gap
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/project-scope/#research-problem"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Research Problem
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/project-scope/#research-objectives"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Research Objectives
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/project-scope/#methodology"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Methodology
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* bottom Footer */}
        <div className="bottom-footer bg-main-25 border-top border-dashed border-main-100 border-0 py-32">
          <div className="container container-two">
            <div className="bottom-footer__inner flex-between gap-3 flex-wrap">
              <p className="bottom-footer__text">
                {" "}
                Copyright © 2025{" "}
                <span className="fw-semibold">Learning Compass.</span> All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
