import { useRouter } from "next/router";
import { useEffect } from "react";

import { useSession } from "next-auth/react";
import Signin from "../components/Signin/Signin";


export default function Login() {
    const router = useRouter();
    const { status } = useSession();
    if (router.pathname="/login" && status=="authenticated" ) {
        router.replace("/");
    }
    
  return (
    <>
    {status=="authenticated" && (
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
  )
}
