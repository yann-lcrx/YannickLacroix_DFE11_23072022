import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import StayPage from "./pages/Stay";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stay" element={<StayPage />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default AppRouter;
