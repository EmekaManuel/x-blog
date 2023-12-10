"use client";
import React from "react";
import { PersonIcon, ReaderIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const pathname = usePathname();

  const LINKS = [
    {
      href: "/dashboard",
      text: "dashboard",
      icon: <ReaderIcon />,
    },
    {
      href: "/dashboard/user",
      text: "user",
      icon: <PersonIcon />,
    },
    // {
    //   href: "/dashboard",
    //   text: "dashboard",
    //   icon: <ReaderIcon />,
    // },
    // {
    //   href: "/dashboard",
    //   text: "dashboard",
    //   icon: <ReaderIcon />,
    // },
  ];
  return (
    <div className="flex items-center gap-5 border-b pb-2">
      {LINKS.map(({ text, href, icon }) => {
        return (
          <Link
            key={text}
            href={href}
            className={cn(
              "flex items-center gap-1 transition:all hover:underline",
              { "text-green-500": pathname === href }
            )}
          >
            {icon} / {text}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
