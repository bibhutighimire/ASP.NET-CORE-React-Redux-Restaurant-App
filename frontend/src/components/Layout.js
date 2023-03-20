import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/readmenus">Read Menus</Link>
          </li>
          <li>
            <Link to="/createmenu">Create Menu</Link>
          </li>
          <li>
            <Link to="/salespage">Restaurant Sales Page</Link>
          </li>

          <li>
            <Link to="/readorders" onClick={() => {window.location.href="/readorders"}}> ORDERS Page</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;