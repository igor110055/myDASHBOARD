import Container from "../Header/Container";
import Link from "next/link";

export default function Recovery() {
  return (
    <Container>
      <div className="row min-h-fullscreen center-vh p-20 m-0">
        <div className="col-12">
          <div
            className="card card-shadowed px-50 py-30 w-400px mx-auto"
            style={{ maxWidth: "100%" }}
          >
            <h5 className="text-uppercase">Mot de passe oublié</h5>
            <br />

            <form className="form-type-material">
              <div className="form-group">
                <input type="text" className="form-control" id="email" />
                <label forhtml="email">Email</label>
              </div>

              <br />
              <button className="btn btn-bold btn-block btn-primary" type="submit">
                Réinitialiser
              </button>
            </form>
          </div>
        </div>
        <p className="text-center text-muted fs-13 mt-20">
            Déja un compte ? {" "}
            <Link href="/login">
            <a className="text-primary fw-500" >
              S'authentifier
            </a>
            </Link>
          </p>
      </div>
    </Container>
  );
}
