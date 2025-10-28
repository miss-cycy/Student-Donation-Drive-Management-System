import React from "react";

const landing = () => {
  return (
    <div>
      <div>
        <header className="h-20 w-auto bg-indigo-950 border flex items-center justify-between">
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
          <nav className="flex mr-3">
            <ul className="flex justify-between gap-5 text-xl text-white">
              <li>ABOUT US</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </header>
        <main className>
          {/* UPPER LANDING */}
          <section
            className="flex p-2 lg:h-300 sm:w-90 md:w-150 lg:w-full content-center-safe items-center-safe justify-center-safe text-white bg-[url(/IMAGES/BUKSU.jpg)] bg-cover background-size: cover background-position: center"
            id="UPPER-LANDING"
          >
            <div
              className=" p-1 m-2 sm:h-70 md:h-150 lg:h-205 sm:w-50 md:w-90 lg:w-6xl flex-wrap content-center"
              id="UPPER-LANDING-CONTENTS-CONTAINER-MAIN-CONTENT"
            >
              <div
                className=" sm:h-50 lg:h-150 sm:w-50 md:w-130 lg:w-210 content-center justify-items-center justify"
                id="UPPER-LANDING-CONTENTS-CONTAINER-MAIN-CONTENT-HEADER"
              >
                <div
                  className="mb-10  sm:w-50 md:w-1/3 lg:w-250 text-center"
                  id="UPPER-LANDING-CONTENTS-CONTAINER-MAIN-CONTENT-MAIN_HEADER"
                >
                  <h1 className="sm:text-xl md:text-4xl lg:text-7xl font-bold text-white">
                    Student Donation Drive Management System
                  </h1>
                </div>
                <div
                  className=" sm:w-50 md:w-100 lg:w-200 h-50 text-center content-center "
                  id="UPPER-LANDING-CONTENTS-CONTAINER-MAIN-CONTENT-MAIN_HEADER-DESCRIPTION"
                >
                  <p className="sm:text-20 md:text-60 lg:text-2xl flex-1 text-white">
                    An easy-to-use platform where donors can contribute and
                    track their impact, while administrators manage drives,
                    monitor contributions, and ensure accountability in every
                    donation.
                  </p>
                </div>
                <div
                  className=" p-2 m-2 w-200"
                  id="UPPER-LANDING-CONTENTS-CONTAINER-MAIN-CONTENT-EXPLORE"
                >
                  <button className="p-2 rounded-2xl bg-white lg:w-50 text-black shadow-xl/30">
                    EXPLORE CAMPAIGNS
                  </button>
                </div>
              </div>
            </div>
            <div
              className="p-1 m-1 h-200 w-200 flex-wrap justify-items-center content-center-safe"
              id="UPPER-LANDING-CONTENTS-CONTAINER"
            >
              <div className="container mx-auto py-8">
                {/* Donors Section */}
                <div className="bg-blue-100 rounded-lg shadow-xl/30 p-6 mb-8 ">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-blue-200 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-700 mt-4">
                      DONORS
                    </h2>
                    <p className="text-blue-500 text-center mt-2">
                      Access your dashboard to track your impact and manage your
                      donations.
                    </p>
                    <div className="flex gap-2">
                      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4 lg:w-70">
                        DONOR LOGIN
                      </button>
                      <div className="flex items-center justify-center mt-3">
                        <span className="text-gray-500">OR</span>
                        <button className="ml-3">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 533.5 544.3"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 55.3-54.4 55.3-41.4 0-75.2-33.8-75.2-75.7s33.8-75.7 75.2-75.7c16.2 0 30.6 5.9 42.3 15.4l33.3-33.3c-20.6-19.7-47.6-31.5-77.2-31.5-63.7 0-116 52-116 115.9 0 66.2 52 119.9 116 119.9 63.4 0 116-52 116-115.9 0-13.2-2.6-25.6-7.1-36.9z"
                              fill="#4285F4"
                            />
                            <path
                              d="M272.1 544.3c73.7 0 135.3-49.5 156.6-13.5l-33.3-33.3c-21.1 13.5-48.7 21.3-76.3 21.3-59 0-107.9-40.5-125.3-95.9H46.8v36.2c0 59.3 47.7 107.9 107.1 107.9 58.9 0 107.1-48.6 107.1-107.9z"
                              fill="#34A853"
                            />
                            <path
                              d="M46.8 286.4c0-59.3 47.7-107.9 107.1-107.9 24.6 0 46.8 8.7 64.4 22.8l33.3 33.3c-19.4 12.2-42.1 19.4-64.4 19.4-59 0-107.1-48.6-107.1-107.9v-36.2z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M272.1 46.1c40 0 73.2 13.2 89.8 28.8l33.3-33.3c-25.6-24.3-58.2-38.8-91.8-38.8-58.9 0-107.1 48.6-107.1 107.9v36.2c0-59.3 47.7-107.9 107.1-107.9z"
                              fill="#EA4335"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded mt-3 w-full lg:w-90">
                      REGISTER ACCOUNT
                    </button>
                  </div>
                </div>
                {/* Administrator Section */}
                <div className="bg-orange-100 rounded-lg shadow-xl/30 p-6">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-orange-200 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-orange-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-orange-700 mt-4">
                      ADMINISTRATOR
                    </h2>
                    <p className="text-orange-500 text-center mt-2">
                      Log in to administer donation drives, review
                      contributions, and manage donor records.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4 w-full md:w-auto">
                      ADMIN LOGIN
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded mt-3 w-full md:w-auto">
                      SUPER ADMIN LOGIN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* LOWER LANDING */}
          <section
            className="lg:h-260 w-auto text-white bg-gray-400 flex  place-content-center-safe content-center-safe"
            id="LOWER-LANDING"
          >
            <div
              className="justify-items-center content-center h-190 place-content-center-safe"
              id="LOWER-LANDING-CONTENT"
            >
              <div
                className="justify-items-center items-center p-2 mb-2"
                id="LOWER-LANDING-CONTENT-TEXT"
              >
                <div
                  className="text-4xl font-bold p-2 m-2.5"
                  id="LOWER-LANDING-CONTENT-TEXT-HEADER"
                >
                  <h1>HOW IT WORKS</h1>
                </div>
                <div
                  className="text-xl w-220 text-center"
                  id="LOWER-LANDING-CONTENT-TEXT-DESC"
                >
                  <p>
                    Discover how our donation system connects generous donors
                    with communities in need—making giving easier, faster, and
                    more transparent.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-5" id="LOWER-LANDING-CONTENT-BOX">
                <div
                  className="rounded-2xl shadow-2xl lg:size-150 bg-white flex-wrap place-content-center-safe justify-items-center-safe text-black"
                  id="LOWER-LANDING-CONTENT-BOX-1"
                >
                  <div
                    className="flex-col justify-items-center-safe border-black lg:size-40"
                    id="LOWER-LANDING-CONTENT-BOX-1-1"
                  >
                    <img
                      src="/IMAGES/logo_white.png"
                      alt
                      className="size-35 bg-black rounded-full m-5 p-2"
                    />
                    <h1 className="lg:text-2xl font-bold">For Users</h1>
                  </div>
                  <p className="lg:w-100 m-10 text-center text-2xl opacity-60">
                    Create campaigns for educational needs, emergency funds, or
                    community projects
                  </p>
                </div>
                <div
                  className="rounded-2xl shadow-2xl lg:size-150 bg-white flex-wrap place-content-center-safe justify-items-center-safe text-black"
                  id="LOWER-LANDING-CONTENT-BOX-2"
                >
                  <div
                    className="flex-col justify-items-center-safe border-black lg:size-40"
                    id="LOWER-LANDING-CONTENT-BOX-1-1"
                  >
                    <img
                      src="/IMAGES/logo_white.png"
                      alt
                      className="size-35 bg-black rounded-full m-5 p-2"
                    />
                    <h1 className="lg:text-2xl font-bold">For Donors</h1>
                  </div>
                  <p className="lg:w-100 m-10 text-center text-2xl opacity-60">
                    Support student causes that matter to you with transparent
                    donation tracking
                  </p>
                </div>
                <div
                  className="rounded-2xl shadow-2xl lg:size-150 bg-white flex-wrap place-content-center-safe justify-items-center-safe text-black"
                  id="LOWER-LANDING-CONTENT-BOX-3"
                >
                  <div
                    className="flex-col justify-items-center-safe border-black lg:size-40"
                    id="LOWER-LANDING-CONTENT-BOX-1-1"
                  >
                    <img
                      src="/IMAGES/logo_white.png"
                      alt
                      className="size-35 bg-black rounded-full m-5 p-2"
                    />
                    <h1 className="lg:text-2xl font-bold">For Admins</h1>
                  </div>
                  <p className="lg:w-100 m-10 text-center text-2xl opacity-60">
                    Manage campaigns, verify donors, and generate comprehensive
                    reports
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="p-1 flex gap-2 items-center justify-between bg-indigo-950 text-white">
          <div className="p-1 flex-wrap lg:w-screen" id="LOWER-LANDING-FOOTER">
            <div className=" p-2 flex-wrap" id="LOWER-LANDING-FOOTER-CONTENT">
              <div
                className=" flex justify-items-center items-center"
                id="LOWER-LANDING-FOOTER-CONTENT-HEADER"
              >
                <img
                  src="/IMAGES/logo_white.png"
                  alt="SYSTEM LOGO"
                  className="h-15 w-15"
                />
                <h1 className=" sm:text-50 md:text-70 lg:text-3xl">
                  Student Donation Drive Management System
                </h1>
              </div>
            </div>
            <div className=" p-2" id="LOWER-LANDING-FOOTER-CONTENT-DESCRIPTION">
              <div
                className=" p-2"
                id="LOWER-LANDING-FOOTER-CONTENT-DESCRIPTION-1"
              >
                <p>Empowering students to help students through donations.</p>
              </div>
            </div>
            <div
              className="p-1 mb-2 mt-2"
              id="LOWER-LANDING-FOOTER-CONTENT-LINE"
            >
              <hr className="border-1 border-white" />
            </div>
            <div
              className=" p-2 flex gap-2 items-center justify-between"
              id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGH"
              t
            >
              <div
                className=" p-1"
                id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGHT-1"
              >
                <p>
                  © 2024 Student Donation Drive Management System. All rights
                  reserved.
                </p>
              </div>
              <div
                className="flex gap-5 p-1 lg:w-1xl"
                id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGHT-1-ICON"
              >
                <div
                  className
                  id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGHT-1-ICON-1"
                >
                  1
                </div>
                <div
                  className
                  id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGHT-1-ICON-2"
                >
                  2
                </div>
                <div
                  className
                  id="LOWER-LANDING-FOOTER-CONTENT-COPYRIGHT-1-ICON-3"
                >
                  3
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default landing;
