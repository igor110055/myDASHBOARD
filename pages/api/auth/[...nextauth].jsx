import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "DEAVELY",
      authorize: (credentials) => {
        console.log("credentials ==>", credentials);
        if (credentials.isValide) {
          return {...credentials.data};
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
