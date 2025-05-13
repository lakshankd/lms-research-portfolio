import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      date: "August 2024",
      title: "Project Proposal Presentation & Report",
      description:
        "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      marksAllocated: "12%",
    },
    {
      id: 2,
      date: "December 2024",
      title: "Progress Presentation I",
      description:
        "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design or requirements.",
      marksAllocated: "15%",
    },
    {
      id: 3,
      date: "December 2024",
      title: "Check List I",
      description:
        "To articulate the business concept, value proposition, target market, and marketing strategies. To ensure the business's stakeholders understand the project's direction and goals.",
      marksAllocated: "2%",
    },
    {
      id: 4,
      date: "December 2024",
      title: "Check List II",
      description:
        "To capture the functional requirements and non-functional requirements of the client or stakeholders regarding the software product.",
      marksAllocated: "2%",
    },
    {
      id: 5,
      date: "March 2025",
      title: "Progress Presentation II",
      description:
        "Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.",
      marksAllocated: "18%",
    },
    {
      id: 6,
      date: "March 2025",
      title: "Check List III",
      description:
        "To ensure that the software meets the specified requirements and full fills the needs of the end-users. Allow stakeholders to verify that the software behaves as expected and provides the intended functionality.",
      marksAllocated: "2%",
    },
    {
      id: 7,
      date: "March 2025",
      title: "Check List IV",
      description: "Train students on using a project management tool",
      marksAllocated: "2%",
    },
    {
      id: 8,
      date: "March 2025",
      title: "Research Paper",
      description:
        "Explain how you contribute to the existing body of knowledge, while appropriately acknowledging all the sources you consulted to create new insights.",
      marksAllocated: "10%",
    },
    {
      id: 9,
      date: "April 2025",
      title: "Final Report",
      description:
        "The Final Report assesses the project completed over the year. The marks listed below include those for individual and group reports, as well as the Final Report.",
      marksAllocated: "19%",
    },
    {
      id: 10,
      date: "May 2025",
      title: "Final Presentation and VIVA",
      description:
        "The viva is conducted individually to evaluate each member's contribution to the project.",
      marksAllocated: "20%",
    },
    {
      id: 11,
      date: "June 2025",
      title: "Website Assessment",
      description:
        "The website facilitates the promotion of our research project and provides comprehensive details about it.",
      marksAllocated: "2%",
    },
    {
      id: 12,
      date: "June 2025",
      title: "Research Logbook",
      description: "Status of the project is validated through the Logbook.",
      marksAllocated: "2%",
    },
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="p-0">
          <ul className="timeline wow bounceIn">
            {timelineData.map((item) => (
              <li key={item.id} className="">
                <div className="border border-main-100 rounded-12 bg-main-25 p-24">
                  <div className="flex-align gap-8 mb-16">
                    <span className="text-xl d-flex text-main-600">
                      <i className="ph-bold ph-calendar-dots" />
                    </span>
                    <span className="text-sm fw-medium text-neutral-500">
                      {item.date}
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="text-neutral-500 mb-12">{item.title}</h4>
                    <p className="text-neutral-500 mb-12">{item.description}</p>
                    <h6 className="text-neutral-500 mb-12">
                      Marks Allocated: {item.marksAllocated}
                    </h6>
                    <div className="flex-align gap-20 mb-8">
                      <div
                        className="progress w-100 bg-white rounded-pill h-16"
                        role="progressbar"
                        aria-label="Basic example"
                      >
                        <div
                          className="progress-bar bg-main-600 rounded-0"
                          style={{ width: item.marksAllocated }}
                        />
                        {/* <div
                        className="progress-bar rounded-right"
                        style={{
                          width: "6%",
                          backgroundColor: "#2fa75f",
                          color: "white",
                        }}
                      >
                        6%
                      </div> */}
                      </div>
                      <span className="text-gray-900 flex-shrink-0">
                        {item.marksAllocated}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
