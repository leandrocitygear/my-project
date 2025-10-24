import { Link } from "react-router"
import transactionsIcon from "../assets/attach_money_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import TransactionsTable from "../components/Transactions/TransactionsTable"



function TransactionsPage() {

    return (
        <div className="lg:pl-16 lg:pr-16 space-y-6">
            {/* <div className="flex items-center mb-6" >
                    <img src={transactionsIcon} alt="" />
                <h1 className="text-3xl font-medium ">Transactions</h1>
            </div> */}
            
            <TransactionsTable />

        </div>
    )
}

export default TransactionsPage