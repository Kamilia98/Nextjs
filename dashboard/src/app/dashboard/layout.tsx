import Sidebar from '@/components/Sidebar';
import React from 'react';


const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="p-8 mt-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
