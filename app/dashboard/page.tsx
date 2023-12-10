import BlogTable from "@/components/dashboard/blog-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Blog</h1>
        <Link href="dashboard/blog/create">
          <Button variant="outline">
            Create <PlusIcon />
          </Button>
        </Link>
      </div>
      <BlogTable />
    </div>
  );
};

export default Dashboard;
