import Sidebar from '@/components/Sidebar'; // Adjust path if needed
import { Search, User, Outlet } from 'lucide-react';
import { Outlet as RouterOutlet } from 'react-router-dom'; // <-- Import Outlet from router

// Note: Renaming imports if names collide, but here it's lucide vs router.

// CORRECTED COMPONENT
export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar stays static */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">

        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-md flex-shrink-0">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-sm font-semibold text-gray-700">Admin</span>
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border border-blue-200 font-bold">
              A
            </div>
          </div>
        </header>

        {/* PAGE CONTENT - MUST USE OUTLET */}
        {/* This is where your Dashboard, Onboarding, Schools pages will appear */}
        <main className="flex-1 overflow-y-auto p-8">
          <RouterOutlet />
        </main>

      </div>
    </div>
  );
}