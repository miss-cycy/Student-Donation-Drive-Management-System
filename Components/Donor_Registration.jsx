const Donor_Registration = () => {
  return (
    <div className="p-0 m-0 min-h-screen bg-gray-300" id="BODY">
      {/* HEADER */}
      <header className="bg-indigo-950 text-white flex justify-between items-center px-10 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/logo_white.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">SDDMS</h1>
        </div>

        <nav className="flex gap-8 text-lg font-semibold">
          <a href="#" className="hover:text-indigo-300">ABOUT US</a>
          <a href="#" className="hover:text-indigo-300">CONTACT</a>
        </nav>
      </header>

      {/* Content with background */}
      <div
        className="relative lg:min-h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/BUKSU.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-indigo-950/55"></div>

        {/* Compact Registration Card */}
        <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
          <img src="/logo_blue.png" alt="logo" className="mx-auto mb-4 w-20 h-20" />

          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            DONOR REGISTRATION
          </h2>

          <form className="space-y-3">
            {/* Name Fields */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Firstname"
                className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Lastname"
                className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            {/* Terms & Conditions */}
            <label className="flex items-center text-sm">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-gray-700">I agree to Terms & Conditions</span>
            </label>

            {/* Not a robot */}
            <div className="flex items-center bg-gray-200 p-2 rounded text-sm">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-gray-700">I'm not a robot</span>
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="w-full bg-indigo-950 text-white py-3 rounded-2xl font-bold mt-4 hover:bg-indigo-800"
            >
              CREATE ACCOUNT
            </button>

            <button
              type="button"
              className="w-full bg-white text-indigo-950 py-3 rounded-2xl font-bold mt-2 border-2 border-indigo-950 hover:bg-indigo-50"
            >
              LOGIN WITH GOOGLE
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-sm font-medium text-indigo-950 hover:text-indigo-700">
                Already have an account? Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donor_Registration;
