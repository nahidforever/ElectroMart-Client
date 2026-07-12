"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Pencil,
  Package,
  DollarSign,
  Boxes,
  FileText,
  ImageIcon,
} from "lucide-react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

export default function EditProductModal({ product }: { product: Product }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const updatedProduct = Object.fromEntries(formData.entries());

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/manage/products/${product._id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(updatedProduct),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Product updated successfully");

      setOpen(false);

      router.refresh();
    } catch (error) {
      console.log(error);

      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button size="icon" variant="outline" className="rounded-xl">
            <Pencil size={17} />
          </Button>
        }
      />

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleUpdate} className="mt-5 space-y-6">
          <div>
            <Label>Product Title</Label>

            <div className="relative mt-2">
              <Package
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <Input
                name="title"
                defaultValue={product.title}
                className="h-12 rounded-xl pl-10"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Label>Brand</Label>

              <Input
                name="brand"
                defaultValue={product.brand}
                className="mt-2 h-12 rounded-xl"
              />
            </div>

            <div>
              <Label>Category</Label>

              <select
                name="category"
                defaultValue={product.category}
                className="mt-2 h-12 w-full rounded-xl border px-4"
              >
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

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <Label>Price</Label>

              <div className="relative mt-2">
                <DollarSign
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  name="price"
                  type="number"
                  defaultValue={product.price}
                  className="h-12 rounded-xl pl-10"
                />
              </div>
            </div>

            <div>
              <Label>Stock</Label>

              <div className="relative mt-2">
                <Boxes
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  name="stock"
                  type="number"
                  defaultValue={product.stock}
                  className="h-12 rounded-xl pl-10"
                />
              </div>
            </div>

            <div>
              <Label>Condition</Label>

              <select
                name="condition"
                defaultValue={product.condition}
                className="mt-2 h-12 w-full rounded-xl border px-4"
              >
                <option>New</option>

                <option>Used</option>
              </select>
            </div>
          </div>

          <div>
            <Label>Short Description</Label>

            <Input
              name="shortDescription"
              defaultValue={product.shortDescription}
              className="mt-2 h-12 rounded-xl"
            />
          </div>

          <div>
            <Label>Description</Label>

            <div className="relative mt-2">
              <FileText
                size={18}
                className="absolute left-3 top-4text-slate-400"
              />

              <Textarea
                name="description"
                rows={5}
                defaultValue={product.description}
                className="rounded-xl pl-10"
              />
            </div>
          </div>

          <div>
            <Label>Image URL</Label>

            <div className="relative mt-2">
              <ImageIcon
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <Input
                name="image"
                defaultValue={product.image}
                className="h-12 rounded-xl pl-10"
              />
            </div>
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="h-12 w-full rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            {loading ? "Updating..." : "Update Product"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
