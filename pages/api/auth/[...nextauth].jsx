import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "DEAVELY",
      authorize: async (credentials) => {
        console.log("credentials ==>", credentials);
        const email = credentials.email;
        const password = credentials.password;
        const result = await axios.post("/api/service/login", {
          email,
          password,
        });
        // try {
        //     if (!result.data.isValide) {
        //         return null;
        //     }

        //     return result.data;
        // } catch (error) {
        //     console.log("error ===> ",error)
        //     return null;
        // }
        if (result.data.isValide) {
          return result.data;
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
