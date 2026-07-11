"use client";

import Link from "next/link";

import {
  Menu,
  X,
  Home,
  Search,
  PlusCircle,
  Settings,
  Info,
  Phone,
  LogIn,
  UserPlus,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const menuItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Explore",
    href: "/explore",
    icon: Search,
  },
  {
    name: "Add Item",
    href: "/items/add",
    icon: PlusCircle,
    auth: true,
  },
  {
    name: "Manage Items",
    href: "/items/manage",
    icon: Settings,
    auth: true,
  },
  {
    name: "About",
    href: "/about",
    icon: Info,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

export default function MobileMenu({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <Sheet>
      <SheetTrigger
        className="
        lg:hidden
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        hover:bg-blue-50
        transition
        "
      >
        <Menu size={26} />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="
        w-[320px]
        border-l
        bg-white
        [&>button]:hidden
        "
      >
        {/* Custom Close Button */}

        <div
          className="
          absolute
          right-5
          top-5
          "
        >
          <SheetClose
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            bg-white
            text-slate-600
            shadow-sm
            transition
            hover:bg-red-50
            hover:text-red-500
            "
          >
            <X size={20} />
          </SheetClose>
        </div>

        {/* Header */}

        <SheetHeader
          className="
          mt-4
          border-b
          pb-6
          "
        >
          <SheetTitle
            className="
            flex
            items-center
            gap-3
            text-left
            "
          >
            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-blue-600
              text-white
              shadow-lg
              "
            >
              ⚡
            </div>

            <div>
              <h2
                className="
                text-xl
                font-bold
                "
              >
                ElectroMart
              </h2>

              <p
                className="
                text-xs
                font-normal
                text-slate-500
                "
              >
                Electronics Marketplace
              </p>
            </div>
          </SheetTitle>
        </SheetHeader>

        {/* Menu */}

        <div
          className="
          mt-8
          flex
          flex-col
          gap-2
          "
        >
          {menuItems.map((item) => {
            if (item.auth && !isLoggedIn) return null;

            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="
                flex
                items-center
                gap-4
                rounded-xl
                px-4
                py-3
                text-slate-700
                transition
                hover:bg-blue-50
                hover:text-blue-600
                "
              >
                <Icon
                  size={20}
                  className="
                  text-slate-500
                  "
                />

                <span
                  className="
                  font-medium
                  "
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Auth Buttons */}

        {!isLoggedIn && (
          <div
            className="
            absolute
            bottom-8
            left-6
            right-6
            space-y-3
            "
          >
            <Link href="/login">
              <Button
                className="
                h-12
                w-full
                rounded-xl
                bg-blue-600
                text-base
                hover:bg-blue-700
                "
              >
                <LogIn className="mr-2" />
                Login
              </Button>
            </Link>

            <Link href="/register">
              <Button
                variant="outline"
                className="
                h-12
                w-full
                rounded-xl
                text-base
                mt-5
                "
              >
                <UserPlus className="mr-2" />
                Create Account
              </Button>
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
