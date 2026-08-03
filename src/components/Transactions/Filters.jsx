import { useTransactions } from "../../TransactionContext"

function Filters({ filters, setFilters, setCurrentPage }) {

  const { transactions } = useTransactions();

  const categories = [...new Set(transactions.map(t => t.category))];
  const types = [...new Set(transactions.map(t => t.type))];
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


    return (
        <div className="grid grid-cols-1 gap-3 p-4 bg-gray-300 shadow-sm absolute sm:m-1 z-10 top-1/2 sm:top-auto left-1/2 sm:left-auto -translate-x-1/2 -translate-y-1/2 sm:translate-y-0 sm:translate-x-0 rounded-4xl">
            <select name="month" id="" value={filters.month} 
            onChange={(e) => {
            setFilters(prev => ({
                ...prev,
                month: e.target.value
            }));
            setCurrentPage(1);
            }}>
                <option className="border-2 border-red-500" value="">All Months</option>
                {months.map(month => (
                <option key={month} value={month}>
                {monthNames[month - 1]}
                </option>
                ))}

                
                
            </select>

            <select name="year" id="" value={filters.year}  onChange={(e) => {
            setFilters(prev => ({
                ...prev,
                year: e.target.value
            }));
            setCurrentPage(1);
            }}>
                <option value="">All Years</option>
                {years.map(year => (
                <option key={year} value={year}>
                {year}
                </option>
                ))}
            </select>

            <select name="category" id="" value={filters.category} onChange={(e) => {
            setFilters(prev => ({
                ...prev,
                category: e.target.value
            }));
            setCurrentPage(1);
            }}>
                <option value="">All Categories</option>
                {categories.map(category => (
                <option key={category} value={category}>
                {category}
                </option>
                ))}
            </select>

            <select name="type" id="" value={filters.type}  onChange={(e) => {
            setFilters(prev => ({
                ...prev,
                type: e.target.value
            }));
            setCurrentPage(1);
            }}>
                <option value="">All Types</option>
                {types.map(type => (
                <option key={type} value={type}>
                {type}
                </option>
                ))}
            </select>

        </div>
    )
}

export default Filters