


const SuperAdminLogin = () => {
  return (
    <div className="p-0 m-0 min-h-screen bg-gray-300" id="BODY">

      {/* HEADER */}
      <div className="h-20 w-auto bg-indigo-950 border flex items-center justify-between" id="UPPER-LANDING-HEADER">
        <div className="p-2 ml-5 flex flex-wrap items-center gap-3" id="LOGO&TEXT">
          <img src="logo_white.png" alt="logo_white" className="h-15 w-15" />
          <h1 className="text-3xl text-white font-bold">SDDMS</h1>
        </div>
        <div className="mr-3 flex" id="UPPER-LANDING-NAV">
          <h1 className="mr-10 font-bold text-xl text-white">ABOUT US</h1>
          <h1 className="font-bold text-xl text-white">CONTACT</h1>
        </div>
      </div>

      {/* CONTENT */}
     <div
        className="relative lg:min-h-screen p-2 flex items-center justify-center lg:w-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/BUKSU.jpg')" }}
        id="CONTENT-REGISTER-MAIN"
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-indigo-950/55"></div>

        {/* Card on top of overlay */}
        <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
            <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
     </div>

          <div className="mt-6">
            <button
              className="bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-full w-full hover:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              SUPER ADMIN
            </button>
          </div>

          <form className="mt-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.516 9-5.458 9-3.942 0-6.733-4.943-8.007-9z"
                    />
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

            <div className="mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700 text-sm">I'm not a robot</span>
                {/* You might need to integrate a proper reCAPTCHA here */}
              </div>
            </div>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
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

export default SuperAdminLogin;
