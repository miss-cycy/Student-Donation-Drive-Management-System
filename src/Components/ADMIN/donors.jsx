import React from "react";

const donors = () => {
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
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-300 hover:text-indigo-950 "
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
                  className=" flex items-center gap-3 bg-gray-700 rounded-lg p-4 mb-2 "
                >
                  <img
                    src="/IMAGES/logo_white.png"
                    alt
                    className="size-5 sm:size-7"
                  />
                  MY DONATIONS
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
            <h1 className="text-3xl font-bold text-indigo-950">My Donations</h1>
          </section>
          <section>
            <div className="container mx-auto p-4">
              {/* Navigation Tabs */}
              <div className="flex space-x-2 mb-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold focus:outline-none">
                  Dashboard
                </button>
                <button className="text-gray-700 px-4 py-2 rounded-full font-semibold bg-gray-200 focus:outline-none">
                  Total Donors
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 focus:outline-none">
                  Total Donors
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 focus:outline-none">
                  Complete Donations
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 focus:outline-none">
                  Top Donors
                </button>
              </div>
              {/* Dashboard Cards */}
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white rounded-lg shadow-md p-4 w-3xl">
                  <h3 className="font-semibold text-lg mb-2">
                    Total Campaigns
                  </h3>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-campaign-2038843-1721544.png"
                    alt="Total Campaigns Icon"
                    className="w-6 h-6"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    Total Donations
                  </h3>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-heart-181-458579.png"
                    alt="Total Donations Icon"
                    className="w-6 h-6"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-semibold text-lg mb-2">Active Donors</h3>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-user-group-226879.png"
                    alt="Active Donors Icon"
                    className="w-6 h-6"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-semibold text-lg mb-2">High Priority</h3>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-increase-1664855.png"
                    alt="High Priority Icon"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Recent Activity and Pending Approval Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    Recent Activity
                  </h3>
                  <div className="border-b py-2">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-600">
                      Emergency Medical Fund for Sarah
                    </p>
                  </div>
                  <div className="border-b py-2">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-600">
                      Emergency Medical Fund for Sarah
                    </p>
                  </div>
                  <div className="border-b py-2">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-600">
                      Emergency Medical Fund for Sarah
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    Pending Approval
                  </h3>
                  <div className="border-b py-2">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-600">
                      Emergency Medical Fund for Sarah
                    </p>
                  </div>
                  <div className="border-b py-2">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-600">
                      Emergency Medical Fund for Sarah
                    </p>
                  </div>
                  <div className="border-b py-2">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-600">
                      Emergency Medical Fund for Sarah
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default donors;
