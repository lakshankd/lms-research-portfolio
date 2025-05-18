"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("manolqbj");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameInput = e.currentTarget.querySelector('input[type="text"]');
    const messageTextarea = e.currentTarget.querySelector("textarea");

    // Save original message
    const originalMessage = messageTextarea.value;

    // Update textarea with combined message
    messageTextarea.value = `Name: ${nameInput.value}\n\nMessage: ${originalMessage}`;

    // Submit the form
    handleSubmit(e);

    // Restore original message (optional)
    setTimeout(() => {
      messageTextarea.value = originalMessage;
    }, 0);
  };

  return (
    <>
      <section className="contact-form-section py-120 z-1 mash-bg-main-two mash-reverse">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-xl-7 col-lg-6 pe-lg-5">
              <div className="flex-align d-inline-flex gap-8 mb-16">
                <span className="text-main-600 text-2xl d-flex">
                  <i className="ph-bold ph-book" />
                </span>
                <h5 className="text-main-600 mb-0">Contact Us</h5>
              </div>
              <h2 className="mb-24">Contact Details</h2>
              <p className="text-neutral-500 text-line-3 max-w-636 mb-4">
                For further queries please reach us at{" "}
                <Link
                  href="mailto:learningcompass2024@gmail.com"
                  className="text-main-600 hover:text-main-700 hover:underline transition-colors duration-200 font-semibold"
                >
                  learningcompass2024@gmail.com
                </Link>
                . Hope this project helped you in some manner. Thank you!
              </p>
              <p className="text-neutral-500 text-line-3 max-w-636 mt-10">
                - Team Learning Compass
              </p>
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="p-24 bg-white rounded-12 box-shadow-md">
                <div className="border border-neutral-30 rounded-8 bg-main-25 p-24">
                  <form
                    action="https://formspree.io/f/mkgrpjnk"
                    id="commentForm"
                    onSubmit={handleFormSubmit}
                  >
                    <h4 className="mb-0">Get In Touch</h4>
                    <span className="d-block border border-neutral-30 my-24 border-dashed" />
                    <div className="mb-24">
                      <label className="text-neutral-700 text-lg fw-medium mb-12">
                        Name
                      </label>
                      <input
                        type="text"
                        className="common-input rounded-pill border-transparent focus-border-main-600"
                        id="email"
                        placeholder="Enter Your Name..."
                        required
                      />
                    </div>
                    <div className="mb-24">
                      <label
                        htmlFor="email"
                        className="text-neutral-700 text-lg fw-medium mb-12"
                      >
                        Email{" "}
                      </label>
                      <input
                        type="email"
                        className="common-input rounded-pill border-transparent focus-border-main-600"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email..."
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    <div className="mb-24">
                      <label
                        htmlFor="message"
                        className="text-neutral-700 text-lg fw-medium mb-12"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="common-input rounded-24 border-transparent focus-border-main-600 h-110"
                        placeholder="Enter Your Message..."
                        defaultValue={""}
                        required
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                    <div className="mb-0">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="btn btn-main rounded-pill flex-center gap-8 mt-40"
                      >
                        {state.submitting ? (
                          <>
                            Sending Message{" "}
                            <i className="ph-bold ph-spinner d-flex text-lg d-flex spin-animation" />
                          </>
                        ) : (
                          <>
                            Send Message
                            <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                          </>
                        )}
                      </button>
                      {state.succeeded && (
                        <div className="btn success-main rounded-pill flex-center gap-8 mt-40">
                          Message Sent Successfully
                          <i className="ph-bold  ph-check text-green"></i>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
