import { useEffect } from "react";
import { LogoutButton } from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export const Dashboard = () => {
  const { user } = useAuth0();

  useEffect(() => {
    async function fetchApi() {
      console.log(user.username);
    }
    fetchApi();
  }, [user]);

  return (
    <div>
      <h1>DASHBAORD PAGE</h1>
      <LogoutButton />
    </div>
  );
};
