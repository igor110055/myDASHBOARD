import Container from "../Header/Container";

export default function Signin() {
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

            <form className="form-type-material">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                />
                <label htmlFor="password">Mot de passe</label>
              </div>

              <div className="form-group flexbox flex-column flex-md-row">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">
                    Rester connecté
                  </label>
                </div>

                <a
                  className="text-muted hover-primary fs-13 mt-2 mt-md-0"
                  href="#"
                >
                  Mot de passe oublié ?
                </a>
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
        </div>
      </div>
    </Container>
  );
}
