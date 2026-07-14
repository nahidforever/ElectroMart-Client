import Link from "next/link";

import { ArrowLeft, Home, PackageSearch, SearchX } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl text-center">
        {/* Icon */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-blue-600 sm:h-24 sm:w-24">
          <SearchX size={42} />
        </div>

        {/* Error Code */}

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
          Error 404
        </p>

        {/* Heading */}

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Page Not Found
        </h1>

        {/* Description */}

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg">
          The page you are looking for may have been removed, renamed or is
          temporarily unavailable.
        </p>

        {/* Suggestion Box */}

        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <PackageSearch size={22} />
            </span>

            <div>
              <h2 className="font-bold text-slate-900">
                Looking for electronics?
              </h2>

              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                Visit the Explore page to browse available products on
                ElectroMart.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/explore"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Explore Products
          </Link>
        </div>
      </div>
    </main>
  );
}
