import "../styles/globals.css";
import "../public/assets/css/core.min.css";
import "../public/assets/css/app.min.css";



import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
