import dashboardIcon from "../assets/dashboard_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"


function DashboardPage() {


    return(
        <section>
            <div className="flex items-center" >
                <img src={dashboardIcon} alt="" />
            <h1 className="text-3xl font-medium ">Dashboard</h1>
            </div>
        </section>
    )
}

export default DashboardPage
