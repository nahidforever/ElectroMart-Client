"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Eye, EyeOff, Mail, Lock, Smartphone, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import LoginLeftPanel from "@/components/LoginLeftPanel";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    try {
      setLoading(true);

      const { error } = await authClient.signIn.email({
        email: user.email,

        password: user.password,
      });

      if (error) {
        toast.error(error.message || "Login failed");

        return;
      }

      toast.success("Login successful!");

      router.push("/");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT SIDE */}

        <LoginLeftPanel />

        {/* RIGHT SIDE */}

        <section className="flex items-center justify-center p-5 sm:p-8">
          <Card className="w-full max-w-md rounded-[32px] border-0 bg-white shadow-2xl">
            <CardContent className="p-8 sm:p-10">
              {/* Mobile Logo */}

              <div className="mb-6 flex justify-center lg:hidden">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-xl">
                  <Smartphone size={30} />
                </div>
              </div>

              {/* Header */}

              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-slate-900">
                  Welcome Back
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  Sign in to continue with ElectroMart
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-5">
                {/* Email */}

                <div>
                  <Label className="mb-2 block">Email Address</Label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <Input
                      name="email"
                      type="email"
                      placeholder="example@gmail.com"
                      className="h-12 rounded-xl pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Password */}

                <div>
                  <Label className="mb-2 block">Password</Label>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="h-12 rounded-xl pl-10 pr-12"
                      required
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Remember */}

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-600">
                    <input type="checkbox" className="rounded" />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}

                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-xl bg-blue-600 text-base font-semibold hover:bg-blue-700"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                {/* Divider */}

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>

                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-xs uppercase text-slate-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Google */}

                <Button
                  variant="outline"
                  onClick={handleGoogleSignIn}
                  className="h-12 w-full rounded-xl border-slate-300 hover:bg-slate-50 flex items-center justify-center gap-2"
                >
                  <FcGoogle size={22} />
                  <span>Continue with Google</span>
                </Button>
              </form>

              {/* Register */}

              <p className="mt-8 text-center text-sm text-slate-500">
                Do not have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
