import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
