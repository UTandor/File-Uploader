import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

const Login = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const name = localStorage.getItem("username") || "";
  const pass = localStorage.getItem("password") || "";
  const [username, setUsername] = useState(name);
  const [password1, setPassword1] = useState(pass);
  const [password2, setPassword2] = useState(pass);
  const navigate = useNavigate();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword1(e.target.value);
  };

  const handlePassword2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
  };

  const serverUrl = "http://localhost:5000/auth";

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(`${serverUrl}/login`, {
        name: username,
        password: password1,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.clear();
          localStorage.setItem("username", username);
          localStorage.setItem("password", password1);
          localStorage.removeItem("status");
          console.log(res.data);
          toast("Account successfully created", {
            description: "Your account was created succesfully.",
          });
          setTimeout(() => {
            navigate("/~");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error(error);
        toast("An error occurred", { description: error });
      });
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (password1 === password2) {
      axios
        .post(`${serverUrl}/register`, {
          name: username,
          password: password1,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            localStorage.clear();
            localStorage.setItem("username", username);
            localStorage.setItem("password", password1);
            console.log(res.data);
            toast("Account successfully created", {
              description: "Your account was created succesfully.",
            });
            setTimeout(() => {
              navigate("/~");
            }, 2000);
          }
        })
        .catch((error) => {
          console.error(error);
          toast("An error occurred", { description: error });
        });
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
              <CardDescription>
                Please enter your username and password and log in to your
                account.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    onChange={handleUsernameChange}
                    id="name"
                    value={username}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <div className="flex relative items-center">
                    <Input
                      onChange={handlePassword1Change}
                      id="password"
                      type={showPassword1 ? "text" : "password"}
                      value={password1}
                    />
                    {showPassword1 ? (
                      <Eye
                        onClick={() => setShowPassword1(!showPassword1)}
                        className="absolute right-[5%] opacity-50 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={() => setShowPassword1(!showPassword1)}
                        className="absolute right-[5%] opacity-50 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Login</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Regsiter</CardTitle>
              <CardDescription>
                Enter a username and password to create your Qomal account.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleRegister}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    onChange={handleUsernameChange}
                    id="name"
                    type="text"
                    value={username}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password1">Password</Label>
                  <div className="relative flex items-center">
                    <Input
                      onChange={handlePassword1Change}
                      id="password1"
                      type={showPassword1 ? "text" : "password"}
                      value={password1}
                    />
                    {showPassword1 ? (
                      <Eye
                        onClick={() => setShowPassword1(!showPassword1)}
                        className="absolute right-[5%] opacity-50 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={() => setShowPassword1(!showPassword1)}
                        className="absolute right-[5%] opacity-50 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password2">Confirm password</Label>
                  <div className="relative flex items-center">
                    <Input
                      onChange={handlePassword2Change}
                      id="password2"
                      type={showPassword2 ? "text" : "password"}
                      value={password2}
                    />
                    {showPassword2 ? (
                      <Eye
                        onClick={() => setShowPassword2(!showPassword2)}
                        className="absolute right-[5%] opacity-50 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={() => setShowPassword2(!showPassword2)}
                        className="absolute right-[5%] opacity-50 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Save password</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
