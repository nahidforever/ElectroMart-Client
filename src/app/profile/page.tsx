"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { Mail, User } from "lucide-react";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  const user = session?.user;

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Please login first
      </div>
    );
  }

  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-100
      via-white
      to-blue-50
      p-6
      "
    >
      <div
        className="
        mx-auto
        max-w-xl
        "
      >
        <Card
          className="
          rounded-3xl
          border-0
          shadow-xl
          "
        >
          <CardContent
            className="
            p-8
            "
          >
            <div
              className="
              flex
              flex-col
              items-center
              text-center
              "
            >
              <Avatar
                className="
                h-28
                w-28
                border-4
                border-white
                shadow-lg
                "
              >
                <AvatarImage src={user.image || ""} />

                <AvatarFallback
                  className="
                  bg-blue-600
                  text-3xl
                  text-white
                  "
                >
                  {user.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <h1
                className="
                mt-5
                text-3xl
                font-bold
                text-slate-900
                "
              >
                {user.name}
              </h1>

              <p
                className="
                mt-2
                text-slate-500
                "
              >
                ElectroMart User Profile
              </p>
            </div>

            <div
              className="
              mt-8
              space-y-4
              "
            >
              <div
                className="
                flex
                items-center
                gap-4
                rounded-xl
                bg-slate-50
                p-4
                "
              >
                <User className="text-blue-600" />

                <div>
                  <p className="text-xs text-slate-500">Name</p>

                  <p className="font-medium">{user.name}</p>
                </div>
              </div>

              <div
                className="
                flex
                items-center
                gap-4
                rounded-xl
                bg-slate-50
                p-4
                "
              >
                <Mail className="text-blue-600" />

                <div>
                  <p className="text-xs text-slate-500">Email</p>

                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
