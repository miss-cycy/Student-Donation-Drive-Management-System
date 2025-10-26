import React from "react";

const CreateCam = () => {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Donor Dashboard</title>
        <link rel="stylesheet" href="../src/output.css" />
        <header className="lg:pl-10 lg:p-2 pl-5 border-b-2 flex items-center-safe justify-between bg-indigo-950">
          <div className="sm:w-50 lg:w-100 flex border-amber-50 place-content-center-safe rounded-2xl items-center-safe">
            <img
              src="../IMAGES/logo_white.png"
              alt="notification_bell"
              className="sm:size-2 lg:size-8"
            />
            <h1 className="text-3xl font-bold text-white mx-2">
              Welcome Back, Stephani
            </h1>
          </div>
          <div className="flex gap-2 mx-5 content-center-safe">
            <a href="../LOGIN/login_donor.html">
              <div className="flex border-2 lg:w-30 p-2 items-center-safe space-x-3 font-bold text-white rounded-2xl place-content-center-safe">
                <div className="lg:size-8 border-2 rounded-4xl bg-white" />
                <h1 className="text-xl">logout</h1>
              </div>
            </a>
          </div>
        </header>
        <main className="p-5">
          {/* Campaign Information */}
          <div className="sm:p-2 p-5">
            <span className="text-xl font-bold opacity-50 sm:p-2 lg:p-5">
              CREATE YOUR CAMPAIGN
            </span>
            <div className="sm:py-5 lg:pl-10 lg:p-5 pl-5 shadow-xl/30 space-y-5 rounded-2xl">
              <h1 className="text-xl font-bold text-indigo-950 my-5">
                Campaign Information
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
                <div className="sm:flex flex-col">
                  <label htmlFor="Campaing-title">Campaign Title</label>
                  <input
                    type="text"
                    name="Campaign Title"
                    className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100"
                  />
                </div>
                <div className="sm:flex flex-col">
                  <label htmlFor="Campaing-title">Category:</label>
                  <select
                    id="category"
                    className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100"
                  >
                    <option>Select Category</option>
                    <option>Medical</option>
                    <option>Education</option>
                    <option>Disaster Relief</option>
                  </select>
                </div>
                <div className="sm:flex flex-col">
                  <label htmlFor="Campaing-title">Deadline:</label>
                  <input
                    type="date"
                    name="Campaign Title"
                    className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="sm:flex flex-col">
                  <label htmlFor="Campaing-title">Short Description</label>
                  <input
                    type="text"
                    name="Campaign Title"
                    className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-95 h-10 lg:h-50"
                  />
                </div>
                <div className="sm:flex flex-col">
                  <label htmlFor="Campaing-title">Image Upload:</label>
                  <input
                    type="image"
                    name="Campaign Title"
                    className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-95 h-10 lg:h-50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="sm:flex flex-col">
                  <label htmlFor="Campaing-title">Full Story:</label>
                  <input
                    type="text"
                    name="Campaign Title"
                    className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-95 h-10 lg:h-20"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Donation Type details */}
          <div className="sm:p-2 lg:p-5 ">
            <div className=" lg:pl-10 lg:p-5 pl-5 shadow-xl/30 space-y-5 rounded-2xl">
              <h1 className="text-xl font-bold text-indigo-950 my-5">
                Donation Type Details
              </h1>
              <div className="grid grid-cols-2">
                <div>
                  <input
                    type="checkbox"
                    name="Cash"
                    id="CheckBox1"
                    className="size-auto lg:size-5"
                  />
                  <span className="text-xl">Cash</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="Cash"
                    id="CheckBox1"
                    className="size-auto lg:size-5"
                  />
                  <span className="text-xl">Goods</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-10 mb-10">
                <div className="grid grid-row-3 space-y-5">
                  <div className="flex flex-col">
                    <label htmlFor="Goal-amount">Goal Amount</label>
                    <input
                      type="text"
                      name="Campaign Title"
                      className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Goal-amount">Goal Amount</label>
                    <input
                      type="text"
                      name="Campaign Title"
                      className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Goal-amount">Goal Amount</label>
                    <input
                      type="text"
                      name="Campaign Title"
                      className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100"
                    />
                  </div>
                </div>
                <div className="grid grid-row-3 space-y-5">
                  <div className="flex flex-col">
                    <label htmlFor="Gcash-QR">Upload GCASH QR:</label>
                    <input
                      type="image"
                      name="Campaign Title"
                      className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100 h-10 lg:h-50"
                    />
                  </div>
                </div>
                <div className="grid grid-row-3 space-y-5">
                  <div className="flex flex-col">
                    <label htmlFor="Gcash-QR">Accepted Good Lists:</label>
                    <input
                      type="text"
                      name="Campaign Title"
                      className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100 h-10 lg:h-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Donation Type details */}
          <div className="sm:p-2 lg:p-5 ">
            <div className=" lg:pl-10 lg:p-5 pl-5 shadow-xl/30 space-y-5 rounded-2xl">
              <h1 className="text-xl font-bold text-indigo-950 my-5">
                Donation Type Details
              </h1>
              <div className="grid grid-cols-2">
                <div>
                  <input
                    type="checkbox"
                    name="Cash"
                    id="CheckBox1"
                    className="size-auto lg:size-5"
                  />
                  <span className="text-xl">Cash</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="Cash"
                    id="CheckBox1"
                    className="size-auto lg:size-5"
                  />
                  <span className="text-xl">Goods</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-10 mb-10">
                <div className="grid grid-row-3 space-y-5">
                  <div className="flex flex-col">
                    <label htmlFor="Goal-amount">Goal Amount</label>
                    <input
                      type="text"
                      name="Campaign Title"
                      className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Goal-amount">Goal Amount</label>
                    <input
                      type="text"
                      name="Campaign Title"
                      className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Goal-amount">Goal Amount</label>
                    <input
                      type="text"
                      name="Campaign Title"
                      className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100"
                    />
                  </div>
                </div>
                <div className="grid grid-row-3 space-y-5">
                  <div className="flex flex-col">
                    <label htmlFor="Gcash-QR">Upload GCASH QR:</label>
                    <input
                      type="image"
                      name="Campaign Title"
                      className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100 h-10 lg:h-50"
                    />
                  </div>
                </div>
                <div className="grid grid-row-3 space-y-5">
                  <div className="flex flex-col">
                    <label htmlFor="Gcash-QR">Accepted Good Lists:</label>
                    <input
                      type="text"
                      name="Campaign Title"
                      className="border-1 rounded-md p-1 lg:p-2 w-auto lg:w-100 h-10 lg:h-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateCam;
