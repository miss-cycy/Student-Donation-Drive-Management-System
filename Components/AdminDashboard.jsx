const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="w-72 bg-indigo-950 text-white flex flex-col items-center py-8">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <img src="/logo_white.png" alt="Logo" className="w-20 mx-auto mb-2" />
          <h1 className="text-lg font-semibold leading-tight">
            Student Donation Drive <br /> Management System
          </h1>
        </div>

        {/* Profile Section */}
        <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 mb-6 w-56">
          <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
          <span className="font-semibold">Carlos M.</span>
        </div>

        <h2 className="text-2xl font-bold mb-4">ADMIN</h2>
        <hr className="border-white w-3/4 mb-6" />

        {/* Sidebar Navigation */}
        <nav className="w-full flex flex-col items-center space-y-2">
          {[
            "Dashboard",
            "Organize Donation",
            "My Donations",
            "Active Logs",
            "Donations Tracking",
            "Report & Analytics",
            "Settings",
            "Notification",
            "Logout",
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg w-56 font-semibold transition ${
                idx === 0 ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              <img src="/IMAGES/logo_white.png" alt="" className="w-6 h-6" />
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {/* HEADER */}
        <header className="flex justify-between items-start pb-4 mb-6 border-b border-gray-300">
          <div>
            <h1 className="text-2xl font-semibold text-indigo-950">
              Welcome Back, <span className="text-gray-800">Carlos M.</span>
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Here’s your latest dashboard summary.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              className="bg-indigo-950 hover:bg-indigo-900 p-3 rounded-xl flex items-center justify-center shadow-md transition"
              title="Settings"
            >
              <img src="/sett.png" alt="Settings" className="w-6 h-6" />
            </button>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md">
              Logout
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {["Dashboard", "Total Donors", "Recent Action", "Complete Donations", "Top Donors"].map(
            (tab, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full font-semibold ${
                  idx === 0 ? "bg-indigo-950 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Stats Cards with Clear Borders */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Campaigns", value: 8, icon: "📄" },
            { label: "Total Donations", value: 8, icon: "❤️" },
            { label: "Active Donors", value: 8, icon: "👥" },
            { label: "High Priority", value: 8, icon: "📈" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center gap-4"
            >
              <div className="text-3xl">{stat.icon}</div>
              <div className="flex flex-col">
                <h3 className="text-gray-600 text-sm font-semibold">{stat.label}</h3>
                <p className="text-xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity & Pending Approval */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="text-gray-700 divide-y divide-black">
              {["John Doe", "Jane Smith", "Alice Johnson"].map((name, idx) => (
                <li key={idx} className="py-2">
                  <p className="font-semibold text-gray-800">{name}</p>
                  <p className="text-sm text-gray-500">
                    Emergency Medical Fund for Sarah
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Pending Approval */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Pending Approval</h2>
            <ul className="text-gray-700 divide-y divide-black">
              {["John Doe", "Jane Smith", "Alice Johnson"].map((name, idx) => (
                <li key={idx} className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-semibold text-gray-800">{name}</p>
                    <p className="text-sm text-gray-500">
                      Emergency Medical Fund for Sarah
                    </p>
                  </div>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-4 py-1 rounded-full transition">
                    Review
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
