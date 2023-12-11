import React from "react";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Location from "./component/Location";
import Form from "./component/Form";
import Admin from "./component/Admin";
import User from "./component/User";
import Recipe from "./component/Recipe";
import Cart from "./component/Cart";
import Allfood from "./component/Allfood";
import Profile from "./component/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/location" element={<Location />} />
          <Route path="/form" element={<Form />} />
          <Route path="/user" element={<User />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/allfood/" element={<Allfood />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
