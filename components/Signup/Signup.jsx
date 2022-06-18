import Container from "../Header/Container";
import Link from "next/link";


export default function Signup() {
  return (
    <Container>
      <div className="row min-h-fullscreen center-vh p-20 m-0">
        <div className="col-12">
          <div
            className="card card-shadowed px-50 py-30 w-400px mx-auto"
            style={{ maxWidth: "100%" }}
          >
            <h5 className="text-uppercase">Créer un nouveau compte</h5>
            <br />

            <form className="form-type-material">
              <div className="form-group">
                <input type="text" className="form-control" id="username" />
                <label htmlFor="username">Nom</label>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" id="email" />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-group">
                <input type="password" className="form-control" id="password" />
                <label htmlFor="password">Mot de passe</label>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password-conf"
                />
                <label htmlFor="password-conf">Mot de passe (confirmation)</label>
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">
                    I agree to all{" "}
                    <a className="text-primary" href="#">
                      terms
                    </a>
                  </label>
                </div>
              </div>

              <br />
              <button
                className="btn btn-bold btn-block btn-primary"
                type="submit"
              >
                Créer
              </button>
            </form>
          </div>
          <p className="text-center text-muted fs-13 mt-20">
            Déja un compte ?
            <Link href="/login">
            <a className="text-primary fw-500" >
              S'authentifier
            </a>
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
