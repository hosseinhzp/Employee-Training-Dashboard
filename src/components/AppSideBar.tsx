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
  ShieldCheck,
  Users,
  VerifiedIcon,
} from 'lucide-react'
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
} from './ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarImage } from './ui/avatar'

type Item = { title: string; url: string; icon: React.ElementType }

const items: Item[] = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Tasks', url: '/tasks', icon: ListTodo },
  { title: 'Calendar', url: '/calendar', icon: AppWindowIcon },
  { title: 'Chats', url: '/chats', icon: MessageSquare },
  { title: 'Users', url: '/users', icon: Users },
  { title: 'Secured by Clerk', url: '/secured', icon: CircleParking },
]

const AppSideBar = () => {
  // ProfileBlock: reusable avatar + name + email used in trigger and menu label
  const ProfileBlock = ({ compact }: { compact?: boolean }) => (
    <div className={compact ? 'flex items-center gap-3' : 'flex items-center gap-4'}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <div className={compact ? 'flex flex-col' : 'flex flex-col flex-1'}>
        <span className="text-sm font-semibold">HosseinHzp</span>
        <span className="text-xs text-muted-foreground">HosseinHzp@gmail.com</span>
      </div>
    </div>
  )

  return (
    <Sidebar collapsible="icon">
      {/* Sidebar: Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src="/vercel.svg" alt="Logo" width={20} height={20} />
                <span>Bora Bora</span>
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
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Auth">
                    <ShieldCheck />
                    <span>Auth</span>
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
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
            </SidebarMenu>
            
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Errors">
                    <Bug />
                    <span>Errors</span>
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <Link href="/">Not Found</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>

  {/* Group: Other */}
        <SidebarGroup>
          <SidebarGroupLabel>Other</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Settings">
                    <ShieldCheck />
                    <span>Settings</span>
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <Link href="/">Profile</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <Link href="/">Account</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenu>
            
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Help Center">
                  <HelpCircle />
                  <span>Help Center</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

  {/* Sidebar: Footer */}
  <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <div className='m-2 cursor-pointer' role="button" tabIndex={0}>
                <ProfileBlock />
              </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={0} align="start" className="w-64">
            <DropdownMenuLabel>
              <ProfileBlock compact />
            </DropdownMenuLabel>
              
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <VerifiedIcon/>
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard/>
              <span>Bailing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BellRing/>
              <span>Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem variant='destructive'>
              <LogOut/>
              <span>Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSideBar