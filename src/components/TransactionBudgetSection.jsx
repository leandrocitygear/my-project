import BudgetProgress from "./BudgetProgress";
import RecentTransactions from "./Transactions/RecentTransactions";


function TransactionBudgetSection () {


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 row-span-1">
            <RecentTransactions />
            <BudgetProgress />
        </div>
    )
}  


export default TransactionBudgetSection;