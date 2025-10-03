import { useEffect, useState } from "react"
import { Link } from "react-router"
import { Menu, X } from "lucide-react"
import dashboardIcon from "../assets/dashboard_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import transactionsIcon from "../assets/attach_money_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import chartIcon from "../assets/bar_chart_4_bars_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import profileIcon from "../assets/contacts_product_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import logoutIcon from "../assets/logout_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"



function Sidebar() {


    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
    const savedSidebarPosition = localStorage.getItem("sidebarOpen");
    if (savedSidebarPosition !== null) {
        try {
            setIsOpen(JSON.parse(savedSidebarPosition));
        } catch (e) {
            console.error("Invalid sidebarOpen value in localStorage:", savedSidebarPosition);
            setIsOpen(true); 
        }
    }
}, [])

    useEffect(() => {
        localStorage.setItem("sidebarOpen", JSON.stringify(isOpen));
    }, [isOpen])


    return (
            <div className={`${isOpen ? "w-64" : "w-15"} bg-gray-800 text-gray-200 min-h-screen p-4 transition-all duration-300 flex flex-col`}>
                <button onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 focus:outline-none mb-6"
                >
                 {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className="flex-1">
                    <Link to="/dashboard" className="flex items-center gap-2 hover:text-white mb-6 text-nowrap">
                    <img src={dashboardIcon} alt="dashboard icon clas"/>  {isOpen && "Dashboard"}
                    </Link>
                    <Link to="/transactions" className="flex items-center gap-2 hover:text-white mb-6 text-nowrap">
                     <img src={transactionsIcon} alt="transactions icon" /> {isOpen && "Transactions"}
                    </Link>
                    <Link to="/reports" className="flex items-center gap-2 hover:text-white mb-6 text-nowrap">
                    <img src={chartIcon} alt="reports icon" /> {isOpen && "Reports"}
                    </Link>
                    <Link to="/profile" className="flex items-center gap-2 hover:text-white mb-6 text-nowrap">
                    <img src={profileIcon} alt="Profile icon"/> {isOpen && "Profile"} 
                    </Link>

                </nav>
                    <Link to="/" className="flex items-center gap-2 hover:text-white mb-6 text-nowrap justify-self-end">
                        <img src={logoutIcon} alt="logout icon"/> {isOpen && "Log Out"}
                    </Link>

            </div>

    )
}

export default Sidebar