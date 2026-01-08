import lightMode from '../assets/sunwhite.svg'
import darkMode from '../assets/dark_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import { useState, useEffect } from 'react'


function UserSettingsOptions() {

    const [toggleTheme, setToggleTheme] = useState(()=> {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(toggleTheme));
    }, [toggleTheme]);

    return (
        <div className="flex flex-col gap-6 bg-gray-300 rounded-4xl  w-95 p-6">

            <div className="flex p-1 justify-between items-center rounded-full bg-gray-500 text-white h-10 px-4">
                <h2 className="font-semibold text-lg">Dark Mode</h2> 
               <button onClick={() => setToggleTheme(!toggleTheme)}>{toggleTheme ? <img src={lightMode} alt="" /> : <img src={darkMode} alt="" /> }</button>
            </div>

            <div className="flex px-4 justify-between items-center rounded-full bg-gray-500 text-white h-10">
                <h2 className="font-semibold text-lg">Export Data</h2>
                <button className="cursor-pointer bg-gray-800 text-white w-20 h-8 text-xs sm:text-base rounded-full font-semibold hover:bg-gray-600 transition">CSV</button>
                <button className="cursor-pointer bg-gray-800 text-white w-20 h-8 text-xs sm:text-base rounded-full font-semibold hover:bg-gray-600 transition">PDF</button>


            </div>

            <div className="flex px-4 justify-between items-center rounded-full bg-gray-500 text-white h-10">
                <h2 className="font-semibold text-lg">Password</h2>
                <button className="cursor-pointer bg-gray-800 text-white w-20 h-8 text-xs sm:text-base rounded-full font-semibold hover:bg-gray-600 transition">Change</button>
            </div>
            <div className="flex px-4 justify-between items-center rounded-full bg-gray-500 text-white h-10 ">
                <h2 className="font-semibold text-lg">Close Account</h2>
                <button className="cursor-pointer bg-red-500 
                w-20 h-8 
                text-white  text-xs sm:text-base rounded-full font-semibold hover:bg-red-700 transition">Delete</button>
            </div>

        </div>
    )
}

export default UserSettingsOptions

