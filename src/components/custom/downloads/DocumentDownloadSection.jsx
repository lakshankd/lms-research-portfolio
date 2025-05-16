import Link from "next/link";
import React from "react";

const DocumentDownloadSection = () => {
  const documents = [
    {
      id: 1,
      name: "Topic Assessment Form",
      submittedOn: "09/08/2024",
      GroupLink:
        "https://drive.google.com/file/d/1BFT0QVvrIc08D2oB3ojHEfS9aYkqxYj6/view?usp=sharing",
      individualLink: null,
    },
    {
      id: 2,
      name: "Proposal Reports",
      submittedOn: "22/08/2024",
      GroupLink: null,
      individualLink:
        "https://drive.google.com/drive/folders/1OYDM7d6n8jaj_ycUKR9XB4urTnB4oHW-?usp=sharing",
    },
    {
      id: 3,
      name: "Check List I Document",
      submittedOn: "30/11/2024",
      GroupLink:
        "https://drive.google.com/drive/folders/1Abm8s6GFvR7Wz7vikedejTCqEEyl5IqT?usp=sharing",
      individualLink: null,
    },
    {
      id: 4,
      name: "Check List II Document",
      submittedOn: "08/12/2024",
      GroupLink:
        "https://drive.google.com/drive/folders/1XrKYttZK7Zk3d0x5ceX5uAADhHsFnJeZ?usp=sharing",
      individualLink: null,
    },
    {
      id: 5,
      name: "Check List III Document",
      submittedOn: "22/03/2025",
      GroupLink:
        "https://drive.google.com/drive/folders/1g11PlLvOwsdDeDg8SygTPmFfeq5Sra4p?usp=sharing",
      individualLink: null,
    },
    {
      id: 6,
      name: "Check List IV Document",
      submittedOn: "22/03/2025",
      GroupLink:
        "https://drive.google.com/drive/folders/1rDQ5JITMlUtMmG1wI9EydXsLAVwL3qgn?usp=sharing",
      individualLink: null,
    },
    {
      id: 7,
      name: "Research Papert",
      submittedOn: "07/03/2025",
      GroupLink:
        "https://drive.google.com/file/d/1hW4VddBMxHwPF1gSEiXhcO-UiuFkvYIq/view?usp=sharing",
      individualLink: null,
    },
    {
      id: 8,
      name: "Final Reports",
      submittedOn: "12/04/2025",
      GroupLink: null,
      individualLink:
        "https://drive.google.com/drive/folders/1-DL0dA6PM6PId9W9WX-dlGzrnR8m_yV8?usp=sharing",
    },
    {
      id: 10,
      name: "Research Logbook",
      submittedOn: "12/04/2025",
      GroupLink: null,
      individualLink:
        "https://drive.google.com/drive/folders/1Gy8IqpL5c-PpSv2aM4FtQxV6UC31a4jo?usp=sharing",
    },
  ];
  return (
    <section className="blog py-120 mash-bg-main mash-bg-main-two position-relative">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="mb-24 wow bounceIn">Research Documents</h2>
          <p className="wow bounceInUp">
            Please find all documents related to this project below.
          </p>
        </div>
        <div className="row gy-4">
          {documents?.map((item) => (
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={200}
              key={item.id}
            >
              <div className="blog-item scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                <div className="p-24 pt-32 h-100 d-flex flex-column justify-content-between">
                  <div className="">
                    <span className="px-20 py-8 bg-main-two-600 rounded-8 text-white fw-medium mb-20">
                      <i className="ph-bold ph-file-pdf d-flex text-2xl"></i>
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

export default DocumentDownloadSection;
