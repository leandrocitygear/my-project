import { Link } from "react-router";

export default function BudgetProgress() {
  const budgets = [
    { category: "Food", spent: 350, limit: 500, color: "bg-emerald-600" },
    { category: "Entertainment", spent: 80, limit: 200, color: "bg-sky-500" },
    { category: "Transportation", spent: 100, limit: 250, color: "bg-amber-500" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow h-80">
      <div className="flex justify-between items-center p-2">
      <h3 className="text-lg font-semibold mb-4">Budget Progress</h3>
      <Link to="/addbudget" className="cursor-pointer bg-emerald-600 text-white px-2 py-2 text-xs sm:text-base rounded-lg font-semibold hover:bg-emerald-700 transition">
          Add Budget
      </Link>
      </div>

      <div className="space-y-4">
        {budgets.map((b) => {
          const progress = Math.min((b.spent / b.limit) * 100, 100);
          return (
            <div key={b.category}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">{b.category}</span>
                <span className="text-sm text-gray-600">
                  ${b.spent} / ${b.limit}
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${b.color} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
