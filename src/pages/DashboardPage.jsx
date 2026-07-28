import dashboardIcon from "../assets/dashboard_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg";
import SummaryCards from "../components/SummaryCards";
import RecentTransactions from "../components/Transactions/RecentTransactions.jsx"
import CategoryPieChart from "../components/Charts/CategoryPieChart";




function DashboardPage() {


    return(
        <div className="lg:pl-16 lg:pr-16 space-y-6 border-2 h-full w-full">
            <div className="flex items-center mb-6" >
                <img src={dashboardIcon} alt="" />
            <h1 className="text-3xl font-medium ">Dashboard</h1>
            </div>
            <SummaryCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 row-span-1 border-2 h-full w-full border-red-400">
            <RecentTransactions />
            <CategoryPieChart />
            </div>
        </div>
    )
}

export default DashboardPage
