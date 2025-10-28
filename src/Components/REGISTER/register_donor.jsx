import React from "react";

const register_donor = () => {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin Login</title>
        <link href="../src/output.css" rel="stylesheet" />
        <link rel="stylesheet" href="../src/output.css" />
        <div className="p-0 m-0 h-screen bg-gray-300" id="BODY">
          {/* HEADER */}
          <div
            className="h-20 w-auto bg-indigo-950 border flex items-center justify-between"
            id="UPPER-LANDING-HEADER"
          >
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
            <div className="mr-3 flex " id="UPPER-LANDING-NAV">
              <h1 className="mr-10 font-bold text-xl  text-white">ABOUT US</h1>
              <h1 className="font-bold text-xl text-white">CONTACT</h1>
            </div>
          </div>
          {/* CONTENT */}
          <div
            className="border-2 lg:h-screen p-2 items-center justify-center-safe flex lg:w-auto bg-[url(../IMAGES/BUKSU.jpg)] bg-cover background-size: cover background-position: center"
            id="CONTENT-REGISTER-MAIN"
          >
            <div
              className="bg-white rounded-xl shadow-lg p-8 max-w-md lg:w-120 w-full h-200 flex-wrap"
              id="register-form"
            >
              <img src="/IMAGES/logo_blue.png" alt="logo" className="size-10" />
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                  DONOR REGISTRATION
                </h2>
              </div>
              <form className="mt-8">
                <div className="mb-4 flex gap-2">
                  <div id="firstname">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="fullname"
                    >
                      Firstname
                    </label>
                    <input
                      className="shadow appearance-none border rounded lg:w-45 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="fullname"
                      type="text"
                      placeholder="Enter your firstname"
                    />
                  </div>
                  <div id="lastname">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="fullname"
                    >
                      Lastname
                    </label>
                    <input
                      className="shadow appearance-none border rounded lg:w-45 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="fullname"
                      type="text"
                      placeholder="Enter your lastname"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded lg:w-92 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded lg:w-92 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Create a password"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded lg:w-92 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Confirm password"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">
                      I agree to Terms &amp; Condition
                    </span>
                  </label>
                </div>
                <div className="mb-6 mt-6  justify-items-center-safe">
                  <div className="flex items-center lg:w-95 bg-gray-300 p-4 rounded-md">
                    <input
                      type="checkbox"
                      className="form-checkbox size-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700 text-sm">
                      I'm not a robot
                    </span>
                  </div>
                </div>
              </form>
              <div
                id="createACC"
                className="bg-indigo-950 p-5 lg:w-95 text-white rounded-2xl justify-center-safe flex mb-4 font-bold"
              >
                <h1>CREATE ACCOUNT</h1>
              </div>
              <div
                id="createACC"
                className="bg-white p-5 lg:w-95 text-indigo-950 rounded-2xl justify-center-safe flex border-2 border-indigo-950 font-bold"
              >
                <h1>LOGIN IN WITH GOOGLE</h1>
              </div>
              <a
                href="#"
                className="flex lg:w-95 justify-center-safe mt-4 text-sm font-medium text-indigo-950 hover:text-indigo-700"
              >
                <button>Already have an account? Login</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register_donor;
