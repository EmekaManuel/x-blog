import { EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons";
import { EditIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

const Actions = () => {
  return (
    <div className="flex items-center gap-5 sm:flex-wrap md:flex-nowrap">
      <Button className="flex items-center gap-2" variant="outline">
        <EyeOpenIcon />
        View
      </Button>
      <Button className="flex items-center gap-2" variant="outline">
        <TrashIcon />
        Delete
      </Button>
      <Button className="flex items-center gap-2" variant="outline">
        <EditIcon size={16} />
        Edit
      </Button>
    </div>
  );
};

const BlogTable = () => {
  return (
    <div className="overflow-x-auto md:overflow-x-hidden">
      <div className="border bg-gradient-dark rounded-md">
        <div className="grid grid-cols-6 p-4 text-gray-400 border-b ">
          <h1 className="col-span-2">Title </h1>
          <h1>Premium</h1>
          <h1>Publish</h1>
        </div>
        <div className="grid grid-cols-6 p-5 text-gray-100 border-b">
          <h1 className="col-span-2">Dangers Of Jonzing </h1>
          <Switch color="white" checked={true} />
          <Switch checked={false} />
          <Actions />
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
