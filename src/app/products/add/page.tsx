"use client";

import { useState } from "react";

import {
  Package,
  Tag,
  DollarSign,
  Boxes,
  ImageIcon,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);

    const formData = new FormData(form);

    const product = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/products`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(product),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Product added successfully");

      form.reset();
    } catch (error) {
      console.log(error);

      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 py-10">
      <div className="mx-auto max-w-4xl px-5">
        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Add New Product</h1>

          <p className="mt-2 text-slate-500">
            Publish your electronic product on ElectroMart.
          </p>
        </div>

        <Card className="rounded-3xl border-0 shadow-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}

              <div>
                <h2 className="mb-6 text-xl font-bold text-slate-800">
                  Basic Information
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Title */}

                  <div className="md:col-span-2">
                    <Label className="mb-2 block">Product Title</Label>

                    <div className="relative">
                      <Package
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <Input
                        name="title"
                        placeholder="Apple iPhone 16 Pro Max"
                        className="h-12 rounded-xl pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Brand */}

                  <div>
                    <Label className="mb-2 block">Brand</Label>

                    <div className="relative">
                      <Tag
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <Input
                        name="brand"
                        placeholder="Apple"
                        className="h-12 rounded-xl pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Category */}

                  <div>
                    <Label className="mb-2 block">Category</Label>

                    <select
                      name="category"
                      className="h-12 w-full rounded-xl border border-input bg-background px-4"
                      required
                    >
                      <option value="">Select Category</option>
                      <option>Smartphone</option>
                      <option>Laptop</option>
                      <option>Tablet</option>
                      <option>Desktop</option>
                      <option>Monitor</option>
                      <option>Headphone</option>
                      <option>Smart Watch</option>
                      <option>Accessories</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Price & Stock */}

              <div>
                <h2 className="mb-6 text-xl font-bold text-slate-800">
                  Pricing & Inventory
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                  {/* Price */}

                  <div>
                    <Label className="mb-2 block">Price (BDT)</Label>

                    <div className="relative">
                      <DollarSign
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <Input
                        name="price"
                        type="number"
                        placeholder="120000"
                        className="h-12 rounded-xl pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Stock */}

                  <div>
                    <Label className="mb-2 block">Stock</Label>

                    <div className="relative">
                      <Boxes
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <Input
                        name="stock"
                        type="number"
                        placeholder="20"
                        className="h-12 rounded-xl pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Condition */}

                  <div>
                    <Label className="mb-2 block">Condition</Label>

                    <select
                      name="condition"
                      className="h-12 w-full rounded-xl border border-input bg-background px-4"
                    >
                      <option>New</option>
                      <option>Used</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Description */}

              <div>
                <h2 className="mb-6 text-xl font-bold text-slate-800">
                  Description
                </h2>

                <div className="space-y-6">
                  <div>
                    <Label className="mb-2 block">Short Description</Label>

                    <Input
                      name="shortDescription"
                      placeholder="Short summary..."
                      className="h-12 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block">Full Description</Label>

                    <div className="relative">
                      <FileText
                        size={18}
                        className="absolute left-3 top-4 text-slate-400"
                      />

                      <Textarea
                        rows={6}
                        name="description"
                        placeholder="Write complete product details..."
                        className="rounded-xl pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}

              <div>
                <h2 className="mb-6 text-xl font-bold text-slate-800">
                  Product Image
                </h2>

                <Label className="mb-2 block">Image URL (Optional)</Label>

                <div className="relative">
                  <ImageIcon
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <Input
                    name="image"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    className="h-12 rounded-xl pl-10"
                  />
                </div>
              </div>

              {/* Button */}

              <Button
                disabled={loading}
                type="submit"
                className="h-12 w-full rounded-xl bg-blue-600 text-base font-semibold hover:bg-blue-700"
              >
                {loading ? "Publishing..." : "Publish Product"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
