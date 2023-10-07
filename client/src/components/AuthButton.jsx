import { useAuth0 } from "@auth0/auth0-react";

export const AuthButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handeLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  return <button onClick={handeLogin}>Log In</button>;
};
