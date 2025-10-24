
const DonorDashboard = () => {
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
          <span className="font-semibold">Stephanie E.</span>
        </div>

        <h2 className="text-2xl font-bold mb-4">DONOR</h2>
        <hr className="border-white w-3/4 mb-6" />

        {/* Sidebar */}
        <nav className="w-full flex flex-col items-center space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 bg-gray-700 px-4 py-3 rounded-lg w-56 font-semibold hover:bg-gray-600 transition"
          >
            <img src="/IMAGES/logo_white.png" alt="" className="w-6 h-6" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg w-56 font-semibold hover:bg-gray-700 transition"
          >
            <img src="/IMAGES/logo_white.png" alt="" className="w-6 h-6" />
            Explore Campaigns
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg w-56 font-semibold hover:bg-gray-700 transition"
          >
            <img src="/IMAGES/logo_white.png" alt="" className="w-6 h-6" />
            My Donations
          </a>
        </nav>
      </aside>

{/* MAIN CONTENT */}
<main className="flex-1 p-8">
  {/* Header Section */}
  <header className="flex justify-between items-center border-b-3 border-indigo-950 pb-4 mb-8">
    <div>
      <h1 className="text-2xl font-semibold text-indigo-950">
        Welcome Back, <span className="font-bold">Stephanie E.</span>
      </h1>
      <p className="text-gray-500 text-sm">Here’s your latest dashboard summary.</p>
    </div>

    <div className="flex items-center gap-4">
      {/* Settings Button */}
      <button
        className="bg-indigo-950 hover:bg-indigo-900 p-3 rounded-xl flex items-center justify-center shadow-md transition"
        title="Settings"
      >
        <img src="/sett.png" alt="Settings" className="w-6 h-6" />
      </button>

      {/* Logout Button */}
      <button
        className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-bold px-5 py-2 rounded-xl shadow-md transition"
        title="Logout"
      >
        <span>Logout</span>
      </button>
    </div>
  </header>


        {/* Dashboard Stats */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-indigo-950 mb-5">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Stat Cards */}
            <div className="bg-white border rounded-lg p-4 shadow flex items-center gap-4">
              <div className="text-orange-500 text-3xl">₱</div>
              <div>
                <h3 className="text-gray-600 text-sm font-semibold">Total Donations</h3>
                <p className="text-xl font-bold">₱8,000</p>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4 shadow flex items-center gap-4">
              <div className="text-blue-500 text-3xl">📦</div>
              <div>
                <h3 className="text-gray-600 text-sm font-semibold">Total Goods Donated</h3>
                <p className="text-xl font-bold">1 items</p>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4 shadow flex items-center gap-4">
              <div className="text-green-600 text-3xl">💚</div>
              <div>
                <h3 className="text-gray-600 text-sm font-semibold">Campaigns Supported</h3>
                <p className="text-xl font-bold">3</p>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4 shadow flex items-center gap-4">
              <div className="text-indigo-600 text-3xl">📅</div>
              <div>
                <h3 className="text-gray-600 text-sm font-semibold">Last Donation Date</h3>
                <p className="text-xl font-bold">2025-10-03</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Donations */}
        <section className="bg-white/100 p-6 rounded-xl shadow-lg border border-gray-300">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Recent Donations</h2>
            <button className="text-sm text-indigo-950 font-semibold hover:underline">
              View More
            </button>
          </div>

          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-3 px-4">Campaign Name</th>
                <th className="py-3 px-4">Donation Type</th>
                <th className="py-3 px-4">Amount/Item</th>
                <th className="py-3 px-4">Date Donated</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ["Emergency Food Pantry Support", "Cash & Goods", "Php 5,000", "2025-10-01"],
                ["Sports Equipment for Athletics Program", "Cash", "Php 1,000", "2025-10-01"],
                ["Emergency Fund for Sarah", "Cash", "Php 2,000", "2025-10-07"],
              ].map(([name, type, amount, date], i) => (
                <tr key={i} className="border-t">
                  <td className="py-3 px-4">{name}</td>
                  <td className="py-3 px-4">{type}</td>
                  <td className="py-3 px-4">{amount}</td>
                  <td className="py-3 px-4">{date}</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default DonorDashboard;
