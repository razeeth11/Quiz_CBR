import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlignLeft,
  Award,
  BadgeHelp,
  Bell,
  ChevronRight,
  Info,
  LayoutList,
  LogOut,
  User,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuBarList = [
  {
    name: "My Profile",
    url: "profile",
    icon: <User />,
  },
  {
    name: "Notification",
    url: "notification",
    icon: <Bell />,
  },
  {
    name: "Share & Earn",
    url: "referral",
    icon: <UsersRound />,
  },
  {
    name: "Award",
    url: "award",
    icon: <Award />,
  },
  {
    name: "Top Members",
    url: "top-members",
    icon: <UsersRound />,
  },
  {
    name: "About us",
    url: "about-us",
    icon: <Info />,
  },
  {
    name: "Help Center",
    url: "help-center",
    icon: <BadgeHelp />,
  },
  {
    name: "Game Rules",
    url: "game-rules",
    icon: <LayoutList />,
  },
];

export function MenuBar() {
  return (
    <Sheet>
      <Tooltip>
        <TooltipTrigger asChild>
          <SheetTrigger>
            <AlignLeft className="text-white cursor-pointer hover:scale-110" />
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Menu</p>
        </TooltipContent>
      </Tooltip>

      <SheetContent className=" w-[300px] border-none">
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex items-center gap-2  bg-[#652de7] p-2.5">
          <img
            src="https://github.com/shadcn.png"
            alt="Abdul Razeeth"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-[16px] font-medium text-white">Abdul Razeeth</p>
            <p className="text-[14px] text-gray-300">example@gmail.com</p>
          </div>
        </div>

        <div>
          {menuBarList.map((item, index) => (
            <Link
              // to={`/${item.url}`}
              key={index}
              className="border-1 flex items-center justify-between p-3.5 cursor-pointer hover:bg-violet-100"
            >
              <div className="flex items-center gap-2.5 text-[14px]">
                <div>{item.icon}</div>
                {item.name}
              </div>
              <div>
                <ChevronRight className="text-gray-300" />
              </div>
            </Link>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              className="bg-[#652de7] hover:bg-[#5728c4] cursor-pointer"
            >
              Logout <LogOut />
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
