import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import StatCard from "../Components/StatCard";


export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
     <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Topbar/>

        {/* Stat Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <StatCard title="Users" value="1,245" />
          <StatCard title="Revenue" value="$12,340" />
          <StatCard title="Orders" value="324" />
          <StatCard title="Growth" value="14%" />
         
        </div>
      </div>
    </div>
  );
}
