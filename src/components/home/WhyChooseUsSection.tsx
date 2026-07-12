"use client";

import { motion } from "framer-motion";
import { CreditCard, Headphones, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Get your favorite electronics delivered quickly and safely to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Support",
    description:
      "Enjoy reliable warranty service and after-sales support for your products.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description:
      "Your transactions are protected with safe and trusted payment methods.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our support team is always ready to help you with your queries.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="
        bg-white
        py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
        "
      >
        {/* Heading */}
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
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-blue-600
            "
          >
            Why Choose Us
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              text-slate-900
              sm:text-4xl
            "
          >
            Everything You Need For A Better Shopping Experience
          </h2>

          <p
            className="
              mt-4
              text-slate-500
            "
          >
            We provide quality electronics with trusted service, secure payment
            and customer-focused support.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="
            mt-12
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  bg-white
                  p-7
                  shadow-sm
                  transition
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-100
                    text-blue-600
                    transition
                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  <Icon size={28} />
                </div>

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-slate-500
                  "
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
