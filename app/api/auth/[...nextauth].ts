import NextAuth, { AuthOptions, Awaitable, RequestInternal, User } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import prisma from "@/lib/prismadb";


import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions:AuthOptions = {
  // Configure one or more authentication providers
  adapter:PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID as string,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
        },
        password: {
          label: 'password',
          type: 'password',
        }
      },
      async authorize(credentials){
        if(!credentials?.email || !credentials?.password){
          throw new Error('Invalid Credentials');
        }

        const user =await prisma.user.findUnique({
          where:{
            email:credentials.email
          }
        })

        if(!user || !user?.hashedPassword){
          throw new Error('Invalid Credentials');
        }

        // check password match

        const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

        if(!isCorrectPassword){
          throw new Error('Invalid Credentials');
        }

        return user;
      }
    })
  ],
  pages:{
    signIn:'/auth/login',
    signOut:''
  },
  debug:process.env.NODE_ENV==='development',
  session:{
    strategy:"jwt"
  }, 
  secret:process.env.NEXTAUTH_SCRET
}

export default NextAuth(authOptions)