import { Link } from "react-router";
import { transactionsMockData } from "../../MockData";
import { useState, useRef, useEffect } from "react";
import AddTransactionForm from "./AddTransactionForm";
import closeIcon from "../../assets/closeBlack.svg"



function RecentTransactions () {
    const [showAddTransForm, setShowAddTransForm] = useState(false);

    const addRef = useRef();

    useEffect(() => {
    function handleClickOutside(event) {
      if (addRef.current && !addRef.current.contains(event.target)) {
        setShowAddTransForm(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  const itemsPerPage = 25;

   const sortedTransactions = [...transactionsMockData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
  
  const mostRecent = sortedTransactions.slice(0, itemsPerPage)

    return (
        <div className="bg-white p-4 rounded-lg shadow  lg:col-span-2 max-h-80">

          <div className="flex justify-between items-center p-2">
            <h4 className="text-lg font-semibold ">Recent Transactions</h4>
            <div className="flex gap-2">
            <Link to="/transactions" className="cursor-pointer bg-gray-500 text-white px-2 py-2 text-xs sm:text-base rounded-lg font-semibold hover:bg-gray-600 transition">
              View All Transactions
            </Link>

            <div ref={addRef} className="flex">
            <button onClick={() => {
              setShowAddTransForm(!showAddTransForm);
              }} className="cursor-pointer bg-emerald-600 text-white px-2 py-2 text-xs sm:text-base rounded-lg font-semibold hover:bg-emerald-700 transition">
              Add Transaction
            </button>

             {showAddTransForm && (
                <div className="bg-gray-300 shadow-sm absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl  w-80  p-6">
                  <div className="flex justify-end">
                  <button onClick={()=> setShowAddTransForm(false)} className="cursor-pointer border border-transparent rounded-lg hover:bg-gray-500" title="Close Form"><img src={closeIcon} alt="" /></button>
                  </div>
                  <AddTransactionForm />
                  
                </div>
                )}
            </div>
            </div>
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
        {mostRecent.map((t, i) => (
        <tr key={i} className="border-b border-gray-300 hover:bg-gray-50 text-gray-700">
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