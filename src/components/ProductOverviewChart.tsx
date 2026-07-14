"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Boxes, Package, PackageCheck, RotateCcw } from "lucide-react";

interface Product {
  _id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  condition: string;
  shortDescription: string;
  description: string;
  image: string;
}

interface ProductOverviewChartProps {
  products: Product[];
}

export default function ProductOverviewChart({
  products,
}: ProductOverviewChartProps) {
  const totalProducts = products.length;

  const totalStock = products.reduce(
    (total, product) => total + Number(product.stock || 0),
    0,
  );

  const newProducts = products.filter(
    (product) => product.condition.toLowerCase() === "new",
  ).length;

  const usedProducts = products.filter(
    (product) => product.condition.toLowerCase() === "used",
  ).length;

  const categoryMap = products.reduce<Record<string, number>>(
    (result, product) => {
      const category = product.category || "Other";

      result[category] = (result[category] || 0) + 1;

      return result;
    },
    {},
  );

  const chartData = Object.entries(categoryMap)
    .map(([category, total]) => ({
      category,
      total,
    }))
    .sort((first, second) => second.total - first.total);

  const mobileChartHeight = Math.max(280, chartData.length * 58);

  const statistics = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: Package,
      iconStyle: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Stock",
      value: totalStock,
      icon: Boxes,
      iconStyle: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "New Products",
      value: newProducts,
      icon: PackageCheck,
      iconStyle: "bg-violet-100 text-violet-600",
    },
    {
      title: "Used Products",
      value: usedProducts,
      icon: RotateCcw,
      iconStyle: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <section className="mb-10">
      {/* Statistics */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((statistic) => {
          const Icon = statistic.icon;

          return (
            <div
              key={statistic.title}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${statistic.iconStyle}`}
              >
                <Icon size={23} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-500">
                  {statistic.title}
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {statistic.value.toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Category Chart */}

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-7">
        <div className="mb-7 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Product Overview
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
            Products by Category
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            A category-wise overview of your available product listings.
          </p>
        </div>

        {chartData.length > 0 ? (
          <>
            {/* Mobile Horizontal Chart */}

            <div
              className="w-full md:hidden"
              style={{
                height: mobileChartHeight,
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 15,
                    left: 5,
                    bottom: 5,
                  }}
                  barCategoryGap="24%"
                >
                  <CartesianGrid
                    strokeDasharray="4 4"
                    horizontal={false}
                    stroke="#e2e8f0"
                  />

                  <XAxis
                    type="number"
                    allowDecimals={false}
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#64748b",
                      fontSize: 11,
                    }}
                  />

                  <YAxis
                    type="category"
                    dataKey="category"
                    axisLine={false}
                    tickLine={false}
                    width={105}
                    interval={0}
                    tick={{
                      fill: "#475569",
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                  />

                  <Tooltip
                    cursor={{
                      fill: "#eff6ff",
                    }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                    }}
                    formatter={(value) => [
                      `${Number(value)} product${
                        Number(value) === 1 ? "" : "s"
                      }`,
                      "Total",
                    ]}
                  />

                  <Bar
                    dataKey="total"
                    name="Products"
                    fill="#2563eb"
                    radius={[0, 8, 8, 0]}
                    maxBarSize={32}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Tablet and Desktop Chart */}

            <div className="hidden h-[340px] w-full md:block">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -15,
                    bottom: 10,
                  }}
                  barCategoryGap="25%"
                >
                  <CartesianGrid
                    strokeDasharray="4 4"
                    vertical={false}
                    stroke="#e2e8f0"
                  />

                  <XAxis
                    dataKey="category"
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                    tick={{
                      fill: "#64748b",
                      fontSize: 12,
                    }}
                    angle={chartData.length > 6 ? -20 : 0}
                    textAnchor={chartData.length > 6 ? "end" : "middle"}
                    height={chartData.length > 6 ? 65 : 35}
                  />

                  <YAxis
                    allowDecimals={false}
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#64748b",
                      fontSize: 12,
                    }}
                  />

                  <Tooltip
                    cursor={{
                      fill: "#eff6ff",
                    }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                    }}
                    formatter={(value) => [
                      `${Number(value)} product${
                        Number(value) === 1 ? "" : "s"
                      }`,
                      "Total",
                    ]}
                  />

                  <Bar
                    dataKey="total"
                    name="Products"
                    fill="#2563eb"
                    radius={[8, 8, 0, 0]}
                    maxBarSize={58}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        ) : (
          <div className="flex min-h-[240px] items-center justify-center rounded-2xl bg-slate-50 px-5 text-center">
            <div>
              <Package className="mx-auto text-slate-400" size={34} />

              <p className="mt-3 font-semibold text-slate-700">
                No chart data available
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Add products to see the category overview.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
