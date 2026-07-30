import { useEffect, useState, useRef } from "react";
import Filters from "./Filters";
import transactionsIcon from "../../assets/attach_money_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg";
import AddTransactionForm from "./AddTransactionForm";
import closeIcon from "../../assets/closeBlack.svg"
import DeleteEditTransaction from "./DeleteEditTransaction";
import { useTransactions } from "../../TransactionContext";


function RecentTransactions () {
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [sortOrder, setSortOrder] = useState("recent");
  const [showFilters, setShowFilters] = useState(false);
  const [showAddTransForm, setShowAddTransForm] = useState(false);
  const [showDeleteEditBox, setShowDeleteEditBox] = useState(false);
  const [filters, setFilters] = useState({
    month: "",
    year: "",
    category: "",
    type: ""
  });


  const itemsPerPage = 25;
  const { transactions } = useTransactions();

  const sortedTransactions = [...transactions].sort(
    (a, b) => {
      return sortOrder === "recent" ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date);
    }
  );
  
  const filteredTransactions = sortedTransactions.filter(t => {

  const date = new Date(t.date);

  return (
    (!filters.month || date.getUTCMonth() + 1 === Number(filters.month)) &&
    (!filters.year || date.getUTCFullYear() === Number(filters.year)) &&
    (!filters.category || t.category === filters.category) &&
    (!filters.type || t.type === filters.type)
  );

});

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

   const filtersRef = useRef();
  const sortRef = useRef();
  const addRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      // Close filters if clicked outside filters
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setShowFilters(false);
      }

      // Close sort if clicked outside sort
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShow(false);
      }

      if (addRef.current && !addRef.current.contains(event.target)) {
        setShowAddTransForm(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
        <div className="bg-white p-4 rounded-lg shadow flex flex-col lg:col-span-2 min-w-0 min-h-0 lg:h-[75vh]">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2 flex-shrink-0">
            <div className="flex items-center gap">
              <img src={transactionsIcon} alt="Transactions" className="w-6 h-6" />
              <h1 className="text-3xl font-medium">Transactions</h1>
            </div>
            {showDeleteEditBox && (
              <div className=" flex items-center bg-gray-300  px-2 py-1 rounded-4xl gap-2"> 
              <DeleteEditTransaction/>
          
              <button onClick={() => {setShowDeleteEditBox(false)}} className="cursor-pointer border border-transparent rounded-lg hover:bg-gray-500" title="Close Form"><img src={closeIcon} alt="" /></button>
            
            </div>
            )}
            <div className="flex gap-2">
              <div ref={filtersRef}>
                <button className="cursor-pointer bg-gray-500 text-white px-2 py-2 text-xs sm:text-base rounded-lg font-semibold hover:bg-gray-600 transition" onClick={() => {
                  setShowFilters(!showFilters);
                  setShow(false);
                  setShowAddTransForm(false);
                  }}>
                  Filters
                </button>
                {showFilters && (
                  <Filters filters={filters} setFilters={setFilters} />

                )}
              </div>

              <div>
            <button ref={sortRef} className="cursor-pointer bg-gray-500 text-white px-2 py-2 text-xs sm:text-base rounded-lg font-semibold hover:bg-gray-600 transition" onClick={() => {
              setShow(!show);
              setShowFilters(false);
              setShowAddTransForm(false);
              }}>
              Sort
            </button>
            {show && (
            <div className="absolute z-2 bg-gray-300 flex flex-col rounded-lg mt-1" >
              <button className="block px-2 py-2 hover:bg-gray-400 transition cursor-pointer" onClick={() => {
                setSortOrder("recent");
                setShow(false)
                setCurrentPage(1)
                }}>Most Recent
              </button>
              <button className="block px-2 py-2 hover:bg-gray-400 transition cursor-pointer" onClick={() => {
                setSortOrder("oldest");
                setShow(false)
                setCurrentPage(1)
                }}>Oldest
              </button>
            </div>
            )}
              </div>
            
            <div ref={addRef} className="flex">
            <button className="cursor-pointer bg-emerald-600 text-white px-2 py-2 text-xs sm:text-base rounded-lg font-semibold hover:bg-emerald-700" onClick={() => {
              setShowAddTransForm(!showAddTransForm);
              setShow(false);
              setShowFilters(false);
            }}>
              Add Transaction
            </button>

              {showAddTransForm && (
                <div className="bg-gray-300 shadow-sm absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl  w-80  p-6">
                  <div className="flex justify-end">
                  <button onClick={()=> setShowAddTransForm(false)} className="cursor-pointer border border-transparent rounded-lg hover:bg-gray-500" title="Close Form"><img src={closeIcon} alt="" /></button>
                  </div>
                  <AddTransactionForm 
                  user={JSON.parse(localStorage.getItem("user") || "null")}
                  setShowAddTransForm={setShowAddTransForm}
                  />
                  
                </div>
                )}
            </div>

            </div>
          </div>

          {/* Table */}
          <div className="flex-1 min-h-0 min-w-0 overflow-auto mt-2">
            <table className="w-full min-w-0 border-collapse">
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
                    className="border-b border-gray-300 hover:bg-gray-50 text-gray-700 cursor-pointer"
                    onClick={() =>{setShowDeleteEditBox(!showDeleteEditBox)}}
                  >
                    <td className="py-3 px-4">{new Date(t.date).toLocaleDateString("en-US", {
                      timeZone: "UTC",
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    })}</td>
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
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50 cursor-pointer">
              Prev
            </button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
  )
};

export default RecentTransactions;