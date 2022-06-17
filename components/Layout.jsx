import Head from "next/head";
import Sidebar from "./Header/Sidebar";
import Topbar from "./Header/Topbar";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="dashboard "
        />

        <title>Dashboard</title>
      </Head>
      {/* <!-- Preloader --> */}

      {/* <!-- Sidebar --> */}

      <Sidebar/>
      {/* <!-- END Sidebar --> */}

      {/* <!-- Topbar --> */}
      <Topbar/>
      {/* <!-- END Topbar --> */}
      {/* <!-- Main container --> */}
      <main className="main-container">
        <div className="main-content">
            {children}
        </div>
      </main>
      {/* <!--/.main-content --> */}

      {/* <!-- Scripts --> */}
      <script src="/assets/js/core.min.js"></script>
      <script src="/assets/js/app.min.js"></script>
      <script src="/assets/js/script.min.js"></script>
    </>
  );
}
