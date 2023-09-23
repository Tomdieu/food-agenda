"use client";
import { Divider, Spacer } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { routes } from "@/constants";

const Sidebar = () => {
  const pathname = usePathname();
  function isActive(href: string): boolean {
    return pathname === href;
  }
  return (
    <div className="flex-1 w-full h-full bg-black/80 flex gap-0 flex-col">
      <div className="py-4  px-4 text-medium md:text-2xl lg:text-3xl text-white select-none flex gap-2 w-full items-center justify-between cursor-pointer">
        <div className="flex items-center gap-1">
          <Link href={"/"}>
            <h5 className="font-bold block">Agenda</h5>
          </Link>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col gap-1 p-2 text-white select-none">
          <>
            {routes.map((route) => (
              <Link key={route.path} href={route.path}>
                <div
                  className={`flex gap-2 items-center bg-white/50 p-3 rounded-md cursor-pointer hover:bg-blue-300 ${
                    isActive(route.path) ? "border-l-2 border-blue-500" : ""
                  }`}
                > 
                  {route.icon}
                  <span>{route.name}</span>
                </div>
              </Link>
            ))}
          </>
        </div>
        <Divider />
        <Spacer className="flex-1" />
        <div className="flex flex-col gap-1 p-2 text-white select-none">
          <div
            onClick={() => signOut({ redirect: true, callbackUrl: "/auth" })}
            className="flex gap-2 items-center bg-white/50 p-3 rounded-md cursor-pointer hover:bg-blue-300"
          >
            <FiLogOut className="w-5 h-5" />

            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
