
export default function Sidebar() {
  return (
    <aside className="sidebar sidebar-icons-right sidebar-icons-boxed sidebar-expand-lg">
      <header className="sidebar-header">
        <a className="logo-icon" href="#">
          <img src="assets/img/logo-icon-light.png" alt="logo icon" />
        </a>
        <span className="logo">
          <a href="#">
            <img src="/assets/img/logo-light.png" alt="logo" />
          </a>
        </span>
        <span className="sidebar-toggle-fold"></span>
      </header>

      <nav className="sidebar-navigation">
        <ul className="menu">
          <li className="menu-category">Category 1</li>

          <li className="menu-item active">
            <a className="menu-link" href="../dashboard/general.html">
              <span className="icon fa fa-home"></span>
              <span className="title">Dashboard</span>
            </a>
          </li>

          <li className="menu-item">
            <a className="menu-link" href="#">
              <span className="icon fa fa-user"></span>
              <span className="title">Users</span>
              <span className="arrow"></span>
            </a>

            <ul className="menu-submenu">
              <li className="menu-item">
                <a className="menu-link" href="#">
                  <span className="dot"></span>
                  <span className="title">Moderators</span>
                </a>
              </li>

              <li className="menu-item">
                <a className="menu-link" href="#">
                  <span className="dot"></span>
                  <span className="title">Customers</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">Category 2</li>

          <li className="menu-item">
            <a className="menu-link" href="#">
              <span className="icon ti-layout"></span>
              <span className="title">Layout</span>
              <span className="arrow"></span>
            </a>

            <ul className="menu-submenu">
              <li className="menu-item">
                <a className="menu-link" href="#">
                  <span className="dot"></span>
                  <span className="title">Sidebar</span>
                </a>
              </li>

              <li className="menu-item">
                <a className="menu-link" href="#">
                  <span className="dot"></span>
                  <span className="title">Header</span>
                </a>
              </li>

              <li className="menu-item">
                <a className="menu-link" href="#">
                  <span className="dot"></span>
                  <span className="title">Footer</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
