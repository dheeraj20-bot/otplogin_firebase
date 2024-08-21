'use client'
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import {  LogInIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { user } = useAuth();
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 items-center gap-y-10 p-24">
       <h1 className="text-4xl text-white font-bold mb-5">Login with Firebase PhoneNumber Authenication 🔥🔥</h1>
       {user?(
         <h2>Welcome to the App as a logged in as user {user.uid}</h2>
       ):(
        <h2>
           You are not logged in
        </h2>
       )}

      {user ? (
        <Button onClick={() => signOut(auth)} className="mt-10">
          Sign out
        </Button>
      ) : (
        <Link href="/login">
          <Button className="mt-10">Sign In</Button>
        </Link>
      )}

       <Link href="/login" className="text-white flex gap-3">
       <p>Login</p>
       <LogInIcon/>
       </Link>
    </main>
  );
}
