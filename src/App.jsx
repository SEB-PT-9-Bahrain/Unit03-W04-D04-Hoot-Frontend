import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/SigninPage";
import Dashboard from "./pages/Dashboard";
import { logout } from "./services/authService";

import CreateHoot from "./pages/hoots/CreateHoot";
import AllHoots from "./pages/hoots/AllHoots";
import HootDetails from "./pages/hoots/HootDetails";
import EditHoot from "./pages/hoots/EditHoot";


function App() {
  function  getUserFromToken (){
    const token = localStorage.getItem("token");

    if (!token) return null;

    return JSON.parse(atob(token.split(".")[1]));
  };


  const [user, setUser] = useState(getUserFromToken());

  function handleLogout() {
    logout();
    setUser(null);
  }

  return (
    <div>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/sign-in" element={<SignInPage setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/sign-in" />}
        />

        <Route path="/hoots" element={ user ? <AllHoots/> : <Navigate to="/sign-in" />} />
        <Route path="/hoots/create" element={ user ? <CreateHoot/> : <Navigate to="/sign-in" />} />
        <Route path="/hoots/:hootId" element={ user ? <HootDetails/> : <Navigate to="/sign-in" />} />
        <Route path="/hoots/:hootId/edit" element={user ? <EditHoot/> : <Navigate to="/sign-in" />} />
      </Routes>
    </div>
  );
}

export default App;
