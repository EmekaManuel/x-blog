"use client";
import { supabase } from "@/lib/supabase";
import { GithubIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const LoginForm = () => {
  const pathname = usePathname();

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback?next" + pathname,
      },
    });
  };

  return (
    <Button
      variant="outline"
      className="flex items-center gap-2"
      onClick={handleLogin}
    >
      <GithubIcon />
      Login
    </Button>
  );
};

export default LoginForm;
