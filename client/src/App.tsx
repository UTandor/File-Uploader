import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/elements/LandingPage";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route element={<LandingPage />} path="/"/>
      </Routes>
    </div>
  );
}

export default App;
