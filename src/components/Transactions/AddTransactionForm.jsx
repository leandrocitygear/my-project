import { useState } from "react";


function AddTransactionForm({ user, setShowAddTransForm, fetchTransactions }) {

const [type, setType] = useState("");
const [date, setDate] = useState("");
const [category, setCategory] = useState("");
const [description, setDescription] = useState("");
const [amount, setAmount] = useState("");


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

   const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://my-project-17ds.onrender.com/api/transactions",
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                date,
                type,
                category,
                description,
                amount
            })
        }
    );

    if(!response.ok){
    console.log("Error:", response.status);
    return;
}

    const data = await response.json();
    console.log(data);


    await fetchTransactions();
    setShowAddTransForm(false);
};


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 content-between gap-4">
                    <label className="text-xl font-semibold"  htmlFor="date">Date: </label>
                    <input className="text-white rounded-2xl bg-gray-500 px-2 py-1" type="date" name="date" id="date" value={date} onChange={(e)=>setDate(e.target.value)} required/>
                    
                     <label className="text-xl font-semibold" htmlFor="type">Type:</label>
                     <select className="bg-gray-500 text-white cursor-pointer py-2 rounded-2xl px-2" value={type} onChange={(e) => {setType(e.target.value)}} name="type" id="type" required>
                        <option value="">Select Type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                     </select>

                    <label className="text-xl font-semibold " htmlFor="category">Category:</label>
                    <select className="bg-gray-500 text-white py-2 cursor-pointer rounded-2xl px-2" name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} required>
                        <option value="">{type ? "Select Category" : "Choose Type First"}</option>

                        {categories.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                        
                     </select>

                    <label className="text-xl font-semibold" htmlFor="description">Description:</label>
                    <input className="bg-gray-500 text-white rounded-2xl px-2 py-1" type="text" name="description" id="description" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} required/>

                     <label className="text-xl font-semibold" htmlFor="amount">Amount:</label>
                     <input className="bg-gray-500 text-white py-1 rounded-4xl px-2 appearance-none" type="number" name="amount" id="amount" placeholder="$0.00" step="0.01" value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
                
                     <input className="text-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 font-semibold py-1 text-white rounded-4xl " type="submit" value="Add Transaction" />
                </div>
            </form>
        </div>
    )
};

export default AddTransactionForm;