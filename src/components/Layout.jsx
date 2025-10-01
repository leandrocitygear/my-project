import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <Sidebar />

      {/* Main page content */}
      <main className="flex-grow">{children}</main>

    </div>
  );
}
