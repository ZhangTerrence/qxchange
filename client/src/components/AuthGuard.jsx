import { withAuthenticationRequired } from "@auth0/auth0-react";

// eslint-disable-next-line react/prop-types
export const AuthGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Redirecting...</div>,
  });

  return <Component />;
};
