import "../css/Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthButton = () => {
  const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
      await loginWithRedirect({
        appState: {
          returnTo: "/",
        },
      });
    };

    return (
        <button className="login-button" onClick={handleLogin}>Log in</button>
    )
}
