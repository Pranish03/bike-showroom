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
import { ManageBikes } from "./pages/manage-bikes";
import { AddBike } from "./pages/manage-bikes/add-bike";
import { EditBike } from "./pages/manage-bikes/edit-bike";
import { Toaster } from "react-hot-toast";
import { NotFound } from "./pages/not-found";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { GuestRoutes } from "./components/GuestRoutes";
import { AuthProvider } from "./context/auth/AuthProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="*" element={<NotFound />} />
              <Route index element={<Home />} />
              <Route path="/bikes" element={<Bikes />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bike/:id" element={<Bike />} />

              <Route element={<ProtectedRoutes requireAdmin="true" />}>
                <Route path="/manage-bikes" element={<ManageBikes />} />
                <Route path="/add-bike" element={<AddBike />} />
                <Route path="/edit-bike/:id" element={<EditBike />} />
              </Route>
            </Route>

            <Route element={<GuestRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
