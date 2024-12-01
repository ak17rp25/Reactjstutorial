import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "../store/authSlice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ user }));
        } else {
          dispatch(logout());
        }
      }).catch(() => {
        console.log("User not logged in");
        dispatch(logout());
      })
      .finally(() => setloading(false));
  });
  console.log(import.meta.env.VITE_APPWRITE_URL);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-300">
        <div className="w-full-block">
          <Header></Header>
          <main className="h-4">
            <div><Outlet/></div>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
