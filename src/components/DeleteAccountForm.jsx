
import closeIcon from "../assets/closeBlack.svg";
import { getCurrentUser } from "../utils/auth";
import { deleteAccount } from "../api/userAPI";
import { useNavigate } from "react-router";




function DeleteAccountForm({ setShowDeleteAccountForm }) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = getCurrentUser();

        try {
            await deleteAccount(user.id);

            localStorage.removeItem("user");

            alert("Account deleted successfully");

            setShowDeleteAccountForm(false);

            navigate("/")
            
        } catch (error) {
            console.error(error);
            alert("Failed to delete account");
        }



    }



    return (
         <div className="bg-gray-300 shadow-sm absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl  w-80  p-2 ">
                            
                            <form onSubmit={handleSubmit} className="bg-gray-200 rounded-4xl p-6">
        
                                <div className="flex justify-end">
                                    <button type="button" onClick={()=> setShowDeleteAccountForm(false)} className="cursor-pointer border border-transparent rounded-lg hover:bg-gray-500" title="Close"><img src={closeIcon} alt="" /></button>
                                </div>
                    <h1 className="text-xl font-semibold text-center text-black mb-4">Delete Your Account</h1>
        
                        <div className="grid grid-cols-1 content-between gap-4">
                
                            <button className="text-xl cursor-pointer bg-red-500 hover:bg-red-700 font-semibold py-1 text-white rounded-4xl " type="button" onClick={()=> setShowDeleteAccountForm(false)}>NO</button>

                            <button className="text-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 font-semibold py-1 text-white rounded-4xl " type="submit" value="Delete Account">Delete Account</button>
                                </div>
                        
                                
                            </form>
                
                        </div>
    )
}

export default DeleteAccountForm;