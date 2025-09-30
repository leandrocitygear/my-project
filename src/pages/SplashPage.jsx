import chartIcon from "../assets/bar_chart_4_bars_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg";
import cloudIcon from "../assets/cloud_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import moneyIcon from "../assets/attach_money_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import csvIcon from "../assets/download_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import bellIcon from "../assets/notification_sound_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"


function SplashPage() {

    return (

        <div className="h-screen flex flex-col">
            <header className="w-full bg-emerald-600 text-white px-8 py-4 flex justify-between items-center shadow">
                <h1 className="text-base sm:text-2xl font-bold">Personal Finance Tracker</h1>
                <nav>
                <a href="/login" className="bg-white text-emerald-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                    Log In
                </a>
                </nav>
         </header>
        <main className="pt-8 flex-1 flex flex-col justify-center items-center text-center bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Take Control of Your Finances
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Track your income, expenses, and budgets with clean visual reports. Stay on top of your money with ease.
        </p>
        <section className="flex gap-4">	
          <a
            href="/login"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="bg-white text-emerald-600 border border-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </section>
      

      <section id="features" className=" py-16 px-6 md:px-12">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
          Features Designed for You
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center flex-col p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h4 className="flex items-center text-lg font-semibold text-emerald-600 mb-2"> <img src={moneyIcon} alt="money icon" className="w-5 h-5 mr-1"/>Track Transactions</h4>
            <p className="text-gray-700">Easily log income and expenses with categories and dates.</p>
          </div>
          <div className="flex items-center flex-col p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h4 className="flex items-center text-lg font-semibold text-emerald-600 mb-2"> <img src={chartIcon} alt="chart icon" className="w-5 h-5 mr-1" />Visual Reports</h4>
            <p className="text-gray-700">See clear charts that show where your money is going.</p>
          </div>
          <div className="flex items-center flex-col p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h4 className="flex items-center text-lg font-semibold text-emerald-600 mb-2"> <img src={cloudIcon} alt="cloud icon" className="w-5 h-5 mr-1" />Cloud Sync</h4>
            <p className="text-gray-700">Securely save your data with Firebase for access anywhere.</p>
          </div>
          <article className="flex items-center flex-col p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h4 className="flex items-center text-lg font-semibold text-emerald-600 mb-2"> <img src={csvIcon} alt="csv Icon" className="w-5 h-5 mr-1" />Export Data</h4>
            <p className="text-gray-700">Download your data anytime as a CSV ready to use</p>
          </article>
          <article className="flex items-center flex-col p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h4 className="flex items-center text-lg font-semibold text-emerald-600 mb-2"><img src={bellIcon} alt="Notification icon" className="w-5 h-5 mr-1"/>Budget Alerts</h4>
            <p className="text-gray-700">Get notified of budget limits</p>
          </article>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-700 text-gray-200 py-6 text-center">
        <p>© {new Date().getFullYear()} Personal Finance Tracker. All rights reserved.</p>
      </footer>

        </div>
    )
}

export default SplashPage