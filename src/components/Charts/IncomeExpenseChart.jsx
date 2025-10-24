import { Line } from "react-chartjs-2"
import { 
    Chart as ChartJS,
    LineElement, 
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    
} from "chart.js"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip,Legend);

function IncomeExpenseChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Income",
                data: [1000, 1200, 900, 1100, 1300],
                borderColor: "#10B981",
                backgroundColor: "rgba(16,185,129,0.2)",
                tension: 0.4,
                fill: true,
            },
            {
                label: "Expenses",
                data: [500, 700, 400, 650, 800],
                borderColor: "#EF4444",
                backgroundColor: "rgba(239,68,68,0.2)",
                tension: 0.4,
                fill: true,
                borderRadius: 100,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" },
            title: { display: true},
        },
        
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow lg:col-span-2 h-80 ">
                <h4 className="text-lg font-semibold ">Monthly Overview</h4>
            <div className="h-64 relative">
            <Line data={data} options={options}/>
            </div>
        </div>
    )
 
}

export default IncomeExpenseChart