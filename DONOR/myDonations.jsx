import React from "react";

const myDonations = () => {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Donor Dashboard</title>
        <link rel="stylesheet" href="../src/output.css" />
        <aside className=" sm:w-50 lg:w-100 w-auto lg:h-screen bg-indigo-950 flex-wrap  place-items-center-safe float-left ">
          <section className="lg:size-70 p-2 flex-wrap justify-items-center-safe content-center text-center mt- 5">
            <img
              src="../IMAGES/logo_white.png"
              alt="Logo"
              className="lg:size-30 sm:size-5"
            />
            <h1 className="text-white text-2xl">
              Student Donation Drive Managment System
            </h1>
          </section>
          <section>
            <div className="flex items-center bg-gray-600 rounded-4xl lg:w-70 lg:h-20">
              <div className="lg:size-25 bg-white rounded-full mr-2 overflow-visible" />
              <span className="text-white text-xl">Stephanie E.</span>
            </div>
          </section>
          <div className=" my-10 flex place-content-center items-center-safe gap-2">
            <h1 className="text-white lg:text-3xl font-bold">DONOR </h1>
            <hr className="border-2 border-white lg:w-50" />
          </div>
          <nav>
            <ul className="text-white text-md">
              <a href="../DONOR_PAGE/dashboard.html">
                <li className="p-4 lg:w-60 flex items-center gap-3 hover:bg-amber-300 rounded-lg hover:text-indigo-950">
                  <img
                    src="/IMAGES/logo_white.png"
                    alt
                    className="lg:size-7 sm:size-2"
                  />
                  DASHBOARD
                </li>
              </a>
              <a href="../DONOR_PAGE/explore.html">
                <li className="p-4 lg:w-60 flex items-center gap-3 hover:bg-amber-300 rounded-lg hover:text-indigo-950">
                  <img src="/IMAGES/logo_white.png" alt className="lg:size-7" />
                  EXPLORE CAMPAIGNS
                </li>
              </a>
              <li className="border-2 p-4 lg:w-60 flex items-center gap-3  bg-gray-700 rounded-lg ">
                <img src="/IMAGES/logo_white.png" alt className="lg:size-7" />
                <a href="#">MY DONATIONS</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className>
          <section className="lg:ml-100 lg:pl-10 lg:p-2 pl-5 border-b-2 flex items-center-safe justify-between">
            <h1 className="text-3xl font-bold text-indigo-950">My Donations</h1>
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
          <section>
            <div className="lg:ml-100 lg:pl-10 lg:p-5 pl-5">
              <h1 className="text-2xl font-bold text-indigo-950 my-5">
                DASHBOARD
              </h1>
              <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-1 shadow-2xl p-5 place-content-center-safe">
                <div className="border-2 rounded-lg p-4 lg:w-80 shadow-lg flex items-center gap-4">
                  <img
                    src="../IMAGES/logo_blue.png"
                    alt
                    className="lg:size-15 size-min"
                  />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Total Donations
                    </h2>
                    <p className="text-gray-600">₱5,000</p>
                  </div>
                </div>
                <div className="border-2 rounded-lg p-4 lg:w-80 shadow-lg flex items-center gap-4">
                  <img
                    src="../IMAGES/logo_blue.png"
                    alt
                    className="lg:size-15"
                  />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Total Donations
                    </h2>
                    <p className="text-gray-600">₱5,000</p>
                  </div>
                </div>
                <div className="border-2 rounded-lg p-4 lg:w-80 shadow-lg flex items-center gap-4">
                  <img
                    src="../IMAGES/logo_blue.png"
                    alt
                    className="lg:size-15"
                  />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Total Donations
                    </h2>
                    <p className="text-gray-600">₱5,000</p>
                  </div>
                </div>
                <div className="border-2 rounded-lg p-4 lg:w-80 shadow-lg flex items-center gap-4">
                  <img
                    src="../IMAGES/logo_blue.png"
                    alt
                    className="lg:size-15"
                  />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Total Donations
                    </h2>
                    <p className="text-gray-600">₱5,000</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="lg:ml-100 lg:pl-10 lg:p-5 pl-5">
              <h1 className="text-2xl font-bold text-indigo-950 my-5">
                RECENT DONATIONS
              </h1>
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-2xl text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3">
                      Campaign Name
                    </th>
                    <th scope="col" className="py-3">
                      Donation Type
                    </th>
                    <th scope="col" className="py-3">
                      Amount/Item
                    </th>
                    <th scope="col" className="py-3">
                      Date Donated
                    </th>
                    <th scope="col" className="py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emergency Food Pantry Support</td>
                    <td>Cash &amp; Goods</td>
                    <td>Php 5,000...</td>
                    <td>2025-10-01</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Sports Equipment for Athletics Program</td>
                    <td>Cash</td>
                    <td>Php 1,000...</td>
                    <td>2025-10-01</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Emergency Fund for Sarah</td>
                    <td>Cash</td>
                    <td>Php 2,000...</td>
                    <td>2025-10-01</td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default myDonations;
