"use client";
import { SessionProvider } from "next-auth/react";

export default function AuthProviders({ children }:any) {
    return <SessionProvider>{children}</SessionProvider>;
}