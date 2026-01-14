import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  GraduationCap,
  ListChecks,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-[260px] bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 z-20">

      {/* --- LOGO SECTION --- */}
      <div className="p-6 border-b border-gray-100 flex justify-center items-center flex-shrink-0">
        <img
          src="https://z-cdn-media.chatglm.cn/files/6455cb60-e39c-41ae-808c-85e625845daf.png?auth_key=1868321048-6c67801ab89849c4852733cf1786a342-0-ac609033a3a55d986f8f919927601460"
          alt="Sanaptic Logo"
          className="w-full max-w-[200px] h-auto object-contain"
        />
      </div>

      {/* --- MENU LABEL --- */}
      <div className="px-6 pt-6 pb-2 flex-shrink-0">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Menu
        </span>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <nav className="flex-1 px-4 py-2 overflow-y-auto">
        <ul className="space-y-1">

          <li>
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive('/dashboard')
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard Summary
            </Link>
          </li>

          <li>
            <Link
              to="/onboarding"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive('/onboarding')
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              School Onboarding
            </Link>
          </li>

          <li>
            <Link
              to="/schools"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive('/schools')
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <ListChecks className="w-5 h-5" />
              List of Onboarded Schools
            </Link>
          </li>

        </ul>
      </nav>

      {/* --- SETTINGS (BOTTOM) --- */}
      <div className="mt-auto p-4 border-t border-gray-200 bg-gray-50 flex-shrink-0">
        <Link
          to="/settings"
          className={`flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium transition-colors ${
            isActive('/settings')
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </div>

    </aside>
  );
};

export default Sidebar;
