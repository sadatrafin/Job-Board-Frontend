"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [role, setRole] = useState<"user" | "employer">("user");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://jobbord-vve3.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: role,
        }),
      });

      // সেফলি রেসপন্স পার্স করা
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || data?.error || "Registration failed. User may already exist.");
      }

      // সফল হলে সাময়িক ডাটা সেভ এবং প্রোফাইলে নেভিগেশন
      sessionStorage.setItem(
        "temp_user",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: role,
        })
      );

      router.push("/profile");
    } catch (err: any) {
      if (err.message === "Failed to fetch") {
        setError("Backend server is waking up or unreachable. Please try clicking again.");
      } else {
        setError(err.message || "Failed to connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#07051A] text-slate-100 flex items-center justify-center p-4 overflow-hidden">
      {/* ব্যাকগ্রাউন্ড অরা */}
      <div 
        className="absolute top-[-10%] left-[-10%] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" 
        style={{ width: "500px", height: "500px" }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" 
        style={{ width: "550px", height: "550px" }}
      />

      <div className="relative w-full max-w-md z-10 my-8">
        {/* লোগো */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-10 w-10 rounded-xl bg-linear-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
            <Briefcase className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Job<span className="text-purple-400">Board</span>
          </span>
        </div>

        <Card className="border border-purple-500/20 bg-[#120F2D]/80 backdrop-blur-xl shadow-2xl shadow-purple-950/40">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold tracking-tight text-white">
              Create an Account
            </CardTitle>
            <CardDescription className="text-slate-400 text-sm">
              Join JobBoard to find opportunities or hire top talent
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* রোল সিলেকশন */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#09071E] rounded-xl border border-purple-500/20">
              <button
                type="button"
                onClick={() => setRole("user")}
                className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  role === "user"
                    ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <User className="w-3.5 h-3.5" />
                Job Seeker
              </button>
              <button
                type="button"
                onClick={() => setRole("employer")}
                className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  role === "employer"
                    ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                Employer
              </button>
            </div>

            {/* এরর মেসেজ বক্স */}
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-300 font-medium">
                  {role === "user" ? "Full Name" : "Company / Recruiter Name"}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-400/60" />
                  <Input
                    name="name"
                    type="text"
                    required
                    suppressHydrationWarning
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-9 bg-[#09071E]/70 border-purple-500/20 text-white placeholder:text-slate-500 focus-visible:ring-purple-500 focus-visible:border-purple-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-300 font-medium">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-400/60" />
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-9 bg-[#09071E]/70 border-purple-500/20 text-white placeholder:text-slate-500 focus-visible:ring-purple-500 focus-visible:border-purple-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-300 font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-400/60" />
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-9 pr-9 bg-[#09071E]/70 border-purple-500/20 text-white placeholder:text-slate-500 focus-visible:ring-purple-500 focus-visible:border-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-300 font-medium">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-400/60" />
                  <Input
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-9 bg-[#09071E]/70 border-purple-500/20 text-white placeholder:text-slate-500 focus-visible:ring-purple-500 focus-visible:border-purple-500"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="rounded border-purple-500/30 bg-[#09071E] text-purple-600 focus:ring-purple-500 focus:ring-offset-0 h-4 w-4 accent-purple-600"
                />
                <label htmlFor="terms" className="text-xs text-slate-400 cursor-pointer">
                  I agree to the{" "}
                  <Link href="/terms" className="text-purple-400 hover:underline">
                    Terms of Service
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-2.5 rounded-lg shadow-lg shadow-purple-600/25 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col border-t border-purple-500/10 pt-4">
            <p className="text-xs text-center text-slate-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}