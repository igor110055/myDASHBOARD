import Head from "next/head";
import Container from "./Header/Container";
import Sidebar from "./Header/Sidebar";
import Topbar from "./Header/Topbar";
import Signin from "./Signin/Signin";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="dashboard " />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,300i"
          rel="stylesheet"
        />
        <title>Dashboard</title>
      </Head>
      {/* <!-- Preloader --> */}

      {/* <!-- Sidebar --> */}

      <Sidebar />
      {/* <!-- END Sidebar --> */}

      {/* <!-- Topbar --> */}
      <Topbar />
      {/* <!-- END Topbar --> */}
      {/* <!-- Main container --> */}
      <Signin />
      {/* <!--/.main-content --> */}

      {/* <!-- Scripts --> */}
      <script src="/assets/js/core.min.js"></script>
      <script src="/assets/js/app.min.js"></script>
      <script src="/assets/js/script.min.js"></script>
    </>
  );
}
