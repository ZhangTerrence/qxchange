import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Landing } from "./pages/Landing.jsx";
import { CallBackPage } from "./pages/CallBackPage.jsx";
import { useAuth0 } from "@auth0/auth0-react"
import PageLoader from "./components/PageLoader.jsx"


export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/callback" element={<CallBackPage />} />
    </Routes>
  );
};
