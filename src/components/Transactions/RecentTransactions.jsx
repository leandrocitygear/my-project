

function RecentTransactions () {

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
      <tbody>
        <tr className="border-b border-gray-300 hover:bg-gray-50 text-gray-700">
          <td className="py-3 px-4">Oct 15, 2025</td>
          <td className="py-3 px-4">Freelance Project</td>
          <td className="py-3 px-4">Deposit</td>
          <td className="py-3 px-4 text-emerald-600 font-medium">Income</td>
          <td className="py-3 px-4 text-right text-emerald-600 font-semibold">+$500.00</td>
        </tr>
        <tr className="border-b border-gray-300 hover:bg-gray-50 text-gray-700">
          <td className="py-3 px-4">Oct 12, 2025</td>
          <td className="py-3 px-4">Groceries</td>
          <td className="py-3 px-4">Food</td>
          <td className="py-3 px-4 text-red-500 font-medium">Expense</td>
          <td className="py-3 px-4 text-right text-red-500 font-semibold">- $80.00</td>
        </tr>
        {/* map() more transactions here */}
      </tbody>
    </table>
  </div>
        </div>
        
    )
}

export default RecentTransactions;