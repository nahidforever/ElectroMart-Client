"use client";

import Link from "next/link";
import { Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";

import { authClient } from "@/lib/auth-client";

import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}

        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
            <Smartphone size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              ElectroMart
            </h1>

            <p className="hidden text-xstext-slate-500 sm:block">
              Your Trusted Electronics Marketplace
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}

          {user && (
            <>
              <Link
                href="/products/add"
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                Add Product
              </Link>

              <Link
                href="/products/manage"
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                Manage Products
              </Link>
            </>
          )}
        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-3">
          {!isPending && user ? (
            <UserMenu user={user} />
          ) : (
            <div className="hidden items-center gap-3 lg:flex">
              <Link href="/login">
                <Button variant="outline" className="rounded-xl">
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="rounded-xl bg-blue-600 hover:bg-blue-700">
                  Register
                </Button>
              </Link>
            </div>
          )}

          <MobileMenu isLoggedIn={!!user} />
        </div>
      </nav>
    </header>
  );
}
