import OtpLogin from "@/components/OtpLogin";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 items-center gap-y-10 p-24">
            <h2 className="text-4xl text-white font-bold ">Login Through Mobile</h2>
            <OtpLogin/>
    </main>
  );
}
