import { NavLink } from "react-router-dom";
import { navLinks } from "../../../utils/navlinks";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((navlink, index) => (
              <li key={index}>
                <NavLink
                  to={navlink.path}
                  className={({ isActive }) =>
                    `px-4 ${isActive ? "text-blue-500 font-bold" : ""}`
                  }
                >
                  {navlink.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center navbar-center">
          <img
            className="size-7"
            src="https://images-platform.99static.com//vFvjSm3mga9ipAb1LzeGHVuV53g=/350x5107:1144x5901/fit-in/500x500/99designs-contests-attachments/141/141288/attachment_141288609"
            alt=""
          />
          <a className="text-xl font-bold ml-2">Mechanical Keyboard</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((navlink, index) => (
            <li key={index}>
              <NavLink
                to={navlink.path}
                className={({ isActive }) =>
                  `px-4 ${
                    isActive
                      ? "text-blue-500 font-bold !bg-transparent"
                      : "text-gray-700"
                  } hover:text-blue-500 hover:bg-transparent`
                }
              >
                {navlink.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
