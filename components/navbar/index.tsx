"use client";
import { User } from "@prisma/client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Avatar,
  Button,
} from "@nextui-org/react";
import { FiMenu, FiSettings, FiLogOut, FiLogIn } from "react-icons/fi";

import { Link1Icon, Link2Icon } from "@radix-ui/react-icons";

import { redirect, useRouter } from "next/navigation";

import { signOut } from "next-auth/react";
import { TbLogin } from "react-icons/tb";
import Link from "next/link";
import { SheetSidebar } from "../sidebar/sheet";
import { useSidebar } from "@/hooks/useSidebar";

// import {} from "@/components/ui/sheet"

type NavBarProps = {
  user?: User | null;
};

const NavBar: React.FC<NavBarProps> = ({ user }) => {
  const router = useRouter();
  const { toggle } = useSidebar();
  return (
    <div className="py-2 md:py-3 border-b-1 px-4 static w-full z-99">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Button isIconOnly onClick={()=>toggle()} className="sm:hidden">
            <FiMenu className="w-6 h-6" />
          </Button>

          <Link href={"/"}>
            <h1 className="text-xl md:text-2xl font-bold cursor-pointer select-none">
              Agenda
            </h1>
          </Link>
        </div>
        <SheetSidebar/>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <>
              {user ? (
                <Dropdown
                  showArrow
                  classNames={{
                    base: "px-1 border border-default-200 dark:from-default-50 dark:to-black",
                    arrow: "bg-default-200",
                  }}
                >
                  <DropdownTrigger>
                    <div className="rounded gap-1 p-1 flex items-center justify-center cursor-pointer bg-white">
                      {user?.name && (
                        <Avatar
                          showFallback
                          src={user?.image as string}
                          className="text-md p-1 text-white h-10 w-10 bg-white border"
                        />
                      )}
                      <svg
                        className="text-blue-500"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6H11L7.5 10.5L4 6Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with description"
                  >
                    <DropdownSection title="">
                      <DropdownItem
                        key="bmi"
                        onClick={() => router.push("/agenda/bmi")}
                      >
                        Calculate BMI
                      </DropdownItem>
                      <DropdownItem
                        key="foods"
                        onClick={() => router.push("/agenda/foods")}
                      >
                        Foods
                      </DropdownItem>
                      <DropdownItem
                        key="add-food"
                        onClick={() => router.push("/agenda/add-food")}
                      >
                        Save Food
                      </DropdownItem>
                      <DropdownItem
                        key="charts"
                        onClick={() => router.push("/agenda/charts")}
                      >
                        Charts
                      </DropdownItem>
                    </DropdownSection>
                    <DropdownSection title="">
                      <DropdownItem
                        key="logout"
                        className="text-danger"
                        color="danger"
                        startContent={<FiLogOut />}
                        onClick={() =>
                          signOut({ redirect: true, callbackUrl: "/auth" })
                        }
                      >
                        Logout
                      </DropdownItem>
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Dropdown
                  showArrow
                  classNames={{
                    base: "px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                    arrow: "bg-default-200",
                  }}
                >
                  <DropdownTrigger>
                    <Button className="bg-black text-white">
                      <TbLogin />
                      Login
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with description"
                  >
                    <DropdownSection title="Auth">
                      <DropdownItem
                        key="login"
                        onClick={() => router.push("/auth/login")}
                      >
                        Login
                      </DropdownItem>
                      <DropdownItem key="shortend-url">Register</DropdownItem>
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
