import { Routes, Route } from "react-router"
import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import ReportsPage from "./pages/ReportsPage"
import SplashPage from "./pages/SplashPage"
import TransactionsPage from "./pages/TransactionsPage"

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App
