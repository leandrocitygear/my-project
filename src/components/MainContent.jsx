import { Outlet } from "react-router"




function MainContent() {
    return (
        <>
        <main className="flex-1 overflow-auto p-4 bg-gray-100">
        <Outlet />

        </main>
        </>
    )
}

export default MainContent