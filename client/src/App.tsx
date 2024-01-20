import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/elements/LandingPage";
import Login from "./components/elements/Login";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </div>
  );
}

export default App;
