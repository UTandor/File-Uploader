import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
const Header = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUsername(username);
    } else {
      setUsername("");
    }
  }, []);
  return (
    <div className="w-screen select-none bg-background text-foreground flex  justify-between px-7 py-3">
      <div className="font-bold text-xl">Logo</div>
      <div>
        <ul className="flex flex-row space-x-4">
          <Button variant={"link"} className="text-forerground p-0">
            Home
          </Button>
          <Button variant={"link"} className="text-forerground p-0">
            Home
          </Button>
          <Button variant={"link"} className="text-forerground p-0">
            Home
          </Button>
          <Button variant={"link"} className="text-forerground p-0">
            Home
          </Button>
          <Button variant={"link"} className="text-forerground p-0">
            Home
          </Button>
        </ul>
      </div>
      <div className="">
        {username == "" ? (
          <Button variant={"secondary"}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default Header;
