import NavBar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { SheetSidebar } from "@/components/sidebar/sheet";
import getCurrentUser from "@/lib/getCurrentUser";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Agenda | Dashboard",
  description: "Trix Url",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  if(!currentUser){
    return redirect("/auth");
  }


  return (  
    <div className="h-screen w-screen flex overflow-hidden">
      <div className="hidden h-screen sm:w-4/12 lg:w-2/12 bg-gray-500 sm:flex">
        <Sidebar />
        
      </div>
      <div className="flex flex-1 sm:w-8/12 lg:w-10/12 overflow-y-auto">
        <div className="w-12 rounded-md flex flex-col flex-1">
          <NavBar user={currentUser} />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
