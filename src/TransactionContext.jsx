import { createContext, useContext, useEffect, useState } from "react";
import { getTransactions } from "./api/transactionsAPI";
import { getCurrentUser } from "./utils/auth";


const TransactionContext = createContext();


export function TransactionProvider({children}) {

    const [transactions, setTransactions] = useState([]);

    async function fetchTransactions(){

        const user = getCurrentUser();

        if(!user) {
            setTransactions([]);
            return;
        };


        const data = await getTransactions(user.id);

        setTransactions(data);
    }

    useEffect(()=>{


        fetchTransactions();

    },[]);



    async function addTransaction(transaction){

        const response = await fetch(
            "https://my-project-17ds.onrender.com/api/transactions",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(transaction)
            }
        );


        if(!response.ok){
            throw new Error("Failed to add transaction");
        }


        const newTransaction = await response.json();


        // Update React state immediately
        setTransactions(prev => [
            ...prev,
            newTransaction
        ]);

    }



    return (
        <TransactionContext.Provider 
            value={{
                transactions,
                setTransactions,
                addTransaction,
                fetchTransactions
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
}



export function useTransactions(){

    return useContext(TransactionContext);

}