import Link from "next/link";
import React from "react";

const PresentationDownloadSection = () => {
  const presentations = [
    {
      id: 1,
      name: "Proposal Presentation",
      submittedOn: "22/08/2024",
      GroupLink:
        "https://docs.google.com/presentation/d/1dIKCfH75mmQPVcTck1e6XS80BM812P7J/edit?usp=sharing&ouid=108660376276777090254&rtpof=true&sd=true",
      individualLink: null,
    },
    {
      id: 2,
      name: "Progress Presentation I",
      submittedOn: "05/12/2024",
      GroupLink:
        "https://docs.google.com/presentation/d/1088lF9knn6N7pIXUTyuNP-3CYbRRGk6L/edit?usp=sharing&ouid=108660376276777090254&rtpof=true&sd=true",
      individualLink: null,
    },
    {
      id: 3,
      name: "Progress Presentation II",
      submittedOn: "28/03/2025",
      GroupLink:
        "https://docs.google.com/presentation/d/176-wd8chjXH970V6o7nQ8F4_a1-1GESj/edit?usp=sharing&ouid=108660376276777090254&rtpof=true&sd=true",
      individualLink: null,
    },
    {
      id: 4,
      name: "Final Presentation",
      submittedOn: "26/05/2025",
      GroupLink: null,
      individualLink: null,
    },
  ];
  return (
    <section
      id="presentations"
      className="blog py-120 mash-bg-main mash-bg-main-two position-relative"
    >
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="mb-24 wow bounceIn">Presentations</h2>
          <p className="wow bounceInUp">
            Please find all presentations related this project below.
          </p>
        </div>
        <div className="row gy-4">
          {presentations?.map((item) => (
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={200}
              key={item.id}
            >
              <div className="blog-item scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                <div className="p-24 pt-32 h-100 d-flex flex-column justify-content-between">
                  <div className="">
                    <span className="px-20 py-8 bg-success-600 rounded-8 text-white fw-medium mb-20">
                      <i className="ph-bold ph-file-ppt d-flex text-2xl"></i>
                    </span>
                    <h4 className="mb-28">{item.name}</h4>
                    <p className="text-neutral-500 text-line-2">
                      Submitted on {item.submittedOn}
                    </p>
                  </div>
                  <div>
                    {item.GroupLink && (
                      <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0 flex-align gap-14 flex-wrap justify-content-between">
                        <span>Group</span>
                        <Link
                          href={item.GroupLink}
                          className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                          <i className="ph ph-download-simple" />
                        </Link>
                      </div>
                    )}

                    {item.individualLink && (
                      <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0 flex-align gap-14 flex-wrap justify-content-between">
                        <span>Individual</span>
                        <Link
                          href={item.individualLink}
                          className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Donwload <i className="ph ph-download-simple" />
                        </Link>
                      </div>
                    )}

                    {!item.GroupLink && !item.individualLink && (
                      <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0 flex-align gap-14 flex-wrap justify-content-between">
                        <span>
                          Yet to be submitted, link will be updated soon.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationDownloadSection;
