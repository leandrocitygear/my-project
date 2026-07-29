import { useState } from "react";


function AddTransactionForm({ setShowAddTransForm }) {

const [type, setType] = useState("");


const incomeCategories = [
        "Salary",
        "Freelance",
        "Business",
        "Investments",
        "Gift",
        "Other Income"
    ];

    const expenseCategories = [
        "Housing",
        "Utilities & Bills",
        "Transportation",
        "Food",
        "Health & Wellness",
        "Personal Care",
        "Family & Children",
        "Education",
        "Debt Payments",
        "Savings & Investments",
        "Entertainment & Recreation",
        "Travel",
        "Gifts & Donations",
        "Insurance",
        "Pets",
        "Work Expenses",
        "Taxes & Government",
        "Miscellaneous"
    ];

    const categories = type === "Income" 
        ? incomeCategories 
        : expenseCategories;

   const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const transaction = {
        date: formData.get("date"),
        description: formData.get("description"),
        type: formData.get("type"),
        category: formData.get("category"),
        amount: formData.get("amount")
    };

    console.log(transaction);

    setShowAddTransForm(false);
};


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 content-between gap-4">
                    <label className="text-xl font-semibold"  htmlFor="date">Date: </label>
                    <input className="text-white rounded-2xl bg-gray-500 px-2 py-1" type="date" name="date" id="date" required/>
                    
                     <label className="text-xl font-semibold" htmlFor="type">Type:</label>
                     <select className="bg-gray-500 text-white cursor-pointer py-2 rounded-2xl px-2" value={type} onChange={(e) => {setType(e.target.value)}} name="type" id="type" required>
                        <option value="">Select Type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                     </select>

                    <label className="text-xl font-semibold " htmlFor="category">Category:</label>
                    <select className="bg-gray-500 text-white py-2 cursor-pointer rounded-2xl px-2" name="category" id="category" required>
                        <option value="">{type ? "Select Category" : "Choose Type First"}</option>

                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                        
                     </select>

                    <label className="text-xl font-semibold" htmlFor="description">Description:</label>
                    <input className="bg-gray-500 text-white rounded-2xl px-2 py-1" type="text" name="description" id="description" placeholder="Description" required/>

                     <label className="text-xl font-semibold" htmlFor="amount">Amount:</label>
                     <input className="bg-gray-500 text-white py-1 rounded-4xl px-2 appearance-none" type="number" name="amount" id="amount" placeholder="$0.00" step="0.01" required/>
                
                     <input className="text-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 font-semibold py-1 text-white rounded-4xl " type="submit" value="Add Transaction" />
                </div>
            </form>
        </div>
    )
};

export default AddTransactionForm;