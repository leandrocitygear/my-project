import RecentTransactions from "./Transactions/RecentTransactions";
import CategoryPieChart from "./Charts/CategoryPieChart.jsx"


function TransactionBudgetSection () {


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 row-span-1">
            <RecentTransactions />
            <CategoryPieChart />
        </div>
    )
}  


export default TransactionBudgetSection;