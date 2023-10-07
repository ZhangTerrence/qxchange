import { useAuth0 } from "@auth0/auth0-react";
import "../css/Navbar.css";
import { AuthButton } from "./AuthButton";
import { LogoutButton } from "./LogoutButton";

export const Navbar = () => {
  const { user } = useAuth0();

  return (
    <div className="navbar">
      <div className="nav-elems">(forum name)</div>

      {user ? <LogoutButton /> : null}
      {user ? <div className="nav-elems">Your Name</div> : <AuthButton />}
    </div>
  );
};
