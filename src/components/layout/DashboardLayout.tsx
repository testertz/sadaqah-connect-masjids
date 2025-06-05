
import React from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'user' | 'admin';
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function DashboardLayout({ children, userType, title, subtitle, breadcrumbs }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SidebarProvider>
        <div className="flex w-full flex-1 bg-gray-50">
          <AppSidebar userType={userType} />
          <SidebarInset className="flex-1 flex flex-col">
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
            <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8">
              <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
                  {subtitle && (
                    <p className="text-muted-foreground mt-1">{subtitle}</p>
                  )}
                </div>
              </div>
              {children}
            </div>
            <Footer />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
