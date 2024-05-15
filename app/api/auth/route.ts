import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: "ikaniuu123",
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as { email: string, password: string };
                const user:any = {
                    id: 1,
                    name: "Oktayudha",
                    email: "oktayudha05@gmail.com",
                    password: "ik",
                    role: "admin",
                }
                if (email === "oktayudha05@gmail.com" && password === "ikaniu") {
                    return user;
                } else {
                    return null;
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user }:any) {
            if (account?.provider === "Credentials") {
                token.id = account.id;
                token.name = account.name;
                token.email = account.email;
                token.role = account.role;
            }
            return token;
        },
        async session({ session, token }:any) {
            if ("email" in token) {
                session.user.email = token.email;
            } 
            if ("role" in token) {
                session.user.role = token.role;
            }
            if ("name" in token) {
                session.user.name = token.name;
            }
            return session;
        },
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}