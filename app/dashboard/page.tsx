import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Blog</h1>
        <Link href="dashboard/blog/create">
          <Button variant="outline">
            Create <PlusIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
