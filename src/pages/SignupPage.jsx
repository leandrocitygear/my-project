import { useState } from "react"
import { Link } from "react-router"



function SignupPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
    }

    
    
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Create an Account</h1>

                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                    <div className="mb-4">
                        <input
                        className="w-full border rounded-md px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" 
                        type="email" 
                        value = {email}
                        required 
                        placeholder="Enter your Email"
                        onChange = {(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                        className="w-full border rounded-md px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" 
                        type="password" 
                        value = {password}
                        required 
                        placeholder="Enter your Password"
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div className="mb-6">
                        <input 
                        className="w-full border rounded-md px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" 
                        type="password" 
                        value = {confirmPassword}
                        required 
                        placeholder="Confirm your Password"
                        onChange = {(e) => setConfirmPassword(e.target.value)}
                    />
                    </div>
                    <button 
                        className="w-full bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-emerald-700 transition cursor-pointer" 
                        type="submit">Sign Up
                    </button>
                    
                </form>
                
                <p class="text-sm text-center text-gray-600 mt-6">
                Already have an account?
                <Link to="/login" class="text-emerald-600 font-medium hover:underline ml-1">
                    Log in
                </Link>
                </p>

            </div>
        </section>
    )
}

export default SignupPage