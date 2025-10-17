

function RecentTransactions () {

    const transactionsMockData = [
        { date: "Oct 15, 2025", description: "Freelance Project", category: "Deposit", type: "Income", amount: "+ $500.00" },
        { date: "Oct 12, 2025", description: "Groceries", category: "Food", type: "Expense", amount: "- $80.00" },
        { date: "Oct 10, 2025", description: "Water bill", category: "Utility", type: "Expense", amount: "- $40.00" },
        { date: "Oct 9, 2025", description: "Work", category: "Paycheck", type: "Income", amount: "+ $2380.00" }


    ]

    return (
        <div className="bg-white p-4 rounded-lg shadow  lg:col-span-2 h-80">
            <h4 className="text-lg font-semibold ">Recent Transactions</h4>
             <div className="overflow-x-auto">
    <table className="min-w-full">
      <thead>
        <tr className="border-b border-gray-400 text-left text-sm tracking-wider">
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
          <td className={`py-3 px-4 text-right text-emerald-600 font-semibold ${t.type === "Income" ? "text-emerald-600" : "text-red-500"}`}>{t.amount}</td>
        </tr>
       
    ))}
      </tbody>
    </table>
  </div>
        </div>
        
    )
}

export default RecentTransactions;