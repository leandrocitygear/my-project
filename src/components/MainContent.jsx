import { Outlet } from "react-router"




function MainContent() {
    return (
        <>
        <main className="flex-1 p-4 bg-gray-100 overflow-auto">
        <Outlet />

        </main>
        </>
    )
}

export default MainContent