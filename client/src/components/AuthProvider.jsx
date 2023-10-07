import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const authDomain = import.meta.env.VITE_AUTH0_DOMAIN;
  const authClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const authAudience = import.meta.env.VITE_AUTH0_AUDIENCE;
  const authRedirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState) => {
    navigate(appState.returnTo || window.location.pathname);
  };

  if (!(authDomain && authClientId && authRedirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={authDomain}
      clientId={authClientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: authAudience,
      }}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  );
};