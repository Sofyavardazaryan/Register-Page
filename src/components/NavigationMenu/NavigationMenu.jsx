import { NavLink } from "react-router-dom";
import "./navigationMenu.css";

export const NavigationMenu = () => {
  return (
    <nav>
      <NavLink to="/loginpage">Login</NavLink>
      <NavLink to="/registerpage">Register</NavLink>
      <NavLink to="/profilepage">Profile</NavLink>
    </nav>
  );
};
