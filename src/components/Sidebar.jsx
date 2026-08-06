import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router"
import dashboardIcon from "../assets/dashboard_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import { useTransactions } from "../TransactionContext"

import chartIcon from "../assets/bar_chart_4_bars_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import profileIcon from "../assets/contacts_product_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import logoutIcon from "../assets/logout_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"



function Sidebar() {

    const { setTransactions } = useTransactions();


     const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setTransactions([]);
        navigate("/");
    };


    return (
            <div className="sm:w-16 bg-gray-800 text-gray-200 w-full h-auto sm:h-screen p-4 sm:p-2">

                <nav className="flex justify-around sm:flex-col sm:h-full sm:justify-start sm:gap-6">

                    <Link to="/dashboard" className="text-nowrap text-xs h-8 flex flex-col items-center justify-center" >
                    <img src={dashboardIcon} alt="dashboard icon" title="Dashboard" />
                    Home
                    </Link>
                    
                    <Link to="/profile" className=" text-nowrap text-xs h-8 flex flex-col items-center justify-center">
                    <img src={profileIcon} alt="Profile icon" title="Profile"/>
                    Account 
                    </Link>

                    <button onClick={handleLogout} className=" text-nowrap text-xs h-8 cursor-pointer flex flex-col items-center justify-center">
                        <img src={logoutIcon} alt="logout icon" title="Log Out"/>
                        Log Out 
                    </button>
                </nav>

            </div>

    )
}

export default Sidebar