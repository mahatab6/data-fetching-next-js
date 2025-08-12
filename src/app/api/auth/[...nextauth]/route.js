import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({

    providers: [

        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
            password: { label: "Password", type: "password" },
            email: { label:"Email", type: "email" }
            },
            async authorize(credentials, req) {
               
                console.log(credentials)
           const { password, email } = credentials;


           const { db } = await dbConnect();
           const user = await db.collection("NewUsers").findOne({email})
           console.log(user)
           const isPasswordOk = password === user.password;



            // If no error and we have user data, return it
            if (isPasswordOk) {
                return user
            }
            // Return null if user data could not be retrieved
            return null
            }
        })

    ],
    callbacks:{
        async session({ session, token, user }) {
        return session
        },
        async redirect({ url, baseUrl }) {
        return baseUrl
        },
        async jwt({ token, user, account, profile, isNewUser }) {
        return token
        }
    }
})

export { handler as GET, handler as POST }