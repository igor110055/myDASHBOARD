
export default function Sidebar() {
  return (
    <aside className="sidebar sidebar-icons-right sidebar-icons-boxed sidebar-expand-lg">
      <header className="sidebar-header">
        <a className="logo-icon" href="#">
          <img src="/assets/img/logo-icon-light.png" alt="logo icon" />
        </a>
        <span className="logo">
          <a href="#">
            <img src="/assets/img5/logo-light.png" alt="[Logo ici]" />
          </a>
        </span>
        <span className="sidebar-toggle-fold"></span>
      </header>

      <nav className="sidebar-navigation">
        <ul className="menu">
          <li className="menu-category">Categorie 1</li>

          <li className="menu-item active">
            <a className="menu-link" href="">
              <span className="icon fa fa-home"></span>
              <span className="title">Dashboard</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
