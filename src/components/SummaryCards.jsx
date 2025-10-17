


function SummaryCards() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div className="bg-white shadow p-4 rounded-lg">
                <h3 className="text-sm text-gray-500">Total Balance</h3>
                <p className="text-2xl font-bold text-emerald-600">$4,520.00</p>
            </div>
            <div className="bg-white shadow p-4 rounded-lg">
                <h3 className="text-sm text-gray-500">Income(Month)</h3>
                <p className="text-2xl font-bold text-emerald-600">$2,400.00</p>
            </div>
            <div className="bg-white shadow p-4 rounded-lg">
                <h3 className="text-sm text-gray-500">Expenses(Month)</h3>
                <p className="text-2xl font-bold text-red-500">$1,800.00</p>
            </div>
            <div className="bg-white shadow p-4 rounded-lg">
                <h3 className="text-sm text-gray-500">Savings Rate</h3>
                <p className="text-2xl font-bold text-blue-500">24%</p>
            </div>
        </div>
    )
}

export default SummaryCards