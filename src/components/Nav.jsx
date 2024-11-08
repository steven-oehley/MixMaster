import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="navbar bg-secondary text-base-100">
      <div className="max-w-7xl mx-auto">
        <nav className="navbar-start bg-secondary">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-secondary"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/newsletter">Newsletter</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl">
            Mix Master
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Nav;
