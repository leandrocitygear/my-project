import dashboardIcon from "../assets/dashboard_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg";
import SummaryCards from "../components/SummaryCards";
import RecentTransactions from "../components/Transactions/RecentTransactions.jsx"
import CategoryPieChart from "../components/Charts/CategoryPieChart";




function DashboardPage() {


    return(
        <div className="lg:px-16 space-y-6 p-4 min-h-0 min-w-0 rounded-lg shadow bg-gray-200 h-[calc(100vh-2rem)]">
            <div className="flex items-center" >
                <img src={dashboardIcon} alt="" />
            <h1 className="text-3xl font-medium ">Dashboard</h1>
            </div>
            <SummaryCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-w-0">
                <RecentTransactions />
                <CategoryPieChart />
            </div>
        </div>
    )
}

export default DashboardPage
