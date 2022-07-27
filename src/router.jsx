import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import StayPage from "./pages/Stay";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stay/:stayId" element={<StayPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRouter;
