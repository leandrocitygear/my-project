import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router"
import { Flag, Menu, X } from "lucide-react"
import dashboardIcon from "../assets/dashboard_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import { useTransactions } from "../TransactionContext"

import chartIcon from "../assets/bar_chart_4_bars_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import profileIcon from "../assets/contacts_product_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import logoutIcon from "../assets/logout_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"



function Sidebar() {

    const { setTransactions } = useTransactions();

    const [isOpen, setIsOpen] = useState(() => {
        const saved = localStorage.getItem("sidebarOpen");
        return saved ? JSON.parse(saved) : false;
    })

     const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setTransactions([]);
        navigate("/");
    };


    return (
            <div className={`${isOpen ? "w-64" : "w-15"} bg-gray-800 text-gray-200 min-h-screen p-4 transition-all duration-300 flex flex-col`}>
                <button onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 focus:outline-none mb-6 cursor-pointer"
                >
                 {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className="flex-1">
                    <Link to="/dashboard" className="flex items-center gap-2 hover:text-white mb-6 text-nowrap text-xl h-8" >
                    <img src={dashboardIcon} alt="dashboard icon" title="Dashboard" />  {isOpen && "Dashboard"}
                    </Link>
                    
                    <Link to="/profile" className="flex items-center gap-2 hover:text-white mb-6 text-nowrap text-xl h-8">
                    <img src={profileIcon} alt="Profile icon" title="Profile"/> {isOpen && "Profile"} 
                    </Link>

                </nav>
                    <button onClick={handleLogout} className="flex items-center gap-2 hover:text-white mb-6 text-nowrap justify-self-end text-xl h-8">
                        <img src={logoutIcon} alt="logout icon" title="Log Out"/> {isOpen && "Log Out"}
                    </button>

            </div>

    )
}

export default Sidebar