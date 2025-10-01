import { Link } from "react-router"



function SignupPage() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Create an Account</h1>

                <form onSubmit className="flex flex-col items-center justify-center">
                    <div className="mb-4">
                        <input
                        className="w-full border rounded-md px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" 
                        type="email" 
                        value
                        required 
                        placeholder="Enter your Email"
                        onChange   
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                        className="w-full border rounded-md px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" 
                        type="password" 
                        value
                        required 
                        placeholder="Enter your Password"
                        onChange
                    />
                    </div>
                    <div className="mb-6">
                        <input 
                        className="w-full border rounded-md px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" 
                        type="password" 
                        value
                        required 
                        placeholder="Confirm your Password"
                        onChange
                    />
                    </div>
                    <button 
                        className="w-full bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-emerald-700 transition" 
                        type="submit">Sign Up
                    </button>
                    
                </form>

                <div class="flex items-center my-6">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="mx-2 text-gray-500 text-sm">or sign up with</span>
                <div class="flex-grow border-t border-gray-300"></div>
                </div>
                
                <div class="flex justify-center space-x-4">
                <button class="px-4 py-2 border rounded-md hover:bg-gray-50">Google</button>
                </div>

                
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