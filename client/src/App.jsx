import { Route, Routes } from "react-router-dom";
import { AuthGuard } from "./components/AuthGuard";
import {Dashboard} from "./pages/Dashboard.jsx"
import {Landing} from "./pages/Landing.jsx"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<AuthGuard component={Dashboard} />} />
    </Routes>
  );
};
