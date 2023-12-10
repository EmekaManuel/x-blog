"use client";
import { useUser } from "@/lib/store/user";
import Link from "next/link";
import LoginForm from "./loginform";
import UserProfile from "./profile";

const Navbar = () => {
  const user = useUser((state) => state.user);
  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link className="text-2xl font-bold " href="/">
          Daily Blog
        </Link>
        <div className="h-1 w-0 transition-all bg-green-500 group-hover:w-full "></div>
      </div>
      {user?.id ? <UserProfile /> : <LoginForm />}
    </nav>
  );
};

export default Navbar;
