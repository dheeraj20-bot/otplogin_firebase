import OtpLogin from "@/components/OtpLogin";
import {  LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 items-center gap-y-10 p-24">
       <h1 className="text-4xl text-white font-bold">Login with Firebase PhoneNumber Authenication 🔥🔥</h1>
       <Link href="/login" className="text-white flex gap-3">
       <p>Login</p>
       <LogInIcon/>
       </Link>
      
    </main>
  );
}
