import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { Home } from "./pages/home/Home";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { PostDetails } from "./pages/postdetails/PostDetails";
import { Layout } from "./components/Layout";
import NotFound from "./pages/404/NotFound";
import PrivateRoute from "./services/ProtectedRoute";

function App() {
  return (
    <div className="app m-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
            <Route index  element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/home"  element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/postdetails/:id/:edit" element={<PrivateRoute><PostDetails /></PrivateRoute>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
