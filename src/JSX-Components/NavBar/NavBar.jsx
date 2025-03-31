import { AlignLeft, Award, Bell, Search, Settings2 } from "lucide-react";
import Logo from "/public/Images/Logo.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MenuBar } from "../MenuBar/MenuBar";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const navList = [
  {
    name: "Notification",
    icon: <Bell />,
  },
  {
    name: "Rewards",
    icon: <Award />,
  },
];

export function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-[#554cf9] to-[#804cf9cb] py-4 px-3 md:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 select-none">
          <img
            src={Logo}
            alt="codebyrazeeth-logo"
            className="w-[40px] pointer-events-none"
          />
          <h1 className="text-xl font-bold text-white">Quiz - CBR</h1>
        </div>
        <div>
          <div className="flex items-center gap-6 cursor-pointer">
            {navList.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-white cursor-pointer w-min"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="hover:scale-110  cursor-pointer">
                      {item.icon}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
            <MenuBar />
          </div>
        </div>
      </div>
    </nav>
  );
}
