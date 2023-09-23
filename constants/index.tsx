import { DashboardIcon } from "@radix-ui/react-icons";
import { FiSave } from "react-icons/fi";
import { TbCalculator, TbChartBar } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";

interface Route {
    icon: React.ReactNode;
    path: string;
    name: string;
  }
  

export const LINKS = {
    register:'/auth/register',
    login:'/auth/login',
}

export const routes: Route[] = [
    {
      icon: <DashboardIcon className="w-5 h-5" />,
      path: "/agenda",
      name: "Dashboard",
    },
    {
      icon: <TbCalculator className="w-5 h-5" />,
      path: "/agenda/bmi",
      name: "Calculate BMI",
    },
    {
      icon: <FiSave className="w-5 h-5" />,
      path: "/agenda/add-food",
      name: "Save Food",
    },
    {
        icon: <GiFruitBowl className="w-5 h-5" />,
        path: "/agenda/foods",
        name: "Foods",
    },
    {
      icon: <TbChartBar className="w-5 h-5" />,
      path: "/agenda/charts",
      name: "Charts",
    },
  ];
  