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
        <div className="flex-1 overflow-y-auto bg-gray-100 p-6">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
