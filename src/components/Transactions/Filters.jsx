

function Filters() {

    return (
        <div className="flex gap-3 p-2 bg-gray-300 shadow-sm rounded-md absolute z-1 m-1 right-40">
            <select name="month" id="">
                <option value="">All Months</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>

            <select name="year" id="">
                <option value="">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
            </select>

            <select name="Category" id="">
                <option value="">All Categories</option>
                <option value="Food">Food</option>
                <option value="Bills">Bills</option>
                <option value="Salary">Salary</option>
                <option value="Rent">Rent</option>
                <option value="Car">Car</option>
            </select>

            <select name="type" id="">
                <option value="">All Types</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>

        </div>
    )
}

export default Filters