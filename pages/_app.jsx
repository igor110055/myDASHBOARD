import "../styles/globals.css";
import "../public/assets/css/core.min.css";
import "../public/assets/css/app.min.css";

import { SessionProvider } from "next-auth/react";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
