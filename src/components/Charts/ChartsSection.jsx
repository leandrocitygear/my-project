import CategoryPieChart from "./CategoryPieChart"
import IncomeExpenseChart from "./IncomeExpenseChart"


function ChartsSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 row-span-1 ">
                <IncomeExpenseChart />
                <CategoryPieChart />
                
        </div>
    )
}

export default ChartsSection