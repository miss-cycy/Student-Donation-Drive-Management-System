import React from "react";

const campaigns = () => {
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
              <li className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-300 hover:text-indigo-950">
                <img
                  src="/IMAGES/logo_white.png"
                  alt
                  className="size-5 sm:size-7"
                />
                <a href="../ADMIN/dashboard.html" className="font-semibold">
                  DASHBOARD
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="../DONOR_PAGE/explore.html"
                  className="flex items-center gap-3 bg-gray-700 rounded-lg p-4 mb-2 "
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
        <main>
          <section className="sm:flex lg:h-20 lg:ml-90 lg:pl-10 lg:p-2 pl-5 border-b-2 flex items-center-safe justify-between">
            <h1 className="text-3xl font-bold text-indigo-950">
              Organize Donation
            </h1>
          </section>
          <section className="h-350 lg:w-400 justify-center-safe">
            <div className="sm:flex-wrap lg:p-40 bg-gray-100 h-300 w-max space-y-20">
              {/* Header + Add Button */}
              <div className="flex justify-between items-center pl-10">
                <h1 className="text-2xl font-bold text-gray-800">
                  Donation Events
                </h1>
                <button className="bg-blue-600 text-indigo-950 px-4 py-2 rounded hover:bg-blue-700 text-xl">
                  + Add new Donation Events
                </button>
              </div>
              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white shadow rounded-lg p-4 text-center">
                  <h3 className="text-sm text-gray-500">Total Campaigns</h3>
                  <p className="text-2xl font-bold text-blue-600">300</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4 text-center">
                  <h3 className="text-sm text-gray-500">Total Donations</h3>
                  <p className="text-2xl font-bold text-green-600">
                    Php 8,000.00
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg p-4 text-center">
                  <h3 className="text-sm text-gray-500">Active Donors</h3>
                  <p className="text-2xl font-bold text-yellow-600">45</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4 text-center">
                  <h3 className="text-sm text-gray-500">High Priority</h3>
                  <p className="text-2xl font-bold text-red-600">3</p>
                </div>
              </div>
              {/* Search & Filters */}
              <div className="sm:flex grid grid-cols-1 lg:grid-cols-3 gap-4 items-center m-20">
                <input
                  type="text"
                  placeholder="Search Donation Events"
                  className=" sm:w-10 lg:w-100 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-4">
                  <select className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Status</option>
                    <option>Review</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                  <input
                    type="date"
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {/* Donation Events Table */}
              <div className="overflow-x-auto bg-white shadow rounded-lg mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                        Event Name
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                        Location
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                        Amount/Item
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                        Status
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                        Date
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2">
                        Emergency Food Pantry Support
                      </td>
                      <td className="px-4 py-2">Cash &amp; Goods</td>
                      <td className="px-4 py-2">Php 5,000.00</td>
                      <td className="px-4 py-2 text-yellow-600 font-semibold">
                        Review
                      </td>
                      <td className="px-4 py-2">2025-10-01</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-600 hover:underline">
                          Review
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">
                        Sports Equipment for Athletics Program
                      </td>
                      <td className="px-4 py-2">Cash</td>
                      <td className="px-4 py-2">Php 2,000.00</td>
                      <td className="px-4 py-2 text-yellow-600 font-semibold">
                        Review
                      </td>
                      <td className="px-4 py-2">2025-10-01</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-600 hover:underline">
                          Review
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Emergency Fund for SARAH</td>
                      <td className="px-4 py-2">Cash</td>
                      <td className="px-4 py-2">Php 1,000.00</td>
                      <td className="px-4 py-2 text-yellow-600 font-semibold">
                        Review
                      </td>
                      <td className="px-4 py-2">2025-10-01</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-600 hover:underline">
                          Review
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default campaigns;
