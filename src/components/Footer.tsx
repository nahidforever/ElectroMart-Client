import Link from "next/link";

import {
  BadgeCheck,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore Products",
    href: "/explore",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const marketplaceInfo = [
  {
    icon: BadgeCheck,
    title: "New & Used Products",
    description: "Explore electronics in both new and used conditions.",
  },
  {
    icon: Search,
    title: "Easy Product Search",
    description: "Find products quickly by title, brand or description.",
  },
  {
    icon: SlidersHorizontal,
    title: "Advanced Filtering",
    description: "Filter products by category, price and sorting options.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Management",
    description: "Authenticated users can safely manage product listings.",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      {/* Main Footer */}

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-start">
          {/* Brand Information */}

          <div className="w-full max-w-sm text-center lg:text-left">
            <Link
              href="/"
              aria-label="Go to ElectroMart homepage"
              className="inline-flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <ShoppingBag size={23} />
              </span>

              <span className="text-2xl font-bold text-white">
                Electro<span className="text-blue-500">Mart</span>
              </span>
            </Link>

            <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-slate-400 lg:mx-0">
              Your trusted electronics marketplace for discovering, listing and
              managing quality electronic products through a secure and
              responsive platform.
            </p>

            {/* Social Links */}

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${social.name}`}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}

          <div className="w-full max-w-sm text-center lg:text-left">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-slate-400 transition duration-200 hover:text-blue-400 lg:hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplace Information */}

          <div className="w-full max-w-sm text-center lg:text-left">
            <h3 className="text-lg font-bold text-white">
              Marketplace Features
            </h3>

            <div className="mt-5 space-y-4">
              {marketplaceInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                      <Icon size={18} />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-slate-300">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}

          <div className="w-full max-w-sm text-center lg:text-left">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>

            <div className="mt-5 space-y-5">
              {/* Location */}

              <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start">
                <MapPin
                  size={20}
                  className="shrink-0 text-blue-500 lg:mt-0.5"
                />

                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Our Location
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Email */}

              <a
                href="mailto:support@electromart.com"
                className="group flex flex-col items-center gap-3 lg:flex-row lg:items-start"
              >
                <Mail size={20} className="shrink-0 text-blue-500 lg:mt-0.5" />

                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Email Support
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-400 transition group-hover:text-blue-400">
                    support@electromart.com
                  </p>
                </div>
              </a>

              {/* Help Box */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center lg:text-left">
                <p className="text-sm font-semibold text-white">
                  Need help choosing a product?
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Send us an email and we will help you find the right
                  electronic device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="text-sm text-slate-500">
            © {currentYear} ElectroMart. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Your Trusted Electronics Marketplace
          </p>
        </div>
      </div>
    </footer>
  );
}
