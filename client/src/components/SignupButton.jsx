
import "../css/Navbar.css"
import { useAuth0 } from "@auth0/auth0-react";

export const SignupButton = ({ buttonName }) => {
  const { loginWithRedirect } = useAuth0();


    const handleSignUp = async () => {
        await loginWithRedirect({
          appState: {
            returnTo: "/",
          },
          authorizationParams: {
            screen_hint: "signup",
          },
        });
      };
  
    
    return (
        <button className="signup-button" onClick={handleSignUp}>Sign up</button>
    )
}

