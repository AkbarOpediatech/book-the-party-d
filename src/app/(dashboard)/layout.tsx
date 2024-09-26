'use client'
import { useState } from 'react'
import DashboardSidebar from './components/DashboardSidebar'
import DashboardTopbar from './components/DashboardTopbar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex w-full flex-1 flex-col">
        {/* Topbar */}
        <DashboardTopbar setSidebarOpen={setSidebarOpen} />

        {/* Page content */}
        <div className="bg-clr-f8 flex-1 overflow-y-auto px-10 py-6">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
