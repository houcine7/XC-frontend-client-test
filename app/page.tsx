import Image from "next/image";
import SideBar from "./components/side-bar/SideBar";
import MainRigth from "./components/main-rigth/MainRigth";

export default function Home() {
  return (
    <main className="grid grid-flow-col grid-cols-7 h-full px-12 relative">
      <div className="col-span-2 w-full border-r border-b-gray-300 relative overflow-hidden h-[82vh] overflow-y-scroll scroll-section">
        <SideBar />
      </div>

      <div className="col-span-5 w-full ">
        <MainRigth />
      </div>
    </main>
  );
}
