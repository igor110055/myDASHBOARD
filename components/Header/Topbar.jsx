import { signOut } from "next-auth/react";

export default function Topbar() {
  const logout = (e) => {
    e.preventDefault();
    signOut({callbackUrl: "/login"});
  };
  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="topbar-btn sidebar-toggler">
          <i>&#9776;</i>
        </span>
      </div>

      <div className="topbar-right">
        <ul className="topbar-btns">
          <li className="dropdown">
            <span className="topbar-btn" data-toggle="dropdown">
              <img className="avatar" src="/assets/img/avatar/1.jpg" alt="..." />
            </span>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="">
                <i className="ti-user"></i> Profil
              </a>

              <a className="dropdown-item" href="#">
                <i className="ti-settings"></i> Paramètres
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={(e) => logout(e)}>
                <i className="ti-power-off"></i> Déconnexion
              </a>
            </div>
          </li>
          {/* <!-- Notifications --> */}
          
          {/* <!-- END Notifications --> */}
        </ul>
      </div>
    </header>
  );
}
