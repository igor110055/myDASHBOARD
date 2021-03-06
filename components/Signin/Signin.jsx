import Container from "../Header/Container";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const body = {
    email,
    password,
  };
  // {
  //   email: "administrateur@domaine.com",
  //   password: "adm1n1str@t3ur",
  // }
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("/api/service/login", body)
      .then((res) => {
        console.log("data =>", res.data);
        if (!res.data.isValide) {
          throw "Error";
        }
        signIn("credentials", { isValide: true, data: res.data });
      })
      .catch((err) => {
        app.toast("Email ou Mot de passe Invalide !");
      });
  };

  return (
    <Container>
      <div className="row min-h-fullscreen center-vh p-20 m-0">
        <div className="col-12">
          <div
            className="card card-shadowed px-50 py-30 w-400px mx-auto"
            style={{ maxWidth: "100%" }}
          >
            <h5 className="text-uppercase">Authentification</h5>
            <br />

            <form className="form-type-material" onSubmit={(e) => submit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Mot de passe</label>
              </div>

              <div className="form-group flexbox flex-column flex-md-row">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">
                    Rester connect??
                  </label>
                </div>

                <Link href="/recovery">
                  <a className="text-muted hover-primary fs-13 mt-2 mt-md-0">
                    Mot de passe oubli?? ?
                  </a>
                </Link>
              </div>

              <div className="form-group">
                <button
                  className="btn btn-bold btn-block btn-primary"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
          <p className="text-center text-muted fs-13 mt-20">
            Pas de compte ? {" "}
            <Link href="/signup">
              <a className="text-primary fw-500">Cr??er un compte</a>
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
