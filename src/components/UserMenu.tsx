"use client";

import { LogOut, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

export default function UserMenu({
  user,
}: {
  user: {
    name?: string;
    email?: string;
    image?: string | null;
  };
}) {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();

    toast.success("Logged out successfully");

    router.push("/login");

    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full outline-none ring-offset-2 focus:ring-2 focus:ring-blue-500">
        <Avatar className="h-11 w-11 cursor-pointer border-2 border-white shadow-md">
          <AvatarImage src={user.image || ""} alt={user.name} />

          <AvatarFallback className="bg-blue-600 text-white font-semibold">
            {user.name?.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-60 rounded-2xl p-2 shadow-xl"
      >
        <div className="px-3 py-2">
          <p className="font-semibold text-slate-900">{user.name}</p>

          <p className="text-xs text-slate-500">{user.email}</p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => router.push("/profile")}
          className="cursor-pointer rounded-xl "
        >
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer rounded-xl text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
