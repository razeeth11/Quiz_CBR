import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Signup } from "../Signup/Signup";
import { useLocation, useNavigate } from "react-router-dom";
import Background from "/public/Images/background.jpg";

export function LoginTabs() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname.includes("signup") ? "signup" : "login";

  return (
    <div
      className="min-h-screen bg-cover w-full"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Tabs
        defaultValue="login"
        value={activeTab}
        onValueChange={(value) => navigate(`/${value}`)}
        className="max-w-[450px] p-3 pt-[100px] md:mx-auto"
      >
        <TabsList className="flex w-full py-6 px-3 mb-5">
          <TabsTrigger className="p-4 cursor-pointer" value="login">
            Log In
          </TabsTrigger>
          <TabsTrigger className="p-4 cursor-pointer" value="signup">
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value={activeTab}>
          <Card className="p-5">
            {activeTab == "signup" ? <Signup /> : <Login />}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("token", "Quiz-App-Logged");
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="example@gmail.com" />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <div className="flex justify-end font-medium text-blue-700 underline cursor-pointer text-[14px]">
          <a>Forgot Password?</a>
        </div>
        <div>
          <Button
            className="w-full cursor-pointer bg-gradient-to-r from-[#554cf9] to-[#804cf9] hover:opacity-90"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
