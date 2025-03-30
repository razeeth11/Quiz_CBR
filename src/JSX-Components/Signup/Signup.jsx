import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="Name"> Name</Label>
          <Input type="text" id="Name" placeholder="Enter Your Name" />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="example@gmail.com" />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex items-center gap-2 my-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none cursor-pointer"
          >
            Accept terms and conditions
          </label>
        </div>
        <div>
          <Button
            className="w-full cursor-pointer bg-gradient-to-r from-[#554cf9] to-[#804cf9] hover:opacity-90"
            onClick={handleSignup}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
