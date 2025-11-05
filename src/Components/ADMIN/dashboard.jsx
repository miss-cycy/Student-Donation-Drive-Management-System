import React from "react";

const dashboard = () => {
  const data = null;
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin Dashboard</title>
        <link rel="stylesheet" href="../src/output.css" />
        <aside className="sm:flex flex-wrap sm:w-50 lg:w-90 w-auto lg:h-screen bg-indigo-950 place-items-center-safe float-left justify-center-safe">
          <section className="p-2 flex flex-col items-center text-center mt-5">
            <img
              src="../IMAGES/logo_white.png"
              alt="Logo"
              className="size-20 sm:size-32 lg:size-40"
            />
            <h1 className="text-white text-2xl font-semibold mt-4">
              Student Donation Drive Management System
            </h1>
          </section>
          <section className="mt-4">
            <div className="flex items-center bg-gray-600 rounded-full w-full sm:w-auto lg:w-50 h-16 p-2">
              <div className="size-12 bg-white rounded-full mr-2 overflow-hidden">
                {/* Profile Picture Here (Replace this div with an <img> tag) */}
              </div>
              <span className="text-white text-xl font-medium">
                Stephanie E.
              </span>
            </div>
          </section>
          <div className="my-5 flex items-center justify-center">
            <h1 className="text-white text-2xl lg:text-3xl font-bold mr-4">
              DONOR
            </h1>
            <hr className="border-2 border-white w-24 lg:w-40" />
          </div>
          <nav>
            <ul className="text-white text-md">
              <li className="flex items-center gap-3 bg-gray-700 rounded-lg p-4 mb-2">
                <img
                  src="/IMAGES/logo_white.png"
                  alt
                  className="size-5 sm:size-7"
                />
                <a href="#" className="font-semibold">
                  DASHBOARD
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="../ADMIN/campaigns.html"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-300 hover:text-indigo-950"
                >
                  <img
                    src="/IMAGES/logo_white.png"
                    alt
                    className="size-5 sm:size-7"
                  />
                  CAMPAIGNS
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="../DONOR_PAGE/myDonations.html"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-300 hover:text-indigo-950"
                >
                  <img
                    src="/IMAGES/logo_white.png"
                    alt
                    className="size-5 sm:size-7"
                  />
                  DONATIONS
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-300 hover:text-indigo-950"
                >
                  <img
                    src="/IMAGES/logo_white.png"
                    alt
                    className="size-5 sm:size-7"
                  />
                  DONORS
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-300 hover:text-indigo-950"
                >
                  <img
                    src="/IMAGES/logo_white.png"
                    alt
                    className="size-5 sm:size-7"
                  />
                  CATEGORIES
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-300 hover:text-indigo-950"
                >
                  <img
                    src="/IMAGES/logo_white.png"
                    alt
                    className="size-5 sm:size-7"
                  />
                  REPORTS
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-300 hover:text-indigo-950"
                >
                  <img
                    src="/IMAGES/logo_white.png"
                    alt
                    className="size-5 sm:size-7"
                  />
                  Activity Logs
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-300 hover:text-indigo-950"
                >
                  <img
                    src="/IMAGES/logo_white.png"
                    alt
                    className="size-5 sm:size-7"
                  />
                  NOTIFICATION
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className>
          <section className="sm:flex lg:ml-90 lg:pl-10 lg:p-2 pl-5 border-b-2 flex items-center-safe justify-between">
            <h1 className="text-3xl font-bold text-indigo-950">
              Admin Dashboard
            </h1>
            <div className="flex gap-2 mx-5">
              <div className="flex border-2 lg:w-15 p-2 bg-indigo-950 rounded-2xl items-center-safe">
                <div className="lg:size-10 flex-wrap place-content-center-safe rounded-2xl">
                  <img
                    src="../IMAGES/logo_white.png"
                    alt="notification_bell"
                    className="lg:size-10   "
                  />
                </div>
              </div>
              <a href="../LOGIN/login_donor.html">
                <div className="flex border-2 lg:w-40 p-2 items-center-safe space-x-3 bg-orange-400 font-bold text-white rounded-2xl">
                  <div className="lg:size-10 border-2 rounded-4xl bg-white" />
                  <h1 className="text-2xl">logout</h1>
                </div>
              </a>
            </div>
          </section>
          <section className="sm:flex lg:h-auto">
            <div className="p-6 bg-gray-100 min-h-screen space-y-8">
              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white shadow rounded-lg p-4 text-center">
                  <h3 className="text-sm text-gray-500">Total Campaigns</h3>
                  <p className="text-2xl font-bold text-blue-600">300</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4 text-center">
                  <h3 className="text-sm text-gray-500">Total Donors</h3>
                  <p className="text-2xl font-bold text-green-600">45</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4 text-center">
                  <h3 className="text-sm text-gray-500">Active Campaigns</h3>
                  <p className="text-2xl font-bold text-yellow-600">40</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4 text-center">
                  <h3 className="text-sm text-gray-500">Upcoming Drives</h3>
                  <p className="text-2xl font-bold text-purple-600">02</p>
                </div>
              </div>
              {/* Charts Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Total Campaigns Overtime
                  </h3>
                  <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                    [Bar Chart Placeholder]
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Donations per Category
                  </h3>
                  <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                    [Donut Chart Placeholder]
                  </div>
                </div>
              </div>
              {/* Campaign Status Overview Table */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Campaign Status Overview
                  </h2>
                  <button className="text-blue-600 hover:underline">
                    View More
                  </button>
                </div>
                <div className="overflow-x-auto bg-white shadow rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Name
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Campaign Name
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Categories
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Donation Type
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Date Submitted
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">Halia Thiya</td>
                        <td className="px-4 py-2">
                          Emergency Food Pantry Support
                        </td>
                        <td className="px-4 py-2">Category 1</td>
                        <td className="px-4 py-2">Cash &amp; Goods</td>
                        <td className="px-4 py-2">2025-09-28</td>
                        <td className="px-4 py-2 text-blue-600 hover:underline">
                          View
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Kate Te</td>
                        <td className="px-4 py-2">
                          Sports Equipment for Athletics Program
                        </td>
                        <td className="px-4 py-2">Category 2</td>
                        <td className="px-4 py-2">Cash &amp; Goods</td>
                        <td className="px-4 py-2">2025-09-30</td>
                        <td className="px-4 py-2 text-red-600 font-semibold">
                          Rejected
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Hashna Perz</td>
                        <td className="px-4 py-2">Emergency Fund for Sarah</td>
                        <td className="px-4 py-2">Category 3</td>
                        <td className="px-4 py-2">Cash &amp; Goods</td>
                        <td className="px-4 py-2">2025-10-01</td>
                        <td className="px-4 py-2 text-blue-600 hover:underline">
                          View
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              {/* Recent Donations Table */}
              <section>
                <div className="flex justify-between items-center mb-4 mt-8">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Recent Donations
                  </h2>
                  <button className="text-blue-600 hover:underline">
                    View More
                  </button>
                </div>
                <div className="overflow-x-auto bg-white shadow rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Name
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Campaign Name
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Donation Date
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Donation Type
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">Mana Nangai</td>
                        <td className="px-4 py-2">
                          Emergency Food Pantry Support
                        </td>
                        <td className="px-4 py-2">2025-09-29</td>
                        <td className="px-4 py-2">Cash &amp; Goods</td>
                        <td className="px-4 py-2 text-green-600 font-semibold">
                          Verified
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Kate Te</td>
                        <td className="px-4 py-2">
                          Sports Equipment for Athletics Program
                        </td>
                        <td className="px-4 py-2">2025-09-30</td>
                        <td className="px-4 py-2">Cash &amp; Goods</td>
                        <td className="px-4 py-2 text-red-600 font-semibold">
                          Rejected
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Mario Key</td>
                        <td className="px-4 py-2">Emergency Fund for Sarah</td>
                        <td className="px-4 py-2">2025-10-01</td>
                        <td className="px-4 py-2">Cash &amp; Goods</td>
                        <td className="px-4 py-2 text-green-600 font-semibold">
                          Verified
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default dashboard;
