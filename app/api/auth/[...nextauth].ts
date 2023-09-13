import NextAuth, { AuthOptions, Awaitable, RequestInternal, User } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// import client from "@/lib/prismadb";


// import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions:AuthOptions = {
  // Configure one or more authentication providers
  // adapter:PrismaAdapter(client),
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
      }
      // authorize: async function (credentials: Record<"email" | "password", string> | undefined, req: Pick<RequestInternal, "headers" | "body" | "query" | "method">): Awaitable<User | null> {
        
      // }
    }
    })
  ],
}

export default NextAuth(authOptions)