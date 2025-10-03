import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex bg-gray-200 min-h-screen ">
      <Sidebar />
      <Navbar />

      {/* Main page content */}
      {/* <main className="flex border border-red-500">{children}
        

      </main> */}

    </div>
  );
}
