"use client";

import { useState } from "react";

import type { ChangeEvent, FormEvent } from "react";

import { motion } from "framer-motion";

import {
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactInformation = [
  {
    icon: Mail,
    title: "Email Support",
    value: "support@electromart.com",
    description:
      "Send us your questions, suggestions or feedback about ElectroMart.",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Dhaka, Bangladesh",
    description: "ElectroMart is developed and managed from Dhaka, Bangladesh.",
  },
  {
    icon: Clock3,
    title: "Support Hours",
    value: "Saturday – Thursday",
    description: "Our general support hours are from 9:00 AM to 6:00 PM.",
  },
];

const supportTopics = [
  "Questions about exploring electronic products",
  "Help with adding or managing product listings",
  "Reporting incorrect product information",
  "Suggestions and feedback about ElectroMart",
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    const fieldName = name as keyof ContactFormData;

    setFormData((previousData) => ({
      ...previousData,
      [fieldName]: value,
    }));

    if (successMessage) {
      setSuccessMessage("");
    }

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    if (
      !trimmedData.name ||
      !trimmedData.email ||
      !trimmedData.subject ||
      !trimmedData.message
    ) {
      setErrorMessage("Please complete all required fields.");
      setSuccessMessage("");
      return;
    }

    if (trimmedData.name.length < 2) {
      setErrorMessage("Name must contain at least 2 characters.");
      setSuccessMessage("");
      return;
    }

    if (trimmedData.subject.length < 3) {
      setErrorMessage("Subject must contain at least 3 characters.");
      setSuccessMessage("");
      return;
    }

    if (trimmedData.message.length < 10) {
      setErrorMessage("Message must contain at least 10 characters.");
      setSuccessMessage("");
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/contact-messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(trimmedData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send your message.");
      }

      setSuccessMessage(
        data.message || "Your message has been sent successfully.",
      );

      setFormData(initialFormData);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Page Introduction */}

      <section className="border-b border-slate-100 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              <MessageCircle size={17} />
              Contact ElectroMart
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Get in Touch with Our Team
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Have a question, suggestion or need help using ElectroMart?
              Complete the form and send your message directly to our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactInformation.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-lg sm:p-7"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={27} />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 font-semibold text-blue-600">
                    {item.value}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
          {/* Support Information */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center lg:text-left"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How Can We Help?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Send Us Your Message
            </h2>

            <p className="mt-5 leading-relaxed text-slate-600">
              You can contact us regarding products, account access, product
              management or general feedback about the ElectroMart platform.
            </p>

            <div className="mt-8 space-y-4">
              {supportTopics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {topic}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-left">
              <ShieldCheck
                size={23}
                className="mt-0.5 shrink-0 text-blue-600"
              />

              <div>
                <h3 className="font-bold text-slate-900">
                  Your Information Is Protected
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Your submitted information will only be stored for contact and
                  support purposes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
          >
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-slate-900">
                Contact Form
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Fields marked with an asterisk are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={80}
                    disabled={isSubmitting}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                    maxLength={120}
                    disabled={isSubmitting}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                  />
                </div>
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject <span className="text-red-500">*</span>
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                  minLength={3}
                  maxLength={150}
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                />
              </div>

              {/* Message */}

              <div>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>

                  <span className="text-xs text-slate-400">
                    {formData.message.length}/3000
                  </span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={7}
                  required
                  minLength={10}
                  maxLength={3000}
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                />
              </div>

              {/* Success Message */}

              {successMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                >
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

                  <p>{successMessage}</p>
                </div>
              )}

              {/* Error Message */}

              {errorMessage && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle size={19} className="mr-2 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={19} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
