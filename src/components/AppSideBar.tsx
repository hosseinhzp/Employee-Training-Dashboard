import {
  AppWindowIcon,
  BellRing,
  Bug,
  ChevronRight,
  CircleParking,
  CreditCard,
  HelpCircle,
  LayoutDashboard,
  ListTodo,
  LogOut,
  MessageSquare,
  Settings,
  ShieldCheck,
  User2,
  Users,
  VerifiedIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage } from "./ui/avatar";

type Item = { title: string; url: string; icon: React.ElementType };

const items: Item[] = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Tasks", url: "/tasks", icon: ListTodo },
  { title: "Users", url: "/users", icon: Users },
  { title: "Settings", url: "#", icon: Settings },
];

const AppSideBar = () => {
  // ProfileBlock: reusable avatar + name + email used in trigger and menu label
  const ProfileBlock = ({ compact }: { compact?: boolean }) => (
    <div
      className={
        compact ? "flex items-center gap-3" : "flex items-center gap-4"
      }
    >
      <Avatar className={compact ? "h-8 w-8" : "h-10 w-10"}>
        <AvatarImage src="/profile-photo.jpg" alt="Emma Lopez" />
      </Avatar>
      <div className={compact ? "flex flex-col" : "flex flex-col flex-1"}>
        <span className="text-sm font-semibold">Emma Lopez</span>
        <span className="text-xs text-muted-foreground">
          emma.lopez@example.com
        </span>
      </div>
    </div>
  );

  return (
    <Sidebar collapsible="icon">
      {/* Sidebar: Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src="/icon.svg" alt="Logo" width={30} height={30} />
                <h1 className="text-2xl font-semibold font-sans">AceDesign</h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar: Content */}
      <SidebarContent>
        {/* Group: General */}
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Group: Pages */}
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                {/* Use a native button as the collapsible trigger to avoid asChild prop forwarding complexity */}
                <CollapsibleTrigger asChild>
                  <button
                    type="button"
                    className="cursor-pointer flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm hover:bg-sidebar-accent [&>svg]:size-4 [&>svg]:shrink-0 [&>span:last-child]:truncate"
                  >
                    <ShieldCheck />
                    <span>Auth</span>
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </button>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <Link href="/login">Sign In</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <Link href="/register">Sign Up</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <Link href="/password">Reset Password</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </CollapsibleContent>
              </Collapsible>
              <SidebarMenuItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/profile">
                    <User2 />
                    User Profile
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar: Footer */}
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="m-2 cursor-pointer" role="button" tabIndex={0}>
              <ProfileBlock />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={0} align="start" className="w-64">
            <DropdownMenuLabel>
              <ProfileBlock compact />
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex items-center">
                <VerifiedIcon />
                <span>Account</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users />
              <span>New Team</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild variant="destructive">
              <Link href="/login" className="flex items-center">
                <LogOut />
                <span>Sign Out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSideBar;
