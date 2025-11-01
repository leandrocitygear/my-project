

function AddTransactionForm() {

    return (
        <div className="p-4 bg-white shadow-sm rounded-md absolute z-1 mt-12 right-25 ">
            <form action="" method="post">
                <div className="gap-4 grid grid-cols-2">
                    <label className="bg-gray-400" htmlFor="">Date</label>
                    <input className="bg-gray-400" type="date" name="date" id="" required/>
                    
                    <label className="bg-gray-400" htmlFor="">Description</label>
                    <input className="bg-gray-400" type="text" name="description" id="" required/>

                    <label className="bg-gray-400" htmlFor="">Category</label>
                    <select className="bg-gray-400" name="Category" id="" required>
                        <option value="">Categories</option>
                        <option value="Food">Food</option>
                        <option value="Bills">Bills</option>
                        <option value="Salary">Salary</option>
                        <option value="Rent">Rent</option>
                        <option value="Car">Car</option>
                     </select>

                     <label className="bg-gray-400" htmlFor="">Type</label>
                     <select className="bg-gray-400" name="type" id="" required>
                        <option value="">Types</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                     </select>

                     <label className="bg-gray-400" htmlFor="">Amount</label>
                     <input className="bg-gray-400" type="number" name="number" id="" required/>

                     <input className="bg-gray-400" type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTransactionForm;