function Navbar() {
    return (
         <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-emerald-600">Personal Finance Tracker</h1>
          <div className="bg-emerald-600 text-white px-4 py-2 rounded ">
            Welcome Leandro
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 border-2 p-6">
          {/* <Outlet /> */} jjdjdjdjdjdjd
        </main>
        </div>
    )
}

export default Navbar