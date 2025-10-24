import dashboardIcon from "../assets/dashboard_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg";
import ChartsSection from "../components/Charts/ChartsSection";
import SummaryCards from "../components/SummaryCards";
import TransactionBudgetSection from "../components/TransactionBudgetSection";




function DashboardPage() {


    return(
        <div className="lg:pl-16 lg:pr-16 space-y-6 pb-16">
            <div className="flex items-center mb-6" >
                <img src={dashboardIcon} alt="" />
            <h1 className="text-3xl font-medium ">Dashboard</h1>
            </div>
            <SummaryCards />
            <div className="grid gap-6 lg:grid-rows-2">
            <ChartsSection />
            <TransactionBudgetSection />
            </div>
        </div>
    )
}

export default DashboardPage
