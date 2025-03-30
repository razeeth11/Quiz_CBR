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
import { AlignLeft, LogOut } from "lucide-react";

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
        <div className="p-2.5 bg-[#652de7]">
          <div className="flex items-center gap-2  bg-[#652de7] ">
            <img
              src="https://github.com/shadcn.png"
              alt="Abdul Razeeth"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-[16px] font-medium text-white">
                Abdul Razeeth
              </p>
              <p className="text-[14px] text-gray-300">example@gmail.com</p>
            </div>
          </div>
        </div>

        <div className=""></div>
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
