import '../css/Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

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
        <button className="login-button" onClick={handleLogin}>Login</button>
    )
}

