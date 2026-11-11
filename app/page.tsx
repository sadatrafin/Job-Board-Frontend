import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-25"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/6 px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/8">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-3.5 w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   Search,
//   MapPin,
//   Briefcase,
//   FileText,
//   UserCheck,
//   Smile,
//   ChevronRight,
//   ArrowRight,
//   Bookmark,
//   Send,
//   Menu,
//   X,
//   Globe,
//   Quote,
// } from "lucide-react";

// export default function HomePage() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // ক্যাটাগরি ডেটা
//   const categories = [
//     { title: "UI/UX Design", count: "1.5k+ Jobs" },
//     { title: "Illustration", count: "850+ Jobs" },
//     { title: "Cool Art", count: "420+ Jobs" },
//     { title: "Web Design", count: "2.4k+ Jobs" },
//     { title: "Product Design", count: "1.2k+ Jobs" },
//     { title: "Developer", count: "3.8k+ Jobs" },
//     { title: "Animation", count: "600+ Jobs" },
//   ];

//   // জব অফার ডেটা
//   const jobOffers = [
//     {
//       company: "Google",
//       role: "Senior UI/UX Designer",
//       type: "Remote",
//       salary: "$120k - $140k/yr",
//       location: "Mountain View, CA",
//       logoBg: "bg-red-500/10 text-red-400 border-red-500/20",
//       letter: "G",
//     },
//     {
//       company: "Microsoft",
//       role: "Full Stack Web Designer",
//       type: "Full Time",
//       salary: "$95k - $115k/yr",
//       location: "Redmond, WA",
//       logoBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
//       letter: "M",
//     },
//     {
//       company: "Behance",
//       role: "Lead Visual Artist",
//       type: "Contract",
//       salary: "$80k - $95k/yr",
//       location: "San Francisco, CA",
//       logoBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
//       letter: "B",
//     },
//     {
//       company: "GitHub",
//       role: "Frontend Engineer",
//       type: "Remote",
//       salary: "$110k - $130k/yr",
//       location: "San Francisco, CA",
//       logoBg: "bg-slate-500/10 text-slate-300 border-slate-500/20",
//       letter: "GH",
//     },
//     {
//       company: "Dropbox",
//       role: "Product Growth Designer",
//       type: "Full Time",
//       salary: "$105k - $125k/yr",
//       location: "Austin, TX",
//       logoBg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
//       letter: "DB",
//     },
//     {
//       company: "Adobe",
//       role: "Design System Specialist",
//       type: "Remote",
//       salary: "$115k - $135k/yr",
//       location: "San Jose, CA",
//       logoBg: "bg-pink-500/10 text-pink-400 border-pink-500/20",
//       letter: "A",
//     },
//   ];

//   // টেস্টমোনিয়াল ডেটা
//   const testimonials = [
//     {
//       name: "Alex Morgan",
//       role: "Product Designer",
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
//       quote:
//         "JobBoard made finding my dream tech job completely effortless. The streamlined process and verified recruiters saved me countless hours.",
//     },
//     {
//       name: "Juliana Smith",
//       role: "Lead Frontend Dev",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
//       quote:
//         "The best career platform I have used so far. Within two weeks of registering, I received three solid offers from top companies.",
//     },
//     {
//       name: "Andrew Smith",
//       role: "UI/UX Consultant",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
//       quote:
//         "The personalized matching system is exceptional. I landed an incredible remote position that aligns perfectly with my skill set.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#07051A] text-slate-100 font-sans selection:bg-purple-600 selection:text-white relative overflow-hidden">
//       {/* গ্লোবাল অ্যাম্বিয়েন্ট গ্লো ইফেক্টস */}
//       <div className="absolute top-[-5%] left-[-10%] w-150 h-150 bg-purple-700/15 rounded-full blur-[160px] pointer-events-none" />
//       <div className="absolute top-[25%] right-[-5%] w-137.5 h-137.5 bg-indigo-700/15 rounded-full blur-[160px] pointer-events-none" />
//       <div className="absolute bottom-[20%] left-[-10%] w-150 h-150 bg-purple-900/15 rounded-full blur-[180px] pointer-events-none" />

//       {/* 1. ন্যাভিগেশন বার */}
//       <nav className="relative z-50 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
//         <Link href="/" className="flex items-center gap-2">
//           <div className="h-9 w-9 rounded-xl bg-linear-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
//             <Briefcase className="h-5 w-5 text-white" />
//           </div>
//           <span className="text-xl font-bold tracking-tight text-white">
//             Job<span className="text-purple-400">Board</span>
//           </span>
//         </Link>

//         {/* ডেস্কটপ মেনু */}
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
//           <Link href="/" className="text-purple-400 font-semibold transition-colors">
//             Home
//           </Link>
//           <Link href="#jobs" className="hover:text-purple-400 transition-colors">
//             Explore Jobs
//           </Link>
//           <Link href="#categories" className="hover:text-purple-400 transition-colors">
//             For Recruiters
//           </Link>
//           <Link href="#pricing" className="hover:text-purple-400 transition-colors">
//             Pricing
//           </Link>
//         </div>

//         {/* অথ অ্যাকশন বাটন */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
//             <Globe className="w-3.5 h-3.5" />
//             <span>EN</span>
//           </button>
//           <Link
//             href="/login"
//             className="text-sm font-medium text-slate-200 hover:text-white px-3 py-1.5 transition-colors"
//           >
//             Sign In
//           </Link>
//           <Link
//             href="/register"
//             className="text-sm font-medium bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-5 py-2 rounded-lg shadow-md shadow-purple-600/30 transition-all"
//           >
//             Sign Up
//           </Link>
//         </div>

//         {/* মোবাইল মেনু টগল */}
//         <button
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           className="md:hidden text-slate-300 focus:outline-none"
//         >
//           {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </nav>

//       {/* মোবাইল ড্রপডাউন মেনু */}
//       {mobileMenuOpen && (
//         <div className="md:hidden border-b border-purple-500/20 bg-[#0F0B29]/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-4 text-sm font-medium relative z-50">
//           <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-purple-400">
//             Home
//           </Link>
//           <Link href="#jobs" onClick={() => setMobileMenuOpen(false)}>
//             Explore Jobs
//           </Link>
//           <Link href="#categories" onClick={() => setMobileMenuOpen(false)}>
//             For Recruiters
//           </Link>
//           <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>
//             Pricing
//           </Link>
//           <div className="pt-3 border-t border-purple-500/20 flex flex-col gap-2.5">
//             <Link
//               href="/login"
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-center py-2 text-slate-300"
//             >
//               Sign In
//             </Link>
//             <Link
//               href="/register"
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-center py-2 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-lg"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       )}

//       {/* 2. হিরো সেকশন */}
//       <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20 lg:pt-20 lg:pb-28">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           {/* টেক্সট ও সার্চ বক্স */}
//           <div className="lg:col-span-7 space-y-6">
//             <span className="inline-block text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
//               Become a part of our big community
//             </span>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
//               Your <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">Dream</span> Job Is
//               <br />
//               Waiting For You
//             </h1>

//             <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
//               Explore thousands of job opportunities from top tech companies, startups, and creative agencies worldwide with automated application tools.
//             </p>

//             {/* সার্চ কার্ড */}
//             <div className="bg-[#120F2E]/90 backdrop-blur-xl border border-purple-500/25 p-2.5 rounded-2xl shadow-xl shadow-purple-950/40 flex flex-col sm:flex-row items-center gap-2 max-w-2xl">
//               <div className="flex items-center gap-2 px-3 py-2 w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r border-purple-500/15">
//                 <Search className="w-4 h-4 text-purple-400 shrink-0" />
//                 <input
//                   type="text"
//                   placeholder="Job title, keywords..."
//                   className="bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none w-full"
//                 />
//               </div>

//               <div className="flex items-center gap-2 px-3 py-2 w-full sm:w-1/2">
//                 <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
//                 <input
//                   type="text"
//                   placeholder="City or location..."
//                   className="bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none w-full"
//                 />
//               </div>

//               <button className="w-full sm:w-auto bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all shrink-0 shadow-md shadow-purple-600/30">
//                 Search
//               </button>
//             </div>

//             {/* পপুলার সার্চ ট্যাগস */}
//             <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-1">
//               <span className="text-slate-500">Popular Searches:</span>
//               {["Designer", "Developer", "Web", "iOS", "Animation"].map((tag) => (
//                 <span
//                   key={tag}
//                   className="bg-[#140F33] hover:bg-purple-900/30 hover:text-purple-300 border border-purple-500/15 px-2.5 py-1 rounded-md cursor-pointer transition-colors"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* হিরো ইমেজ ও ফ্লোটিং ব্যাজ */}
//           <div className="lg:col-span-5 relative flex justify-center items-center">
//             <div className="relative w-full max-w-105 aspect-4/5 rounded-3xl overflow-hidden border border-purple-500/20 bg-lanraro-b from-purple-900/20 to-transparent">
//               <Image
//                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
//                 alt="Professional Job Seeker"
//                 fill
//                 className="object-cover object-top"
//                 priority
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-[#07051A] via-transparent to-transparent" />
//             </div>

//             {/* ফ্লোটিং কোম্পানি ব্যাজ */}
//             <div className="absolute -top-4 left-0 bg-[#120F2E]/90 border border-purple-500/30 backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg animate-bounce duration-1000">
//               <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">
//                 G
//               </div>
//               <span className="text-xs font-semibold text-white">Google Hiring</span>
//             </div>

//             <div className="absolute bottom-8 -right-4 bg-[#120F2E]/90 border border-purple-500/30 backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg">
//               <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
//                 M
//               </div>
//               <span className="text-xs font-semibold text-white">500+ New Vacancies</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. পার্টনার কোম্পানি লোগো বার */}
//       <section className="border-y border-purple-500/15 bg-[#0B0824]/50 py-8 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
//             {["Trustpilot", "Slack", "Forbes", "DigitalOcean", "Grammarly", "Spotify"].map(
//               (brand) => (
//                 <span
//                   key={brand}
//                   className="text-base sm:text-lg font-bold tracking-wider uppercase text-slate-300"
//                 >
//                   {brand}
//                 </span>
//               )
//             )}
//           </div>
//         </div>
//       </section>

//       {/* 4. ফলো ইজি ৪ স্টেপস */}
//       <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
//           <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
//             How It Works
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
//             Follow Easy 4 Steps
//           </h2>
//           <p className="text-slate-400 text-sm">
//             Follow these simple steps to start applying and securing your career goal.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             {
//               icon: Search,
//               title: "Search Jobs",
//               desc: "Find verified jobs tailored to your skills and preferred job location.",
//             },
//             {
//               icon: FileText,
//               title: "Upload CV/Resume",
//               desc: "Showcase your portfolio and experience directly to recruiters.",
//             },
//             {
//               icon: UserCheck,
//               title: "Create Account",
//               desc: "Set up your verified candidate profile in less than two minutes.",
//             },
//             {
//               icon: Smile,
//               title: "Apply Jobs",
//               desc: "One-click application with direct alerts straight to your inbox.",
//             },
//           ].map((step, idx) => (
//             <div
//               key={idx}
//               className="bg-[#120F2E]/70 hover:bg-[#16123D] border border-purple-500/20 hover:border-purple-500/40 p-6 rounded-2xl transition-all duration-300 group shadow-lg"
//             >
//               <div className="w-12 h-12 rounded-xl bg-purple-600/15 group-hover:bg-linear-to-r group-hover:from-purple-600 group-hover:to-indigo-600 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:text-white transition-all mb-4">
//                 <step.icon className="w-6 h-6" />
//               </div>
//               <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
//               <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 5. ট্যালেন্ট স্ট্যাটাস ও প্রমো ব্যানার */}
//       <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
//         <div className="bg-[#120F2E]/80 border border-purple-500/25 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//             <div className="lg:col-span-7 space-y-5">
//               <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
//                 Join With Us
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
//                 Over all 10,000+ Talented People Registered In Our Website
//               </h2>
//               <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
//                 Connect with world-class engineers, designers, and managers actively driving growth at modern startups and Fortune 500 enterprises.
//               </p>
//               <button className="bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-lg shadow-purple-600/25 transition-all">
//                 Explore Talent
//               </button>
//             </div>

//             <div className="lg:col-span-5 relative flex justify-center">
//               <div className="relative w-full max-w-85 aspect-4/5 rounded-2xl overflow-hidden border border-purple-500/20 bg-purple-900/30">
//                 <Image
//                   src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
//                   alt="Talented Candidate"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. চুজ ইউর ডিজায়ার ক্যাটাগরি */}
//       <section id="categories" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
//           <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
//             Categories
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
//             Choose Your Desire Category
//           </h2>
//           <p className="text-slate-400 text-sm">
//             Select a specialized track to explore open positions perfectly aligned with your expertise.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//           {categories.map((cat, idx) => (
//             <div
//               key={idx}
//               className="bg-[#120F2E]/70 hover:bg-[#16123D] border border-purple-500/20 hover:border-purple-500/40 p-5 rounded-2xl transition-all cursor-pointer group text-center flex flex-col justify-center items-center min-h-30"
//             >
//               <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
//                 {cat.title}
//               </h3>
//               <span className="text-xs text-slate-400 mt-1">{cat.count}</span>
//             </div>
//           ))}

//           {/* এক্সপ্লোর মোর ক্যাটাগরি বাটন কার্ড */}
//           <div className="bg-linear-to-r from-purple-600 to-indigo-600 p-5 rounded-2xl transition-all cursor-pointer shadow-lg shadow-purple-600/25 flex flex-col justify-center items-center text-center min-h-30 hover:opacity-95">
//             <h3 className="text-sm sm:text-base font-semibold text-white flex items-center gap-1.5">
//               Explore More
//               <ArrowRight className="w-4 h-4" />
//             </h3>
//             <span className="text-xs text-purple-200 mt-1">20+ Other Fields</span>
//           </div>
//         </div>
//       </section>

//       {/* 7. নিউ জব অফার সেকশন */}
//       <section id="jobs" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
//           <div className="space-y-2">
//             <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
//               Featured Opportunities
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
//               New Job Offer
//             </h2>
//             <p className="text-slate-400 text-sm">
//               Explore recent verified positions posted by global employers.
//             </p>
//           </div>
//           <button className="self-start sm:self-auto text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 border border-purple-500/25 px-4 py-2 rounded-lg bg-[#120F2E] transition-all">
//             View All Jobs
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobOffers.map((job, idx) => (
//             <div
//               key={idx}
//               className="bg-[#120F2E]/80 border border-purple-500/20 hover:border-purple-500/40 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/30 group"
//             >
//               <div>
//                 <div className="flex items-center justify-between mb-4">
//                   <div
//                     className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm ${job.logoBg}`}
//                   >
//                     {job.letter}
//                   </div>
//                   <button className="text-slate-500 hover:text-purple-400 transition-colors">
//                     <Bookmark className="w-4 h-4" />
//                   </button>
//                 </div>

//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="text-xs text-slate-400">{job.company}</span>
//                   <span className="w-1 h-1 rounded-full bg-slate-600" />
//                   <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
//                     {job.type}
//                   </span>
//                 </div>

//                 <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
//                   {job.role}
//                 </h3>
//                 <p className="text-xs text-slate-400 mb-4">{job.location}</p>
//               </div>

//               <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between">
//                 <div>
//                   <span className="text-[10px] text-slate-500 block uppercase font-medium">
//                     Salary
//                   </span>
//                   <span className="text-xs font-semibold text-white">{job.salary}</span>
//                 </div>
//                 <button className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors shadow-sm">
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button className="bg-[#120F2E] hover:bg-[#16123D] border border-purple-500/25 text-purple-300 hover:text-white text-xs font-medium px-8 py-3 rounded-xl transition-all">
//             Load More Jobs
//           </button>
//         </div>
//       </section>

//       {/* 8. টেস্টমোনিয়াল সেকশন */}
//       <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
//           <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
//             Reviews
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
//             What A Job Holder Says About Us
//           </h2>
//           <p className="text-slate-400 text-sm">
//             Read first-hand feedback from candidates who transformed their careers.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-[#120F2E]/70 border border-purple-500/20 p-6 rounded-2xl flex flex-col justify-between relative shadow-lg"
//             >
//               <Quote className="w-8 h-8 text-purple-500/25 mb-4" />
//               <p className="text-xs text-slate-300 leading-relaxed italic mb-6">
//                 "{item.quote}"
//               </p>

//               <div className="flex items-center gap-3 pt-4 border-t border-purple-500/15">
//                 <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-500/30">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-bold text-white">{item.name}</h4>
//                   <span className="text-[11px] text-purple-400">{item.role}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 9. কল টু অ্যাকশন (CTA) ব্যানার */}
//       <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
//         <div className="bg-linear-to-r from-purple-700 via-indigo-700 to-purple-600 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-purple-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="space-y-2 text-center md:text-left">
//             <h2 className="text-2xl sm:text-3xl font-bold text-white">
//               Let's Get Connected And Start Finding Your Dream Job
//             </h2>
//             <p className="text-purple-200 text-xs sm:text-sm max-w-lg">
//               Create your profile today and connect with thousands of active tech recruiters globally.
//             </p>
//           </div>
//           <Link
//             href="/register"
//             className="bg-white hover:bg-slate-100 text-purple-800 font-semibold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all shrink-0"
//           >
//             Join Us Now
//           </Link>
//         </div>
//       </section>

//       {/* 10. ফুটার */}
//       <footer className="border-t border-purple-500/15 bg-[#050314] pt-16 pb-12 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-500/10">
//             {/* কলাম ১: লোগো ও বর্ণনা */}
//             <div className="lg:col-span-2 space-y-4">
//               <Link href="/" className="flex items-center gap-2">
//                 <div className="h-8 w-8 rounded-lg bg-linear-to-tr from-purple-600 to-indigo-500 flex items-center justify-center">
//                   <Briefcase className="h-4 w-4 text-white" />
//                 </div>
//                 <span className="text-lg font-bold tracking-tight text-white">
//                   Job<span className="text-purple-400">Board</span>
//                 </span>
//               </Link>
//               <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
//                 JobBoard connects visionary companies with extraordinary digital talent across software engineering, product design, and creative leadership.
//               </p>
//             </div>

//             {/* কলাম ২: এক্সপ্লোর লিংক */}
//             <div className="space-y-3">
//               <h4 className="text-xs font-bold text-white uppercase tracking-wider">
//                 Explore Jobs
//               </h4>
//               <ul className="space-y-2 text-xs text-slate-400">
//                 <li><Link href="#jobs" className="hover:text-purple-400 transition-colors">Remote Jobs</Link></li>
//                 <li><Link href="#jobs" className="hover:text-purple-400 transition-colors">Full-Time Jobs</Link></li>
//                 <li><Link href="#jobs" className="hover:text-purple-400 transition-colors">Contract Roles</Link></li>
//                 <li><Link href="#jobs" className="hover:text-purple-400 transition-colors">Startup Jobs</Link></li>
//               </ul>
//             </div>

//             {/* কলাম ৩: ক্যাটাগরি লিংক */}
//             <div className="space-y-3">
//               <h4 className="text-xs font-bold text-white uppercase tracking-wider">
//                 Category
//               </h4>
//               <ul className="space-y-2 text-xs text-slate-400">
//                 <li><Link href="#categories" className="hover:text-purple-400 transition-colors">UI/UX Design</Link></li>
//                 <li><Link href="#categories" className="hover:text-purple-400 transition-colors">Development</Link></li>
//                 <li><Link href="#categories" className="hover:text-purple-400 transition-colors">Illustration</Link></li>
//                 <li><Link href="#categories" className="hover:text-purple-400 transition-colors">Animation</Link></li>
//               </ul>
//             </div>

//             {/* কলাম ৪: নিউজলেটার */}
//             <div className="space-y-3">
//               <h4 className="text-xs font-bold text-white uppercase tracking-wider">
//                 Newsletter
//               </h4>
//               <p className="text-xs text-slate-400">
//                 Get weekly updates on verified high-paying jobs.
//               </p>
//               <div className="flex items-center gap-1.5 pt-1">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="bg-[#120F2E] border border-purple-500/25 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none w-full"
//                 />
//                 <button className="bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-lg transition-colors shrink-0">
//                   <Send className="w-3.5 h-3.5" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* কপিরাইট */}
//           <div className="pt-8 text-center text-xs text-slate-500">
//             <p>Copyright © 2026 JobBoard. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }