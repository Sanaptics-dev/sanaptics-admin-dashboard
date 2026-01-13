import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  School, 
  ListChecks, 
  Settings 
} from 'lucide-react';

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard Summary" },
  { to: "/onboarding", icon: School, label: "School Onboarding" },
  { to: "/schools", icon: ListChecks, label: "List of Onboarded Schools" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-sanaptics-dark text-white h-screen border-r border-sanaptics-dark-hover">
      {/* Logo + App Name */}
      <div className="p-6 border-b border-sanaptics-dark-hover">
        <div className="flex items-center gap-3">
          {/* REPLACE THIS WITH YOUR ACTUAL LOGO */}
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
            S
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Sanaptics</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-sanaptics-dark-active text-white'
                  : 'text-gray-300 hover:bg-sanaptics-dark-hover hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}