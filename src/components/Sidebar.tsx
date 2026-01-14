import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, GraduationCap, ListChecks } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  // Helper to check if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 z-20 shadow-lg">
      {/* --- LOGO SECTION --- */}
      <div className="p-6 border-b border-gray-100 flex justify-center items-center">
        <img
          src="https://z-cdn-media.chatglm.cn/files/6455cb60-e39c-41ae-808c-85e625845daf.png?auth_key=1868321048-6c67801ab89849c4852733cf1786a342-0-ac609033a3a55d986f8f919927601460"
          alt="Sanaptic Logo"
          className="w-full max-w-[200px] h-auto object-contain"
        />
      </div>

      {/* --- MENU LABEL --- */}
      <div className="px-6 pt-8 pb-4">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          Menu
        </span>
      </div>

      {/* --- NAVIGATION LINKS --- */}
      <nav className="flex-1 px-4 py-2 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                isActive('/dashboard')
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard Summary
            </Link>
          </li>
          <li>
            <Link
              to="/onboarding"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                isActive('/onboarding')
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              School Onboarding
            </Link>
          </li>
          <li>
            <Link
              to="/schools"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                isActive('/schools')
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              <ListChecks className="w-5 h-5" />
              List of Onboarded Schools
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
