import { useRouter } from "next/router";
import { useSession } from "next-auth/react";


export default function () {
    const router = useRouter();
    const { status } = useSession();
    if (router.pathname="/recovery" && status=="authenticated" ) {
        router.replace("/");
    }
  return (
    <>
      {status == "authenticated" && (
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
    </>
  );
}
