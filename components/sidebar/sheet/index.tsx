"use client";
// import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "..";
import { FiMenu } from "react-icons/fi";
import { Button } from "@nextui-org/react";
import { useSidebar } from "@/hooks/useSidebar";
import { useState, useEffect } from "react";

export function SheetSidebar() {
  const { open, toggle } = useSidebar();
//   const [isSmallDevice, setIsSmallDevice] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       const windowWidth = window.innerWidth;
//       const isSmallDevice = windowWidth < 768;
//       setIsSmallDevice(isSmallDevice);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (isSmallDevice && open) {
//       toggle();
//     }
//   }, [isSmallDevice,open,toggle]);

  return (
    <Sheet open={open} onOpenChange={() => toggle()}>
      {/* <SheetTrigger asChild>
        <Button isIconOnly className="sm:hidden">
          <FiMenu className="w-6 h-6" />
        </Button>
      </SheetTrigger> */}
      <SheetContent
        className="p-0 h-screen right-0 z-50 top-0 bottom-0 fixed"
        side={"right"}
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
