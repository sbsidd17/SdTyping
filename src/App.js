import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import English from "./pages/English";
import Hindi from "./pages/Hindi";
import Home from "./pages/Home";
import Result from "./pages/Result";
import TypingTest from "./pages/TypingTest";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <> 
      <Toaster />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn}/>}>
          <Route path="/hindi" element={<Hindi />} />
          <Route path="/english" element={<English />} />
          <Route path="/typing-test" element={<TypingTest />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/result" element={<Result />} />
        </Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
      </Routes> 
    </>
  );
}

export default App;
