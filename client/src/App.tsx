import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/elements/LandingPage";
import Login from "./components/elements/Login";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<Login />} path="/login" />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
