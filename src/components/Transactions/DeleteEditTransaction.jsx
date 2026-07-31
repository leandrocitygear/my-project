import { use, useState } from "react";
import closeIcon from "../../assets/closeBlack.svg"
import updateTransactionForm from "./UpdateTransactionForm";




function DeleteEditTransaction({ deleteTransactionById, updateTransactionById, transaction }) {

    const [showUpdateTransactionForm, setShowUpdateTransactionForm] = useState(false)

    return (
        

            <div className="flex items-center gap-4">
            <button className="font-semibold bg-red-500 rounded-xl  px-2 text-white cursor-pointer hover:bg-red-700 w-50" onClick={() => deleteTransactionById(transaction.id)}>Delete this transaction</button>
            <button className="bg-gray-500 rounded-xl font-semibold text-white px-2 cursor-pointer hover:bg-gray-700 w-50" onClick={() => {updateTransactionById(transaction.id), 
                setShowUpdateTransactionForm(true)}}
                >Edit this transaction</button>
            </div>
        
    )
}

export default DeleteEditTransaction;