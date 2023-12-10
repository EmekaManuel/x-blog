import Link from "next/link";
import React from "react";
import { GithubIcon } from "lucide-react";
import { Button } from "../ui/button";
import LoginForm from "./loginform";

const password = "josephat12345.";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link className="text-2xl font-bold " href="/">
          Daily Blog
        </Link>
        <div className="h-1 w-0 transition-all bg-green-500 group-hover:w-full "></div>
      </div>
      <LoginForm />
    </nav>
  );
};

export default Navbar;
