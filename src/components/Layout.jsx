import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


export default function Layout() {
  return (
    <div className="flex flex-col-reverse sm:flex-row bg-gray-200 max-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden min-w-0 min-h-0">
        <MainContent />
      </div>
    </div>
  );
}
