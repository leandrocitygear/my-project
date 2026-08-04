import { useState } from "react";
import { useTransactions } from "../TransactionContext";
import closeIcon from "../assets/closeBlack.svg";





function ExportButton({ setShowExportForm }) {

    const { transactions } = useTransactions();

    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    

    const years = [...new Set(transactions.map(t => new Date(t.date).getUTCFullYear())
  )
].sort((a, b) => b - a);
  const months = [...new Set(transactions.map(t => new Date(t.date).getUTCMonth() + 1)
  )
].sort((a, b) => a - b);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


    
const handleSubmit = async (e) => {
    e.preventDefault();

const filteredTransactions = transactions.filter((t) => {
        const transactionDate = new Date(t.date);

        const transactionYear = transactionDate.getUTCFullYear();
        const transactionMonth = transactionDate.getUTCMonth() + 1;

        const matchesYear =
            selectedYear === "" || transactionYear === Number(selectedYear);

        const matchesMonth =
            selectedMonth === "" || transactionMonth === Number(selectedMonth);

        return matchesYear && matchesMonth;
    });


    if (filteredTransactions.length === 0) {
        alert("No transactions found for this selection.");
        return;
    }


    // Prevent CSV formatting issues with commas or quotes
    const escapeCSV = (value) => {
        return `"${String(value).replace(/"/g, '""')}"`;
    };


    const csvRows = [
        [
            "Date",
            "Type",
            "Category",
            "Description",
            "Amount"
        ],

        ...filteredTransactions.map((t) => [
            escapeCSV(new Date(t.date).toLocaleDateString()),
            escapeCSV(t.type),
            escapeCSV(t.category),
            escapeCSV(t.description),
            escapeCSV(t.amount)
        ])
    ];


    const csvContent = csvRows
        .map(row => row.join(","))
        .join("\n");


    // Create filename
    const selectedMonthName = selectedMonth
        ? monthNames[selectedMonth - 1]
        : null;


    let fileName = "transactions";


    if (selectedYear && selectedMonthName) {
        fileName += `-${selectedYear}-${selectedMonthName}`;
    } 
    else if (selectedYear) {
        fileName += `-${selectedYear}`;
    } 
    else if (selectedMonthName) {
        fileName += `-${selectedMonthName}`;
    }


    const today = new Date().toISOString().split("T")[0];

    fileName += `-${today}.csv`;


    // Download CSV
    const blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;"
    });


    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);


    setShowExportForm(false);
};



    return (
        <div className="bg-gray-300 shadow-sm absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl  w-80  p-2 ">
            
            <form onSubmit={handleSubmit} className="bg-gray-200 rounded-4xl p-6">
            <div className="flex justify-end">
                <button onClick={()=> setShowExportForm(false)} className="cursor-pointer border border-transparent rounded-lg hover:bg-gray-500" title="Close Form"><img src={closeIcon} alt="" /></button>
            </div>
            <h1 className="text-xl font-semibold text-center text-black">Export Data</h1>
                <div className="grid grid-cols-1 content-between gap-4">
                    <label className="text-xl font-semibold text-black"  htmlFor="Year">Select Year: </label>
                     <select className="bg-gray-500 px-2 py-1 rounded-full" name="year" id="" value={selectedYear}  onChange={(e) => setSelectedYear(e.target.value)}>
                <option value="">All Years</option>
                {years.map(year => (
                <option key={year} value={year}>
                {year}
                </option>
                ))}
            </select>



                    <label className="text-xl font-semibold text-black"  htmlFor="Month">Select Month: </label>
                    <select className="bg-gray-500 px-2 py-1 rounded-full" name="month" id="" value={selectedMonth} 
            onChange={(e) => setSelectedMonth(e.target.value)}>
                <option value="">All Months</option>
                {months.map(month => (
                <option key={month} value={month}>
                {monthNames[month - 1]}
                </option>
                ))}

                
                
            </select>
                    

                     <input className="text-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 font-semibold py-1 text-white rounded-4xl " type="submit" value="Download Data" />
                </div>
            </form>


        </div>
    )
}

export default ExportButton;