'use client'
import { useState } from 'react'
import DashboardSidebar from './components/DashboardSidebar'
import DashboardTopbar from './components/DashboardTopbar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="flex h-screen">
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex w-full flex-1 flex-col">
        <DashboardTopbar setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 overflow-y-auto bg-clr-f8 p-2 md:px-5 md:py-6 lg:px-10">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
