import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


export default function Layout() {
  return (
    <div className="flex bg-gray-200 max-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
      <Navbar />
      <MainContent />
</div>
    </div>
  );
}
