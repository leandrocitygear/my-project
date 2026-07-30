import { use, useEffect, useState } from "react";
import { useTransactions } from "../TransactionContext";


function SummaryCards() {

const {transactions} = useTransactions();


    const income = transactions
    .filter(t => t.type.toLowerCase() === "income")
    .reduce((sum,t)=> sum + Number(t.amount),0);

    const expenses = transactions
    .filter(t => t.type.toLowerCase() === "expense")
    .reduce((sum,t)=> sum + Number(t.amount),0);

    const balance = income - expenses;

    const savingsRate = income > 0 
    ? ((income - expenses) / income) * 100
    : 0;


    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow p-4 rounded-lg">
                <h3 className="text-sm text-gray-500">Total Balance</h3>
                <p className="text-2xl font-bold text-emerald-600">${balance.toFixed(2)}</p>
            </div>
            <div className="bg-white shadow p-4 rounded-lg">
                <h3 className="text-sm text-gray-500">Income(Month)</h3>
                <p className="text-2xl font-bold text-emerald-600">${income.toFixed(2)}</p>
            </div>
            <div className="bg-white shadow p-4 rounded-lg">
                <h3 className="text-sm text-gray-500">Expenses(Month)</h3>
                <p className="text-2xl font-bold text-red-500">${expenses.toFixed(2)}</p>
            </div>
            <div className="bg-white shadow p-4 rounded-lg">
                <h3 className="text-sm text-gray-500">Savings Rate</h3>
                <p className="text-2xl font-bold text-blue-500">{savingsRate.toFixed(0)}%</p>
            </div>
        </div>
    )
}

export default SummaryCards