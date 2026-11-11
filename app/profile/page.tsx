"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Mail, LogOut, ShieldCheck } from "lucide-react";

interface UserData {
  name: string;
  email: string;
  role: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("temp_user");

    if (!stored) {
      router.replace("/register");
      return;
    }

    try {
      setUserData(JSON.parse(stored));
      setLoading(false);
    } catch (e) {
      router.replace("/register");
    }

    const handleUnload = () => {
      sessionStorage.removeItem("temp_user");
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [router]);

  if (loading || !userData) {
    return (
      <div className="min-h-screen w-full bg-[#07051A] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleLogout = () => {
    sessionStorage.removeItem("temp_user");
    router.push("/register");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#07051A] text-slate-100 flex items-center justify-center p-4 overflow-hidden">
      <div
        className="absolute top-[-10%] left-[-10%] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"
        style={{ width: "500px", height: "500px" }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none"
        style={{ width: "550px", height: "550px" }}
      />

      <div className="relative w-full max-w-md z-10">
        <Card className="border border-purple-500/20 bg-[#120F2D]/80 backdrop-blur-xl shadow-2xl shadow-purple-950/40">
          <CardHeader className="text-center pb-6 border-b border-purple-500/10">
            <div className="mx-auto h-20 w-20 rounded-full bg-linear-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/30 mb-4 ring-4 ring-[#09071E]">
              <User className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight text-white">
              Welcome, {userData.name}!
            </CardTitle>
            <CardDescription className="text-slate-400">
              Your registration was successful.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-center p-3 rounded-lg bg-[#09071E]/70 border border-purple-500/10">
                <div className="h-10 w-10 rounded-md bg-purple-500/10 flex items-center justify-center mr-4">
                  <User className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">Full Name</p>
                  <p className="text-sm font-semibold text-white">{userData.name}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center p-3 rounded-lg bg-[#09071E]/70 border border-purple-500/10">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">Email Address</p>
                  <p className="text-sm font-semibold text-white">{userData.email}</p>
                </div>
              </div>

              {/* Role */}
              <div className="flex items-center p-3 rounded-lg bg-[#09071E]/70 border border-purple-500/10">
                <div className="h-10 w-10 rounded-md bg-emerald-500/10 flex items-center justify-center mr-4">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">Account Role</p>
                  <p className="text-sm font-semibold text-white capitalize">
                    {userData.role} Account
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                onClick={handleLogout}
                variant="destructive"
                className="w-full bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 border border-red-500/20 font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Go Back to Register
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}