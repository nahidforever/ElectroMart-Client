"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CircleHelp } from "lucide-react";

const faqs = [
  {
    question: "How can I explore products on ElectroMart?",
    answer:
      "Visit the Explore page to browse all available electronics. You can search by product name, brand or description and filter products by category and price range.",
  },
  {
    question: "Do I need an account to view products?",
    answer:
      "No. You can browse products and view complete product details without signing in. Authentication is required only when you want to add, update or delete product listings.",
  },
  {
    question: "How can I add a new product?",
    answer:
      "After signing in, go to the Add Product page. Fill in the required product information and submit the form.",
  },
  {
    question: "Can I update my product information?",
    answer:
      "Yes. Authenticated users can update product information such as title, brand, category, price, stock, condition, description and product image.",
  },
  {
    question: "Can I delete a product listing?",
    answer:
      "Yes. You can delete a product from the Manage Products page. Make sure you select the correct product before confirming the deletion.",
  },
  {
    question: "Are both new and used products available?",
    answer:
      "Yes. ElectroMart supports products with different conditions. You can check the condition of a product from its card or product details page.",
  },
  {
    question: "How can I find products within my budget?",
    answer:
      "Use the minimum and maximum price filters on the Explore page. You can also sort products by lowest price or highest price.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((previousIndex) => (previousIndex === index ? null : index));
  };

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}

        <motion.div
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
            duration: 0.6,
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-2 text-blue-600">
            <CircleHelp size={18} />

            <p className="text-sm font-semibold uppercase tracking-wider">
              Help Center
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 leading-relaxed text-slate-500">
            Find quick answers about exploring, adding and managing products on
            ElectroMart.
          </p>
        </motion.div>

        {/* FAQ Items */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-12 space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className={`overflow-hidden rounded-2xl border bg-slate-50 shadow-sm transition duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-white shadow-md"
                    : "border-slate-200 hover:border-blue-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.3,
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-200 px-5 pb-5 pt-4 sm:px-6">
                        <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
