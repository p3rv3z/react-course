import { NavLink, Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "red",
                  }
                : null;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about"
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "red",
                }
              : null;
          }}
          >About</NavLink>
        </li>
        <li>
          <NavLink to="/auth/signin"
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "red",
                }
              : null;
          }}
          >Signin</NavLink>
        </li>
        <li>
          <NavLink to="/auth/signup"
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "red",
                }
              : null;
          }}
          >Signup</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AppLayout;
