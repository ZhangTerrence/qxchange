import { withAuthenticationRequired } from "@auth0/auth0-react";

export const AuthGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Redirecting...</div>,
  });

  return <Component />;
};