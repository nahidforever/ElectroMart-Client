"use client";

import { Smartphone, ShieldCheck, Search, Zap } from "lucide-react";

export default function LoginLeftPanel() {
  return (
    <section className="relative m-5 hidden overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700 lg:flex">
      {/* Glow Effects */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 flex w-full flex-col justify-between p-12 text-white xl:p-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-blue-700 shadow-2xl ring-4 ring-white/20">
              <Smartphone size={32} />
            </div>

            <div>
              <h1 className="text-4xl font-black tracking-tight">
                ElectroMart
              </h1>

              <p className="text-sm text-blue-100">
                Your Trusted Electronics Marketplace
              </p>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-14">
            <h2 className="text-5xl font-extrabold leading-[1.15]">
              Buy. Sell.
              <br />
              Upgrade.
              <br />
              Electronics.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-blue-100">
              A modern marketplace where users can discover, list, and manage
              electronic devices with a simple and secure experience.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="mt-1 text-sm text-blue-100">Products</p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold">2K+</h3>
              <p className="mt-1 text-sm text-blue-100">Users</p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold">99%</h3>
              <p className="mt-1 text-sm text-blue-100">Trust</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-10 space-y-4">
          <FeatureCard
            icon={<ShieldCheck size={22} />}
            title="Secure Authentication"
            description="Protected login system with modern security."
          />

          <FeatureCard
            icon={<Search size={22} />}
            title="Smart Search"
            description="Find products quickly using filters."
          />

          <FeatureCard
            icon={<Zap size={22} />}
            title="Easy Marketplace"
            description="Simple product listing and management."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="text-sm text-blue-100">{description}</p>
      </div>
    </div>
  );
}
