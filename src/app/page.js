import DashBoardContent from "@/Components/DashBoardContent";
import Sidebar from "@/Components/SideBar";
import TopContent from "@/Components/TopContent";

export default function Home() {
  return (
    <div className="flex h-full">

      <Sidebar className=" w-64 bg-gray-200" />
      
      <div className="flex flex-col w-full p-10">
        <TopContent className="mb-6" />
        <DashBoardContent />
      </div>
    </div>
  );
}
