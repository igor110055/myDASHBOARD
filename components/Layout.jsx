import Head from "next/head";
import Container from "./Header/Container";
import Sidebar from "./Header/Sidebar";
import Topbar from "./Header/Topbar";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { status } = useSession();
  const router = useRouter();
  const url = router.pathname;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="dashboard " />
        <title>Dashboard</title>
      </Head>
      {/* <!-- Preloader --> */}
      {status == "loading" && (
        <>
          <div className="preloader">
            <div className="spinner-dots">
              <span className="dot1"></span>
              <span className="dot2"></span>
              <span className="dot3"></span>
            </div>
          </div>
        </>
      )}
      {status == "authenticated" && (
        <>
          <Sidebar />
          {/* <!-- END Sidebar --> */}

          {/* <!-- Topbar --> */}
          <Topbar />
          {/* <!-- END Topbar --> */}
          {/* <!-- Main container --> */}
          <Container>{children}</Container>
          {/* <!--/.main-content --> */}
        </>
      )}
      {status == "unauthenticated" && (
        <>
          {(() => {
            switch (url) {
              case "/signup":
                return <Signup />;
              default:
                return <Signin />;
            }
          })()}
        </>
      )}

      {/* <!-- Scripts --> */}
      <script src="/assets/js/core.min.js"></script>
      <script src="/assets/js/app.min.js"></script>
      <script src="/assets/js/script.min.js"></script>
    </>
  );
}
