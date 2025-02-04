import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { Home } from "./pages/home/Home";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { PostDetails } from "./pages/postdetails/PostDetails";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="app m-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index  element={<Home />} />
            <Route path="/home"  element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/postdetails/:id" element={<PostDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
