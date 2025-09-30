function Navbar() {
    return (
        <>
         <header className="w-full bg-emerald-600 text-white px-8 py-4 flex justify-between items-center shadow">
                <h1 className="text-base sm:text-2xl font-bold">Personal Finance Tracker</h1>
                <nav>
                <a href="/login" className="bg-white text-emerald-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                    Log In
                </a>
                </nav>
         </header>
        </>
    )
}

export default Navbar