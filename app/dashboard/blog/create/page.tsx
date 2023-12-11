"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { BlogFormSchema } from "@/lib/form-schema";
import {
  EyeOpenIcon,
  Pencil1Icon,
  RocketIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { SaveIcon } from "lucide-react";
import { useState } from "react";

const CreateBlogPage = () => {
  const { toast } = useToast();
  const [isPreview, setIsPreview] = useState(false);

  const form = useForm<z.infer<typeof BlogFormSchema>>({
    resolver: zodResolver(BlogFormSchema),
    defaultValues: {
      title: "",
      content: " ",
      image_url: "",
      is_premium: false,
      is_publish: false,
    },
  });

  function onSubmit(data: z.infer<typeof BlogFormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const togglePreview = () => setIsPreview((prev) => !prev);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="p-5 flex items-center justify-between border-b space-x-4 flex-wrap ">
          <div className="flex gap-5 items-center">
            <span
              onClick={togglePreview}
              role="button"
              className="flex items-center gap-1 p-2 border rounded-lg hover:ring-2 hover:ring-zinc-400 transition-all bg-zinc-700"
              tabIndex={0}
            >
              {isPreview ? (
                <>
                  <Pencil1Icon />
                  Edit
                </>
              ) : (
                <>
                  <EyeOpenIcon />
                  Preview
                </>
              )}
            </span>
            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-1 p-2 border rounded-lg hover:ring-2 hover:ring-zinc-400 transition-all bg-zinc-700">
                      <StarIcon />
                      <span>Premium</span>
                      <Switch />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-1 p-2 border rounded-lg hover:ring-2 hover:ring-zinc-400 transition-all bg-zinc-700">
                      <RocketIcon />
                      <span>Publish</span>
                      <Switch />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button className="flex items-center gap-1 ">
            <SaveIcon size={16} /> Save
          </Button>
        </div>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Blog Name" {...field} />
              </FormControl>
              <FormDescription>This is your blog display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateBlogPage;
