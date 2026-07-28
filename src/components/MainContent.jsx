import { Outlet } from "react-router"




function MainContent() {
    return (
        <>
        <main className="flex-1 p-4 bg-gray-100 overflow-auto min-w-0 min-h-0">
        <Outlet />

        </main>
        </>
    )
}

export default MainContent