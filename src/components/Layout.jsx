import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main page content */}
      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
