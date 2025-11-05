"use client";

import { LogOut, Moon, Settings, Sun, User, Users } from "lucide-react";
import React from "react";
import { Command, CommandInput } from "@/components/ui/command";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "./ui/sidebar";

const NavBar = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <nav className="flex items-center justify-between p-4 sticky top-0 z-50 bg-background">
        {/* LEFT */}
        <SidebarTrigger />

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Command>
              <CommandInput placeholder="Type or search..." />
            </Command>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/profile-photo.jpg" alt="Emma Lopez" />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <h1>Emma Lopez</h1>
                <span className="text-xs text-gray-500">
                  emma.lopez@example.com
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex items-center">
                  <User className="h-[1.2rem] w-[1.2rem] mr-2" /> Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="h-[1.2rem] w-[1.2rem] mr-2" /> Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="h-[1.2rem] w-[1.2rem] mr-2" /> New Team
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild variant="destructive">
                <Link href="/login" className="flex items-center">
                  <LogOut className="mr-2" /> Sign Out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
