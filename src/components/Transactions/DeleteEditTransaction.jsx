import { useState } from "react";
import closeIcon from "../../assets/closeBlack.svg"
import UpdateTransactionForm from "./UpdateTransactionForm";




function DeleteEditTransaction({ deleteTransactionById, updateTransactionById, transaction, setShowDeleteEditBox }) {

    const [showUpdateTransactionForm, setShowUpdateTransactionForm] = useState(false)

    return (
        
 <>

            {!showUpdateTransactionForm && (
                <div className="flex items-center gap-4 bg-gray-300  px-2 py-1 rounded-4xl gap-2">
                    <button
                        className="font-semibold bg-red-500 rounded-xl px-2 text-white cursor-pointer hover:bg-red-700 w-50"
                        onClick={() => {
                            deleteTransactionById(transaction.id);
                            setShowDeleteEditBox(false);
                        }}
                    >
                        Delete this transaction
                    </button>


                    <button
                        className="bg-gray-500 rounded-xl font-semibold text-white px-2 cursor-pointer hover:bg-gray-700 w-50"
                        onClick={() => {
                            setShowUpdateTransactionForm(true);
                            
                        }}
                    >
                        Edit this transaction
                    </button>

                     <button onClick={()=> setShowDeleteEditBox(false)} className="cursor-pointer border border-transparent rounded-lg hover:bg-gray-500" title="Close Form"><img src={closeIcon} alt="" /></button>
                </div>
            )}


            {showUpdateTransactionForm && (
                <div className="bg-gray-300 shadow-sm absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl  w-80  p-6">
                <div className="flex justify-end">
                    <button onClick={()=> setShowDeleteEditBox(false)} className="cursor-pointer border border-transparent rounded-lg hover:bg-gray-500" title="Close Form"><img src={closeIcon} alt="" /></button>
                    </div>
                <UpdateTransactionForm
                    transaction={transaction}
                    updateTransactionById={updateTransactionById}
                    closeForm={() => {
                        setShowUpdateTransactionForm(false);
                        setShowDeleteEditBox(false);
                    }}
                />
                </div>
            )}

        </>
        
    )
}

export default DeleteEditTransaction;