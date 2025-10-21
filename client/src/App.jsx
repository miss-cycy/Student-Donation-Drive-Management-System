import { BrowserRouter, Routes, Route } from "react-router-dom"; // pang multipage siya nga library
import LandingPage from "./Components/LandingPage";
import DonorDashboard from "./Components/DonorDashboard";
import DonorLogin from "./Components/DonorLogin";
import AdminLogin from "./Components/AdminLogin";
import DonorRegistration from "./Components/Donor_Registration";
import SuperAdminLogin from "./Components/SuperAdminLogin";
import AdminDashboard from "./Components/AdminDashboard";
import LOGINADMIN from "./Components/LOGINADMIN";

// Function App nga gahandle sa routing sa mga components
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/login-admin" element={<AdminLogin />} />
        <Route path="/donor-registration" element={<DonorRegistration />} />
        <Route path="/superadmin-login" element={<SuperAdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/loginadmin" element={<LOGINADMIN />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
