import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleDonorLogin = () => {
    navigate("/donor-login");
  };
  const handleLOGINADMIN = () => {
    navigate("/loginadmin");
  };
  const handleDonorRegistration = () => {
    navigate("/donor-registration");
  };
  const handleSuperAdminLogin = () => {
    navigate("/superadmin-login");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-lg"> {/* Increased base text size */}
      
     {/* HEADER */}
      <header className="bg-indigo-950 text-white flex justify-between items-center px-10 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/logo_white.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">SDDMS</h1>
        </div>

        <nav className="flex gap-8 text-lg font-semibold">
          <a href="#" className="hover:text-indigo-300">
            ABOUT US
          </a>
          <a href="#" className="hover:text-indigo-300">
            CONTACT
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center flex flex-col justify-center items-center text-white px-12 py-28 md:flex-row md:items-start md:justify-center gap-56"
        style={{ backgroundImage: "url('/BUKSU.jpg')" }}
      >
        <div className="absolute inset-0 bg-indigo-950/55"></div>

        {/* LEFT SIDE - TEXT */}
        <div className="relative z-10 text-left md:w-1/2 space-y-8">
          <h1 className="mt-1 text-5xl md:text-6xl font-bold leading-tight">
            Student Donation Drive Management System
          </h1>
          <p className="mt-10 text-xl text-gray-200 leading-relaxed">
            An easy-to-use platform where donors can contribute and track their
            impact, while administrators manage drives, monitor contributions,
            and ensure accountability in every donation.
          </p>
          <button className="mt-110 bg-white text-indigo-950 font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-indigo-100 transition text-lg">
            EXPLORE CAMPAIGNS
          </button>
        </div>

        {/* RIGHT SIDE - LOGIN CARDS */}
        <div className="flex flex-col items-center gap-8 bg-white/10 rounded-3xl mt-12 p-4">

          {/* DONOR CARD */}
          <div className="relative bg-white text-gray-800 rounded-2xl shadow-lg p-7 w-[26rem] border-l-[10px] border-indigo-900">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-indigo-900">DONORS</h2>
              <p className="text-center text-gray-600 text-base mt-3">
                Access your dashboard to track your impact and manage your donations.
              </p>

              <div className="flex flex-col items-center w-full">
                <div className="flex items-center w-full mt-5 gap-3">
                  <button
                    onClick={handleDonorLogin}
                    className="flex-1 bg-indigo-950 text-white font-bold py-3 rounded-lg hover:bg-indigo-900 transition text-base"
                  >
                    DONOR LOGIN
                  </button>
                  
                  <button
                    className="p-3 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 hover:shadow-md transition"
                    title="Sign in with Google"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
                      <path fill="#EA4335" d="M24 9.5c3.94 0 7.05 1.64 9.14 3.02l6.81-6.81C35.65 2.5 30.24 0 24 0 14.74 0 6.77 5.64 3.02 13.82l7.96 6.19C12.9 14.4 17.98 9.5 24 9.5z"/>
                      <path fill="#34A853" d="M46.98 24.5c0-1.55-.14-3.05-.39-4.5H24v9h13.14c-.58 2.96-2.32 5.47-4.91 7.18l7.61 5.9C44.07 38.15 46.98 31.84 46.98 24.5z"/>
                      <path fill="#FBBC05" d="M9.18 28.01A14.48 14.48 0 019 24c0-1.39.22-2.73.61-4l-7.96-6.19A23.88 23.88 0 000 24c0 3.83.9 7.45 2.49 10.68l7.96-6.67z"/>
                      <path fill="#4285F4" d="M24 48c6.24 0 11.53-2.06 15.38-5.59l-7.61-5.9C29.42 38.49 26.82 39.5 24 39.5c-6.02 0-11.1-4.9-12.98-11.51l-7.96 6.67C6.77 42.36 14.74 48 24 48z"/>
                    </svg>
                  </button>
                </div>

                <button 
                  onClick={handleDonorRegistration}
                  className="w-full border-2 border-indigo-950 text-indigo-950 font-bold py-3 rounded-lg mt-4 hover:bg-indigo-50 transition text-base">
                  REGISTER ACCOUNT
                </button>
              </div>
            </div>
          </div>

          {/* ADMIN CARD */}
          <div className="relative bg-white bg-opacity-95 text-gray-800 rounded-2xl shadow-lg p-7 w-[26rem] border-l-[10px] border-orange-500">
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-orange-700">ADMINISTRATOR</h2>
              <p className="text-center text-gray-600 text-base mt-3">
                Log in to administer donation drives, review contributions, and manage donor records.
              </p>

              <button 
                onClick={handleLOGINADMIN}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg mt-4 transition text-base">
                ADMIN LOGIN
              </button>
              <button 
                onClick={handleSuperAdminLogin} 
                className="w-full border-2 border-orange-500 text-orange-600 font-bold py-3 rounded-lg mt-3 hover:bg-orange-50 transition text-base">
                SUPER ADMIN LOGIN
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-gray-100 text-center py-20 px-8">
        <h2 className="text-4xl font-bold text-indigo-950 mb-6">HOW IT WORKS</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Discover how our donation system connects generous donors with
          communities in need — making giving easier, faster, and more
          transparent.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "For Users",
              desc: "Create campaigns for educational needs, emergency funds, or community projects.",
            },
            {
              title: "For Donors",
              desc: "Support student causes that matter to you with transparent donation tracking.",
            },
            {
              title: "For Admins",
              desc: "Manage campaigns, verify donors, and generate comprehensive reports.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-2xl shadow-md p-10 flex flex-col items-center"
            >
              <div className="bg-orange-100 p-5 rounded-full mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                  2 6 4 4 6.5 4A4.5 4.5 0 0112 6.09 
                  4.5 4.5 0 0117.5 4C20 4 22 6 22 8.5
                  c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-center text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-indigo-950 text-white py-8 px-14 text-center md:text-left text-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img src="/logo_white.png" alt="Logo" className="w-14 h-14" />
            <h3 className="text-xl font-semibold">
              Student Donation Drive Management System
            </h3>
          </div>
          <p className="text-base text-gray-300">
            Empowering students to help students through donations.
          </p>
        </div>
        <hr className="border-gray-500 my-4" />
        <p className="text-base text-gray-400">
          © 2025 Student Donation Drive Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
