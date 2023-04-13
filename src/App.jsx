import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Caja from "./Pages/Caja";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AdminRoute from "./Components/AuthRoute";
import Cajero from "./Components/Cajero";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<AdminRoute />}>
            <Route path="/cajero" element={<Caja />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
