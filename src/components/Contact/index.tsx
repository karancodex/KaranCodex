'use client';

import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  email: Yup.string()
    .email("Please enter a valid Email ID")
    .required("Email ID is required."),
  phone: Yup.string().required("Phone is required."),
  message: Yup.string().required("Message is required.")
});

const Contact = () => {
  const [message, setMessage] = React.useState("");
  const [responseType, setResponseType] = React.useState("success");

  const contactForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    },
    validationSchema: ContactFormSchema,
    onSubmit: async (values) => {
      let payload = new FormData();
      Object.keys(values).forEach((key) => payload.append(key, values[key]));

      try {
        const response = await fetch("https://formspree.io/f/xqkrpbqn", {
          method: "POST",
          body: payload,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          setResponseType("success");
          setMessage("Thanks, will get back to you soon.");
          contactForm.resetForm();
        } else {
          throw new Error("Failed to submit");
        }
      } catch (error) {
        setResponseType("error");
        setMessage("Oops! Something went wrong, please try again later.");
      }
    }
  });

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 w-full">
            <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={contactForm.handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        First Name
                      </label>
                      <input
                        name="firstName"
                        value={contactForm.values.firstName}
                        onChange={contactForm.handleChange}
                        onBlur={contactForm.handleBlur}
                        className="w-full px-4 py-3 rounded border"
                        placeholder="Enter your first name"
                      />
                      {contactForm.touched.firstName && contactForm.errors.firstName && (
                        <p className="text-red-500 text-sm">{contactForm.errors.firstName}</p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        value={contactForm.values.lastName}
                        onChange={contactForm.handleChange}
                        onBlur={contactForm.handleBlur}
                        className="w-full px-4 py-3 rounded border"
                        placeholder="Enter your last name"
                      />
                      {contactForm.touched.lastName && contactForm.errors.lastName && (
                        <p className="text-red-500 text-sm">{contactForm.errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Email
                      </label>
                      <input
                        name="email"
                        value={contactForm.values.email}
                        onChange={contactForm.handleChange}
                        onBlur={contactForm.handleBlur}
                        className="w-full px-4 py-3 rounded border"
                        placeholder="Enter your email"
                      />
                      {contactForm.touched.email && contactForm.errors.email && (
                        <p className="text-red-500 text-sm">{contactForm.errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Phone
                      </label>
                      <input
                        name="phone"
                        value={contactForm.values.phone}
                        onChange={contactForm.handleChange}
                        onBlur={contactForm.handleBlur}
                        className="w-full px-4 py-3 rounded border"
                        placeholder="Enter your phone number"
                      />
                      {contactForm.touched.phone && contactForm.errors.phone && (
                        <p className="text-red-500 text-sm">{contactForm.errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={contactForm.values.message}
                        onChange={contactForm.handleChange}
                        onBlur={contactForm.handleBlur}
                        className="w-full px-4 py-3 rounded border"
                        placeholder="Enter your message"
                      />
                      {contactForm.touched.message && contactForm.errors.message && (
                        <p className="text-red-500 text-sm">{contactForm.errors.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded bg-primary px-6 py-3 text-white"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
              {message && (
                <div className={`mt-4 text-${responseType === 'success' ? 'green' : 'red'}-500`}>
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
