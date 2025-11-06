

function AddTransactionForm() {

    return (
        <div>

            <form action="" method="post">
                <div className="grid grid-cols-1 content-between gap-4">
                    <label className="text-xl font-semibold"  htmlFor="">Date:</label>
                    <input className="text-white rounded-2xl bg-gray-500 px-2 py-1" type="date" name="date" id="" required/>
                    
                    <label className="text-xl font-semibold" htmlFor="">Description:</label>
                    <input className="bg-gray-500 text-white rounded-2xl px-2 py-1" type="text" name="description" id="" placeholder="Description" required/>

                    <label className="text-xl font-semibold " htmlFor="">Category:</label>
                    <select className="bg-gray-500 text-white py-2 cursor-pointer rounded-2xl px-2" name="Category" id="" required>
                        <option value="">Categories</option>
                        <option value="Food">Food</option>
                        <option value="Bills">Bills</option>
                        <option value="Salary">Salary</option>
                        <option value="Rent">Rent</option>
                        <option value="Car">Car</option>
                     </select>

                     <label className="text-xl font-semibold" htmlFor="">Type:</label>
                     <select className="bg-gray-500 text-white cursor-pointer py-2 rounded-2xl px-2" name="type" id="" required>
                        <option value="">Types</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                     </select>

                     <label className="text-xl font-semibold" htmlFor="">Amount:</label>
                     <input className="bg-gray-500 text-white py-1 rounded-4xl px-2" type="number" name="number" id="" placeholder="$" required/>

                     <input className="text-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 font-semibold py-1 text-white rounded-4xl " type="submit" value="Add Transaction" />
                </div>
            </form>
        </div>
    )
};

export default AddTransactionForm;