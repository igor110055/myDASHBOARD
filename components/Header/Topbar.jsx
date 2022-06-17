
export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="topbar-btn sidebar-toggler">
          <i>&#9776;</i>
        </span>
      </div>

      <div className="topbar-right">
        <ul className="topbar-btns">
          {/* <!-- Notifications --> */}
          <li className="dropdown d-none d-md-block">
            <span className="topbar-btn has-new" data-toggle="dropdown">
              <i className="ti-bell"></i>
            </span>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="media-list media-list-hover media-list-divided media-list-xs">
                <a className="media media-new" href="#">
                  <span className="avatar bg-success">
                    <i className="ti-user"></i>
                  </span>
                  <div className="media-body">
                    <p>New user registered</p>
                    <time dateTime="2018-07-14 20:00">Just now</time>
                  </div>
                </a>

                <a className="media" href="#">
                  <span className="avatar bg-info">
                    <i className="ti-shopping-cart"></i>
                  </span>
                  <div className="media-body">
                    <p>New order received</p>
                    <time dateTime="2018-07-14 20:00">2 min ago</time>
                  </div>
                </a>

                <a className="media" href="#">
                  <span className="avatar bg-warning">
                    <i className="ti-face-sad"></i>
                  </span>
                  <div className="media-body">
                    <p>
                      Refund request from <b>Ashlyn Culotta</b>
                    </p>
                    <time dateTime="2018-07-14 20:00">24 min ago</time>
                  </div>
                </a>

                <a className="media" href="#">
                  <span className="avatar bg-primary">
                    <i className="ti-money"></i>
                  </span>
                  <div className="media-body">
                    <p>New payment has made through PayPal</p>
                    <time dateTime="2018-07-14 20:00">53 min ago</time>
                  </div>
                </a>
              </div>

              <div className="dropdown-footer">
                <div className="left">
                  <a href="#">Read all notifications</a>
                </div>

                <div className="right">
                  <a href="#" data-provide="tooltip" title="Mark all as read">
                    <i className="fa fa-circle-o"></i>
                  </a>
                  <a href="#" data-provide="tooltip" title="Update">
                    <i className="fa fa-repeat"></i>
                  </a>
                  <a href="#" data-provide="tooltip" title="Settings">
                    <i className="fa fa-gear"></i>
                  </a>
                </div>
              </div>
            </div>
          </li>
          {/* <!-- END Notifications --> */}
        </ul>

        
      </div>
    </header>
  )
}
