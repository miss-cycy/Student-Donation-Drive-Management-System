import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha"; // reCAPTCHA import

const DonorLogin = () => {
  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState(null); // state for reCAPTCHA
  const [activeTab, setActiveTab] = useState("donor"); // state for active tab

  // Function when reCAPTCHA is completed
  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  // Function that talks to backend and handles login
  const handleDonorDashboard = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot before logging in!");
      return;
    }

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:5000/api/donor/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);
        navigate("/donor-dashboard");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error. Please try again later.");
    }
  };

  // Navigate to Admin login
  const handleAdminLogin = () => {
    navigate("/login-admin");
  };

  return (
    <div className="p-0 m-0 h-screen bg-gray-300" id="BODY">
      {/* HEADER */}
      <header className="bg-indigo-950 text-white flex justify-between items-center px-10 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/logo_white.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">SDDMS</h1>
        </div>

        <nav className="flex gap-8 text-lg font-semibold">
          <a href="#" className="hover:text-indigo-300">
            ABOUT US
          </a>
          <a href="#" className="hover:text-indigo-300">
            CONTACT
          </a>
        </nav>
      </header>

      {/* CONTENT */}
      <div
        className="relative border-2 lg:h-screen p-2 flex items-center justify-center lg:w-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/BUKSU.jpg')" }}
        id="CONTENT-REGISTER-MAIN"
      >
        {/* 🔹 Indigo overlay */}
        <div className="absolute inset-0 bg-indigo-950/55"></div>

        {/* 🔹 Login box */}
        <div className="relative bg-white rounded-xl shadow-lg p-8 max-w-md lg:w-120 w-full z-10">
          <img src="/logo_blue.png" alt="logo" className="size-10" />

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome Back
            </h2>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          {/* ACCOUNT TYPE BUTTONS */}
          <div className="mt-6 flex justify-center items-center gap-3">
            <button
              onClick={() => setActiveTab("donor")}
              className={`py-2 px-6 rounded-full font-semibold shadow-md focus:outline-none transition ${
                activeTab === "donor"
                  ? "bg-indigo-950 text-white"
                  : "bg-indigo-100 text-gray-700 hover:bg-indigo-900 hover:text-white"
              }`}
            >
              DONOR
            </button>

            <button
              onClick={() => {
                setActiveTab("admin");
                handleAdminLogin();
              }}
              className={`py-2 px-6 rounded-full font-semibold shadow-md focus:outline-none transition ${
                activeTab === "admin"
                  ? "bg-indigo-950 text-white"
                  : "bg-indigo-100 text-gray-700 hover:bg-indigo-900 hover:text-white"
              }`}
            >
              ADMINISTRATOR
            </button>
          </div>

          {/* LOGIN FORM */}
          <form className="mt-8">
            {/* EMAIL */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>

              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.516 9-5.458 9-3.942 0-6.733-4.943-8.007-9z"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* GOOGLE RECAPTCHA */}
            <div className="mb-6 flex justify-center">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Correct for Vite
                onChange={handleCaptchaChange}
              />
            </div>

            {/* LOGIN BUTTON */}
            <button
              onClick={handleDonorDashboard}
              className="bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonorLogin;
