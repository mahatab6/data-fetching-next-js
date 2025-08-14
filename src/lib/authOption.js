import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { dbConnect, collectionName } from "@/lib/dbConnect";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const { db } = await dbConnect();
        const user = await db
          .collection(collectionName.NewUser)
          .findOne({ email });

        if (!user) return null;
        if (password !== user.password) return null; 

        return {
          id: user._id.toString(),
          email: user.email,
          role: user.role || "user",
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

