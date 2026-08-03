import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTransactions } from "../../TransactionContext";

ChartJS.register(ArcElement, Tooltip, Legend);

function CategoryPieChart() {

    const { transactions } = useTransactions();

    const expenses = transactions.filter(
        t => t.type === "Expense"
    );

    const totals = expenses.reduce((acc, transaction) => {

    acc[transaction.category] =
        (acc[transaction.category] || 0) + Number(transaction.amount);

    return acc;

}, {});

    const colors = [
                    'rgba(255, 99, 132, 1)',    // Pink
                    'rgba(54, 162, 235, 1)',    // Blue
                    'rgba(255, 206, 86, 1)',    // Yellow
                    'rgba(75, 192, 192, 1)',    // Teal
                    'rgba(153, 102, 255, 1)',   // Purple
                    'rgba(255, 159, 64, 1)',    // Orange
                    'rgba(46, 204, 113, 1)',    // Green
                    'rgba(231, 76, 60, 1)',     // Red
                    'rgba(52, 73, 94, 1)',      // Dark Blue Gray
                    'rgba(241, 196, 15, 1)',    // Gold
                    'rgba(26, 188, 156, 1)',    // Turquoise
                    'rgba(142, 68, 173, 1)',    // Deep Purple
                    'rgba(230, 126, 34, 1)',    // Pumpkin
                    'rgba(22, 160, 133, 1)',    // Sea Green
                    'rgba(52, 152, 219, 1)',    // Sky Blue
                    'rgba(127, 140, 141, 1)',   // Gray
                    'rgba(233, 30, 99, 1)',     // Magenta
                    'rgba(0, 188, 212, 1)'   
                ];

    const data = {
        labels: Object.keys(totals),
        datasets: [
            {
                label: 'Spending by Category',
                data: Object.values(totals),
                backgroundColor: colors.slice(0, Object.keys(totals).length),

                borderColor: colors.slice(0, Object.keys(totals).length),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "bottom" },
            title: { display: true },
        },
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow h-full">
                <h4 className="text-lg font-semibold ">Spending by Category</h4>
            <div className="h-164">
            <Doughnut data={data} options={options}/>
            </div>
        </div>
    )

};

export default CategoryPieChart;