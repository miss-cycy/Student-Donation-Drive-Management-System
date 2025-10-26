import React from "react";

const AD_digits = () => {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin 4 digits</title>
        <link href="../src/output.css" rel="stylesheet" />
        <header className="h-20 w-auto bg-indigo-950 border flex items-center justify-between">
          <div
            className="p-2 ml-5 flex-wrap items-center  gap-3 flex"
            id="LOGO&TEXT"
          >
            <img
              src="/IMAGES/logo_white.png"
              alt="logo_white"
              className="h-15 w-15 flex-wrap"
            />
            <h1 className="text-3xl text-white bold">SDDMS</h1>
          </div>
          <nav className="flex mr-3">
            <ul className="flex justify-between gap-5 text-xl text-white">
              <li>ABOUT US</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </header>
        <main className="lg:h-screen sm:h-auto bg-[url(/IMAGES/BUKSU.jpg)] bg-cover background-size: cover background-position: center">
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
              {/* Shield Icon (Top Center) */}
              <div className="flex justify-center">
                <div className="rounded-full bg-orange-100 p-3 text-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {/* Title and Description */}
              <h2 className="text-2xl font-semibold text-gray-800 text-center mt-4">
                RESET ADMIN PASSWORD
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Enter the 4 digits code that you received on your email.
              </p>
              {/* Code Input Boxes */}
              <div className="mt-6 flex justify-center space-x-4">
                <input
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 border border-gray-300 rounded text-center text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 border border-gray-300 rounded text-center text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 border border-gray-300 rounded text-center text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 border border-gray-300 rounded text-center text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Send Button */}
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 w-full">
                SEND
              </button>
              {/* Login Link */}
              <div className="text-center mt-4">
                <span>Remembered your password?</span>
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:text-blue-700"
                >
                  {" "}
                  Login here.
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="p-1 flex gap-2 items-center justify-between bg-indigo-950 text-white">
          <div className="p-1 flex-wrap lg:w-screen" id="LOWER-LANDING-FOOTER">
            <div
              className=" p-2 flex gap-2 items-center justify-between"
              id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGH"
              t
            >
              <div
                className=" p-1"
                id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGHT-1"
              >
                <p>
                  © 2024 Student Donation Drive Management System. All rights
                  reserved.
                </p>
              </div>
              <div
                className="flex gap-5 p-1 lg:w-1xl"
                id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGHT-1-ICON"
              >
                <div
                  className
                  id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGHT-1-ICON-1"
                >
                  1
                </div>
                <div
                  className
                  id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGHT-1-ICON-2"
                >
                  2
                </div>
                <div
                  className
                  id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGHT-1-ICON-3"
                >
                  3
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AD_digits;
