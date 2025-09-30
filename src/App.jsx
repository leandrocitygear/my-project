import { Routes, Route } from "react-router"
import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import ReportsPage from "./pages/ReportsPage"
import SplashPage from "./pages/SplashPage"
import TransactionsPage from "./pages/TransactionsPage"
import Layout from "./components/Layout"

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

    </Routes>
  );
}

export default App
