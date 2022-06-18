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
          <li class="dropdown">
            <span class="topbar-btn" data-toggle="dropdown">
              <img class="avatar" src="/assets/img/avatar/1.jpg" alt="..." />
            </span>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="">
                <i class="ti-user"></i> Profil
              </a>

              <a class="dropdown-item" href="#">
                <i class="ti-settings"></i> Paramètres
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" onClick={(e) => logout(e)}>
                <i class="ti-power-off"></i> Déconnexion
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
