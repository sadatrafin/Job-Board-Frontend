// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Next.js সার্ভার থেকে Render সার্ভারে সরাসরি কল (সার্ভার টু সার্ভারে CORS হয় না)
    const response = await fetch("https://jobbord-vve3.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // ব্যাকএন্ড JSON বা Text যা-ই পাঠাক সেফলি পার্স করা
    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = { message: text };
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Backend server is unreachable or offline" },
      { status: 500 }
    );
  }
}