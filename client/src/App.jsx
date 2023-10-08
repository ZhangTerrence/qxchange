import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Landing } from "./pages/Landing.jsx";
import {CallBackPage} from "./pages/CallBackPage.jsx"
import {AuthenticationGuard} from "./components/AuthGuard.jsx"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={<AuthenticationGuard component={Dashboard} />}
        />
        <Route path ="/callback" element= {<CallBackPage />} />
    </Routes>
  );
};
