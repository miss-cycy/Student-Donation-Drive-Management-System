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
            <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="p-2 rounded-full hover:bg-gray-200 transition">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 text-red-500 hover:bg-red-100 rounded-full transition">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Donor Information */}
          <div className="bg-white border rounded-2xl shadow-sm p-5">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-blue-600 font-semibold flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Donor Information
              </h2>
              <p className="text-sm font-medium text-green-600">Status: Active</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <p><strong>Full Name:</strong> Stephanie Eleccion</p>
              <p><strong>Donor ID:</strong> DONOR-0000011</p>
              <p><strong>Email:</strong> Steph@gmail.com</p>
              <p><strong>Address:</strong> Malaybalay City</p>
              <p><strong>Total Donations:</strong> 3</p>
              <p><strong>Last Donation Date:</strong> 2025-12-23</p>
            </div>
          </div>

          {/* Donation Details Table */}
          <div className="bg-white border rounded-2xl shadow-sm p-5">
            <h2 className="text-orange-500 font-semibold flex items-center gap-2 mb-3">
              <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
              Donation Details
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="py-2 px-3 border-b">Campaign Name</th>
                    <th className="py-2 px-3 border-b">Categories</th>
                    <th className="py-2 px-3 border-b">Amount/Item</th>
                    <th className="py-2 px-3 border-b">Date Donated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-orange-100">
                    <td className="py-2 px-3 border-b">Emergency Food Pantry Support</td>
                    <td className="py-2 px-3 border-b">Category 1</td>
                    <td className="py-2 px-3 border-b">Cash & Goods</td>
                    <td className="py-2 px-3 border-b">2025-09-29</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">Sports Equipment for Athletics Program</td>
                    <td className="py-2 px-3 border-b">Category 2</td>
                    <td className="py-2 px-3 border-b">Cash</td>
                    <td className="py-2 px-3 border-b">2025-09-30</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">Emergency Fund for Sarah</td>
                    <td className="py-2 px-3 border-b">Category 3</td>
                    <td className="py-2 px-3 border-b">Cash</td>
                    <td className="py-2 px-3 border-b">2025-10-01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Donation Details */}
          <div className="bg-white border rounded-2xl shadow-sm p-5">
            <h2 className="text-orange-500 font-semibold flex items-center gap-2 mb-3">
              <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
              Donation Details
            </h2>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
              <p><strong>Campaign Name:</strong> Emergency Fund</p>
              <p><strong>Donation Type:</strong> Cash and Goods</p>
              <p><strong>Submitted By:</strong> Sarah Jones</p>
              <p><strong>Date Donated:</strong> 2025-10-01</p>
            </div>

            <div className="text-sm">
              <h3 className="font-semibold text-gray-700 mb-1">Gcash Information</h3>
              <p>Gcash Name: Sarah Johnson</p>
              <p>Gcash Number: +63 912 345 6789</p>
            </div>

            <div className="mt-3 text-sm">
              <h3 className="font-semibold text-gray-700 mb-1">Goods List</h3>
              <ul className="list-disc pl-5">
                <li>Rice</li>
                <li>Water</li>
                <li>Sardines</li>
              </ul>
            </div>

            <div className="mt-3 text-sm">
              <h3 className="font-semibold text-gray-700 mb-1">Proof of Transaction</h3>
              <p>Transaction Cash Proof:</p>
              <div className="bg-gray-200 rounded-md p-2 text-center text-gray-500 my-1">
                Picture sa resibo sa gcash
              </div>
              <p>Amount: ₱5,000</p>
              <p>Goods Delivery Date: 2025-10-01</p>
            </div>

            {/* Receipt */}
            <div className="mt-4 border-t pt-3 text-sm">
              <h3 className="text-indigo-600 font-semibold">Donation Receipt</h3>
              <p>Student Donation Drive Management System</p>
              <p className="text-gray-600">
                Date Issued: <span className="text-gray-800">10/07/2025</span>
              </p>
              <p>Receipt No: RCT-2025-55016</p>
              <p>Status: <span className="font-medium text-green-600">Received</span></p>
              <p>Category: Category 1</p>
            </div>

            {/* Verified */}
            <div className="mt-4 bg-green-100 border border-green-300 rounded-xl p-3 text-sm">
              <p className="font-semibold text-green-700">Verified By</p>
              <p>Admin Name: Carlos Mendoza</p>
              <p>Role: System Admin</p>
              <p>Verification Date: 2025-10-01</p>
            </div>
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
