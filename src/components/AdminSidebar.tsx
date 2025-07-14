import { useState } from "react";
import { BarChart3, Users, FileText, Newspaper, Megaphone, Award } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const adminMenuItems = [
  { title: "Statistics", url: "/admin/stats", icon: BarChart3 },
  { title: "User Management", url: "/admin/users", icon: Users },
  { title: "Blog Management", url: "/admin/blog", icon: FileText },
  { title: "Newsletter Management", url: "/admin/newsletter", icon: Newspaper },
  { title: "Press Releases", url: "/admin/press", icon: Megaphone },
  { title: "Success Stories", url: "/admin/success-stories", icon: Award },
];

export function AdminSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isExpanded = adminMenuItems.some((item) => isActive(item.url));
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar
      className="w-60"
    >
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}