import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./pages/home/index";
import { Bikes } from "./pages/bikes/index";
import { Contact } from "./pages/contact/index";
import { Bike } from "./pages/bike/index";
import { Login } from "./pages/login/index";
import { Signup } from "./pages/signup/index";
import { Admin } from "./pages/admin";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bike/:id" element={<Bike />} />
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
