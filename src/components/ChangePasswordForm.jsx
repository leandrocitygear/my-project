import closeIcon from "../assets/closeBlack.svg";
import { useState } from "react";
import { getCurrentUser } from "../utils/auth";
import { updatePassword } from "../api/userAPI";

function ChangePasswordForm({ setShowChangePasswordForm }) {


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError('');

        const user = getCurrentUser();

        try {
            await updatePassword(user.id, password);

            alert("Password updated successfully!");

            setPassword('')
            setConfirmPassword('')
            setShowChangePasswordForm(false);
        } catch (err) {
            alert("Failed to update password.");
            console.error(err)
        }


    };


    return (
         <div className="bg-gray-300 shadow-sm absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl  w-80  p-2 ">
                    
                    <form onSubmit={handleSubmit} className="bg-gray-200 rounded-4xl p-6">

                        <div className="flex justify-end">
                            <button type="button" onClick={()=> {setShowChangePasswordForm(false); setError('')}} className="cursor-pointer border border-transparent rounded-lg hover:bg-gray-500" title="Close Form"><img src={closeIcon} alt="" /></button>
                        </div>
            <h1 className="text-xl font-semibold text-center text-black">Change Password</h1>

                <div className="grid grid-cols-1 content-between gap-4">
            
                    <label className="text-xl font-semibold text-black"  htmlFor="New Password">New Password: </label>
                        <input 
                        className="bg-gray-500 px-2 py-1 rounded-full" 
                        type="password" 
                        value = {password}
                        required 
                        onChange = {(e) => {setPassword(e.target.value); setError('')}}
                    ></input>

                    <label className="text-xl font-semibold text-black"  htmlFor="Confirm New Password">Confirm New Password: </label>
                        <input 
                        className="bg-gray-500 px-2 py-1 rounded-full" 
                        type="password" 
                        value = {confirmPassword}
                        required 
                        onChange = {(e) => {setConfirmPassword(e.target.value); setError('')}}
                    ></input>

                    {error && (
                        <p className="text-red-600 text-sm text-center">{error}</p>
                        )}
                    
        
                    <input className="text-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 font-semibold py-1 text-white rounded-4xl " type="submit" value="Save New Password" />
                        </div>
                        
                    </form>
        
                </div>
    )
}

export default ChangePasswordForm;