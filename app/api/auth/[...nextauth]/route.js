import connect from '@/lib/db';
import User from '@/models/User';
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google"

connect();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("User not found"); // Provide a meaningful error message
          }

          if (!user.isVerified) {
            throw new Error("Account not verified"); // Provide a meaningful error message
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            throw new Error("Incorrect password"); // Provide a meaningful error message
          }

          return user;
        } catch (error) {
          throw new Error(error.message); // Pass the error message to the front-end
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],


  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        await connect();
  
        const existingUser = await User.findOne({ email: profile.email });
  
        if (!existingUser) {
          // Create a user in the database based on Google profile
          await User.create({
            email: profile.email,
            name: profile.name.replace(" ", "").toLowerCase(),
            isVerified: true
            // You can add more properties here as needed
          });
        }
      }
      return true; // Continue with sign-in process
    },
    
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('tyty')
      if (token  && profile) {         
        const existingUser = await User.findOne({ email: profile.email });
        if (existingUser.isVerified === true) {
          return {...token, isVerified: existingUser.isVerified}
        } else {
          return token
        }
      } else {
        return token    
      }
    },


    async session({ session, user, token }) {
      console.log( token)
      return {
        ...session,
        user: {
          ...session.user,
        isVerified: token.isVerified
      }}
    },



  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };