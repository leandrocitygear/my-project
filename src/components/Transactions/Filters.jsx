import { useTransactions } from "../../TransactionContext"

function Filters({ filters, setFilters }) {

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
        <div className="flex gap-3 p-2 bg-gray-300 shadow-sm rounded-md absolute z-1 m-1 ">
            <select name="month" id="" value={filters.month} 
            onChange={(e) => {
            setFilters(prev => ({
                ...prev,
                month: e.target.value
            }));
            setCurrentPage(1);
            }}>
                <option value="">All Months</option>
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