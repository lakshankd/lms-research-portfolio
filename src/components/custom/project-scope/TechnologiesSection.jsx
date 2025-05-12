"use client";
import Slider from "react-slick";

const TechnologiesSection = () => {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="technologies"
      className="certificate-two py-120 position-relative z-1  bg-main-25"
    >
      <div className="section-heading text-center">
        <h2 className="mb-24 wow bounceIn">Technologies Used</h2>
      </div>

      <div className="position-relative">
        <div className="container">
          <div className="tutor-details__content">
            <div className="overflow-x-auto   border border-neutral-30 rounded-12 bg-white p-8 mt-24">
              <ul className="tution-info-list style-two bg-white rounded-8 border border-white border-2 rounded-12">
                <li className="px-32 py-16">
                  <span className="fw-semibold text-neutral-700"></span>
                  <span className="fw-semibold text-neutral-700">
                    Front-end
                  </span>
                  <span className="fw-semibold text-neutral-700">Back-end</span>
                  <span className="fw-semibold text-neutral-700">
                    Machine Learning
                  </span>
                  <span className="fw-semibold text-neutral-700">Database</span>
                </li>
                <li className="px-32 py-16">
                  <span className="fw-normal text-neutral-700">
                    Technologies
                  </span>
                  <span className="fw-normal text-neutral-700">React</span>
                  <span className="fw-normal text-neutral-700">Node JS </span>
                  <span className="fw-normal text-neutral-700">
                    TensorFlow, Scikit learn, Pandas, Numpy
                  </span>
                  <span className="fw-normal  text-neutral-700">AWS</span>
                </li>
                <li className="px-32 py-16">
                  <span className="fw-normal text-neutral-700">
                    Used Language
                  </span>
                  <span className="fw-normal text-neutral-700">JavaScript</span>
                  <span className="fw-normal text-neutral-700">Python</span>
                  <span className="fw-normal text-neutral-700">Python</span>
                  <span className="fw-normal text-neutral-700">SQL</span>
                </li>
                <li className="px-32 py-16">
                  <span className="fw-normal text-neutral-700">
                    Tools and Techniques
                  </span>
                  <span className="fw-normal text-neutral-700">
                    VS Code, Github
                  </span>
                  <span className="fw-normal text-neutral-700">FastAPI</span>
                  <span className="fw-normal text-neutral-700">
                    Google Colab, Jupyter Notebooks
                  </span>
                  <span className="fw-normal text-neutral-700">Firebase</span>
                </li>
              </ul>
            </div>

            {/* technology images */}

            <div
              className="brand wow"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div className="container container--lg">
                <div className="brand-box py-80 px-16 ">
                  <div className="container">
                    <Slider {...settings} className="brand-slider">
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/react.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          React
                        </span>
                      </div>
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/nodejs.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          NodeJS
                        </span>
                      </div>
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/tensorflow.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          TensorFlow
                        </span>
                      </div>
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/scikitlearn.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          Scikit learn
                        </span>
                      </div>
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/pandas.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          Pandas
                        </span>
                      </div>
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/aws.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          AWS
                        </span>
                      </div>
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/javascript.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          JavaScript
                        </span>
                      </div>
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/python.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          Python
                        </span>
                      </div>
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/fast-api.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          FastAPI
                        </span>
                      </div>
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/firebase.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          Firebase
                        </span>
                      </div>
                      <div className="brand-slider__item px-24 d-flex flex-column align-items-center">
                        <img
                          className="mb-2"
                          src="assets/images/custom/project-scope/technologies/colab.png"
                          alt=""
                        />
                        <span className="text-neutral-500 text-center">
                          Google Colab
                        </span>
                      </div>
                    </Slider>
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

export default TechnologiesSection;
