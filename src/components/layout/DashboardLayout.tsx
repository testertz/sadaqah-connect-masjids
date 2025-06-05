
import React from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'user' | 'admin';
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function DashboardLayout({ children, userType, title, subtitle, breadcrumbs }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar userType={userType} />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            {breadcrumbs && (
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                      <BreadcrumbItem className="hidden md:block">
                        {crumb.href ? (
                          <BreadcrumbLink href={crumb.href}>
                            {crumb.label}
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator className="hidden md:block" />
                      )}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            )}
          </header>
          <div className="flex-1 space-y-4 p-4 md:p-8">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
                {subtitle && (
                  <p className="text-muted-foreground">{subtitle}</p>
                )}
              </div>
            </div>
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
