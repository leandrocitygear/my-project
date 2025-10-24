import { Link } from "react-router";


function RecentTransactions () {

    const transactionsMockData = [
        { date: "Oct 15, 2025", description: "Freelance Project", category: "Deposit", type: "Income", amount: "$500.00" },
        { date: "Oct 12, 2025", description: "Groceries", category: "Food", type: "Expense", amount: "$80.00" },
        { date: "Oct 10, 2025", description: "Water bill", category: "Utility", type: "Expense", amount: "$40.00" },
        { date: "Oct 9, 2025", description: "Work", category: "Paycheck", type: "Income", amount: "$2380.00" },
        { date: "Oct 3, 2025", description: "Friend send money", category: "Venmo", type: "Income", amount: "$180.00" },
        { date: "Oct 2, 2025", description: "Subway", category: "Food", type: "Expense", amount: "$20.00" },

    ]

    return (
        <div className="bg-white p-4 rounded-lg shadow  lg:col-span-2 max-h-80">

          <div className="flex justify-between items-center p-2">
            <h4 className="text-lg font-semibold ">Recent Transactions</h4>
            <Link to="/transactions" className="cursor-pointer bg-gray-400 text-white px-2 py-2 text-xs sm:text-base rounded-lg font-semibold hover:bg-gray-600 transition">
              View All Transactions
            </Link>
            <Link to="/addtransaction" className="cursor-pointer bg-emerald-600 text-white px-2 py-2 text-xs sm:text-base rounded-lg font-semibold hover:bg-emerald-700 transition">
              Add Transaction
            </Link>
          </div>

             <div className="h-[calc(100%-3rem)] overflow-y-auto">
    <table className="min-w-full border-collapse">
      <thead className="sticky top-0 border-b border-gray-400 text-left text-sm tracking-wider bg-gray-100">
        <tr>
          <th className="py-3 px-4">Date</th>
          <th className="py-3 px-4">Description</th>
          <th className="py-3 px-4">Category</th>
          <th className="py-3 px-4">Type</th>
          <th className="py-3 px-4 text-right">Amount</th>
        </tr>
      </thead>
      <tbody >
        {transactionsMockData.map((t) => (
        <tr key={t.id} className="border-b border-gray-300 hover:bg-gray-50 text-gray-700">
          <td className="py-3 px-4">{t.date}</td>
          <td className="py-3 px-4">{t.description}</td>
          <td className="py-3 px-4">{t.category}</td>
          <td className={`py-3 px-4 text-emerald-600 font-medium ${t.type === "Income" ? "text-emerald-600" : "text-red-500"}`}>{t.type}</td>
          <td className={`py-3 px-4 text-right text-emerald-600 font-semibold ${t.type === "Income" ? "text-emerald-600" : "text-red-500"}`}>{t.type === "Income" ? "+" : "-"}{t.amount}</td>
        </tr>
       
    ))}
      </tbody>
    </table>
  </div>
        </div>
        
    )
}

export default RecentTransactions;