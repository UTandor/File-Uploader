import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  return (
    <div className="h-screen grid place-items-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
              <CardDescription>
                Please enter your username and password and log in to your
                account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Username</Label>
                {username ? (
                  <Input id="name" defaultValue={username} />
                ) : (
                  <Input id="name" defaultValue="" />
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                {password ? (
                  <Input id="name" defaultValue={password} />
                ) : (
                  <Input id="name" defaultValue="" />
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Username</Label>
                <Input id="name" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password1">Password</Label>
                {showPassword1 ? (
                  <div className="relative flex items-center">
                    <Input id="password1" type="text" />
                    <EyeOff
                      onClick={() => setShowPassword1(!showPassword1)}
                      className="absolute right-[5%] opacity-50 cursor-pointer"
                    />
                  </div>
                ) : (
                  <div className="relative flex items-center">
                    <Input id="password1" type="password" />
                    <Eye
                      onClick={() => setShowPassword1(!showPassword1)}
                      className="absolute right-[5%] opacity-50 cursor-pointer"
                    />
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="password2">Confirm password</Label>

                {showPassword2 ? (
                  <div className="relative flex items-center">
                    <EyeOff
                      onClick={() => setShowPassword2(!showPassword2)}
                      className="absolute right-[5%] opacity-50 cursor-pointer"
                    />
                    <Input id="password2" type="text" />
                  </div>
                ) : (
                  <div className="relative flex items-center">
                    <Eye
                      onClick={() => setShowPassword2(!showPassword2)}
                      className="absolute right-[5%] opacity-50 cursor-pointer"
                    />
                    <Input id="password2" type="password" />
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
