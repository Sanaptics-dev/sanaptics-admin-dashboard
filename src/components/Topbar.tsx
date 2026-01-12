// src/components/Topbar.tsx
import { Bell, Moon, Search, Menu } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-4 md:px-8 justify-between fixed w-full md:pl-64 z-10">
      <div className="flex items-center gap-4">
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative w-80 hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search or type command... (Ctrl+K)"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Moon className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
          <div className="hidden md:block">
            <p className="font-medium text-sm">Tshepiso</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
}