import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function CategoryPieChart() {
    const data = {
        labels: ['Housing / Rent', '', 'Entertainment', '', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Spending by Category',
                data: [122, 223, 33, 45, 66, 23],
                backgroundColor: [
                   'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',  
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',  
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "right" },
            title: { display: true },
        },
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow h-80">
                <h4 className="text-lg font-semibold ">Spending by Category</h4>
            <div className="h-64 relative">
            <Doughnut data={data} options={options}/>
            </div>
        </div>
    )

};

export default CategoryPieChart;