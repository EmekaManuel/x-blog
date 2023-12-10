import { useUser } from "@/lib/store/user";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { supabase } from "@/lib/supabase";
import { LayoutDashboardIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const UserProfile = () => {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(undefined);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          src={user?.user_metadata.avatar_url}
          alt={user?.user_metadata.user_name}
          width={50}
          height={50}
        />
      </PopoverTrigger>
      <PopoverContent className="p-2 space-y-3 divide-y">
        <div className="px-4 text-sm space-y-1">
          <p>{user?.user_metadata.user_name}</p>
          <p className="text-gray-500">{user?.user_metadata.email}</p>
        </div>
        <Link href="/dashboard" className="block">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between"
          >
            Dashboard
            <LayoutDashboardIcon />
          </Button>
        </Link>
        <Link href="/" className="block">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between"
            onClick={handleLogout}
          >
            Logout
            <LogOutIcon />
          </Button>
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfile;
