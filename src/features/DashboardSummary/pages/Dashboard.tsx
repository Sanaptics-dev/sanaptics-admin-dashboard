// src/features/DashboardSummary/pages/Dashboard.tsx
import {
  Users,
  Clock,
  AlertTriangle,
  Building2,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_RECENT_ONBOARDED_SCHOOLS = [
  { id: '4', name: 'East Side High School', onboardedDate: '2025-01-10', status: 'Active' },
  { id: '5', name: 'West End Primary', onboardedDate: '2025-01-05', status: 'Active' },
  { id: '6', name: 'Northwood College', onboardedDate: '2024-12-28', status: 'Active' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
          Dashboard Summary
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          Overview of school onboarding and platform activity.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => navigate('/schools/onboard')}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <TrendingUp size={18} />
          Onboard New School
        </button>

        <button
          onClick={() => navigate('/requests/manage')}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Manage Requests
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Schools */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
          <div className="flex items-center gap-3 text-slate-500 mb-3">
            <Building2 size={20} className="text-blue-500" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Total Schools
            </span>
          </div>
          <div className="text-5xl font-extrabold text-slate-900">24</div>
        </div>

        {/* Pending Requests */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
          <div className="flex items-center gap-3 text-orange-500 mb-3">
            <Clock size={20} />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Pending Requests
            </span>
          </div>
          <div className="text-5xl font-extrabold text-orange-600">8</div>
        </div>

        {/* Total Learners */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
          <div className="flex items-center gap-3 text-slate-500 mb-3">
            <Users size={20} className="text-purple-500" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Total Learners
            </span>
          </div>
          <div className="text-5xl font-extrabold text-slate-900">12,450</div>
        </div>

        {/* Issues Reported */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
          <div className="flex items-center gap-3 text-red-500 mb-3">
            <AlertTriangle size={20} />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Issues Reported
            </span>
          </div>
          <div className="text-5xl font-extrabold text-red-600">2</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Schools by Type</h3>
          <div className="flex items-end justify-around h-48 pb-4 border-b border-gray-100">
            <div className="flex flex-col items-center gap-2 w-1/3 group cursor-pointer">
              <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition">
                65%
              </span>
              <div className="w-full bg-blue-600 rounded-t-lg h-32 transition-all group-hover:bg-blue-500 shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)]"></div>
              <span className="text-sm font-medium text-slate-900">Public</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-1/3 group cursor-pointer">
              <span className="text-sm font-semibold text-slate-700 group-hover:text-purple-600 transition">
                35%
              </span>
              <div className="w-full bg-purple-600 rounded-t-lg h-20 transition-all group-hover:bg-purple-500 shadow-[0_4px_6px_-1px_rgba(147,51,234,0.2)]"></div>
              <span className="text-sm font-medium text-slate-900">Private</span>
            </div>
          </div>
        </div>

        {/* Trend Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Onboarding Activity</h3>
          <div className="flex flex-col justify-between h-48">
            <div className="flex justify-between items-end">
              <span className="text-sm text-slate-600 font-medium">This Month</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
                +12% vs last month
              </span>
            </div>
            <div className="text-5xl font-extrabold text-slate-900">8 New</div>
            <div className="flex items-end justify-end">
              <svg width="100%" height="60" viewBox="0 0 200 60" className="overflow-visible">
                <defs>
                  <linearGradient id="gradientLine" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#93C5FD', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,50 50,45 100,30 150,20 200,5"
                  fill="none"
                  stroke="url(#gradientLine)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="200" cy="5" r="4" fill="#2563EB" className="drop-shadow-lg" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Onboarded Schools Section */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Onboarded Schools</h3>
        <ul className="divide-y divide-gray-200">
          {MOCK_RECENT_ONBOARDED_SCHOOLS.map((school) => (
            <li key={school.id} className="py-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800">{school.name}</p>
                <p className="text-sm text-slate-500 mt-1">Onboarded: {school.onboardedDate}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  school.status === 'Active'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                {school.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
