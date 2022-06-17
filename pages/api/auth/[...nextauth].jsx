import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "DEAVELY",
      authorize: (credentials) => {
        if (true) {
          console.log("credentials ==>", credentials);
          return {
            id: 2,
            name: "dea",
          };
        } else {
          console.log("credentials ==>", credentials);
          return null;
        }
      },
    }),
  ],
//   pages: {
//     signIn: "/login",
//   },
});
