import { useState } from "react";
import { Link } from "react-router";
import { transactionsMockData } from "../../MockData";
import transactionsIcon from "../../assets/attach_money_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg";

function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const sortedTransactions = [...transactionsMockData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedTransactions.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="bg-white p-4 rounded-lg shadow  h-[calc(100vh-2rem)] flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 flex-shrink-0">
        <div className="flex items-center gap-2">
          <img src={transactionsIcon} alt="Transactions" className="w-6 h-6" />
          <h1 className="text-3xl font-medium">Transactions</h1>
        </div>
        <Link
          to="/addtransaction"
          className="cursor-pointer bg-emerald-600 text-white px-2 py-2 text-xs sm:text-base rounded-lg font-semibold hover:bg-emerald-700 transition"
        >
          Add Transaction
        </Link>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-y-auto mt-2">
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
          <tbody>
            {currentItems.map((t, i) => (
              <tr
                key={i}
                className="border-b border-gray-300 hover:bg-gray-50 text-gray-700"
              >
                <td className="py-3 px-4">{t.date}</td>
                <td className="py-3 px-4">{t.description}</td>
                <td className="py-3 px-4">{t.category}</td>
                <td
                  className={`py-3 px-4 font-medium ${
                    t.type === "Income" ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {t.type}
                </td>
                <td
                  className={`py-3 px-4 text-right font-semibold ${
                    t.type === "Income" ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {t.type === "Income" ? "+" : "-"}
                  {t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-3">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TransactionsTable;
