import { Search, Moon, Bell, ChevronDown, Menu, User } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm flex-shrink-0 z-10">

      {/* 1. Left Side: Menu Toggle */}
      <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-md transition-colors">
        <Menu className="w-5 h-5" />
      </button>

      {/* 2. Middle Side: Search Bar */}
      <div className="flex-1 max-w-xl relative mx-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search or type command..."
          className="w-full pl-10 pr-24 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
        />

        {/* Shortcut Badge (Ctrl+K) */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <span className="text-xs font-medium text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded shadow-sm">
            Ctrl+K
          </span>
        </div>
      </div>

      {/* 3. Right Side: Actions & Profile */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-md transition-colors">
          <Moon className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-md transition-colors relative">
          <Bell className="w-5 h-5" />
          {/* Notification Dot (Active State) */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 mx-2"></div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded-md transition-colors">
          <span className="text-sm font-medium text-gray-700">Admin</span>

          {/* USER ICON (Avatar Style) */}
          <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center border border-gray-200">
            <User className="w-5 h-5" />
          </div>

          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;