import { useState } from 'react';
import { Search, Eye, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_SCHOOLS = [
  { id: '1', name: 'Johannesburg High School', type: 'Public', address: '123 Main Rd, Sandton', principal: 'Dr. Thabo Mokoena', onboarded: '2025/11/15' },
  { id: '2', name: 'Cape Town International College', type: 'Private', address: '45 Ocean View, Camps Bay', principal: 'Ms. Sarah Johnson', onboarded: '2025/12/03' },
  { id: '3', name: 'Pretoria Tech Academy', type: 'Private', address: '88 Silver Lakes, Pretoria', principal: 'Mr. John Dube', onboarded: 'Pending' },
];

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Filter Logic
  const filteredSchools = MOCK_SCHOOLS.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.principal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = 2; // Mock total pages

  return (
    <div className="space-y-8 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">List of Onboarded Schools</h1>
        <p className="text-lg text-slate-600 mt-2">View and manage all schools ({filteredSchools.length} total).</p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-lg">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name, address, or principal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        />
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">School Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">Type</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">Address</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Principal</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">Onboarded</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSchools.length > 0 ? (
                filteredSchools.map((school) => (
                  <tr key={school.id} className="hover:bg-blue-50 transition-colors duration-200 group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-semibold text-slate-900">{school.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        school.type === 'Public' ? 'bg-gray-100 text-gray-700 border border-gray-200' : 'bg-purple-100 text-purple-700 border border-purple-200'
                      }`}>
                        {school.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-600 hidden lg:table-cell">{school.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-700 font-medium">{school.principal}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 hidden md:table-cell">{school.onboarded}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => navigate(`/schools/${school.id}`)}
                          className="text-blue-600 hover:bg-blue-100 p-2 rounded-full transition-colors duration-200"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full hover:text-gray-700 transition-colors duration-200">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    No schools found matching "{searchTerm}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 bg-white rounded-b-xl flex items-center justify-between">
          <span className="text-sm text-slate-600">Showing {Math.max(1, filteredSchools.length)} results</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white border border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="px-4 py-2 text-sm font-semibold text-slate-900 bg-gray-100 border border-gray-300 rounded-full">
              Page {currentPage}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white border border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}