import { useState } from 'react';
import { Search, Eye, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data (replace with real API fetch later)
const mockSchools = [
  {
    id: '1',
    name: 'Johannesburg High School',
    type: 'Public',
    address: '123 Main Rd, Sandton',
    principal: 'Dr. Thabo Mokoena',
    email: 'principal@johannesburghs.co.za',
    phone: '+27 11 234 5678',
    onboardedAt: '2025-11-15',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Cape Town International College',
    type: 'Private',
    address: '45 Ocean View, Camps Bay',
    principal: 'Ms. Sarah Johnson',
    email: 'admin@cticollege.edu',
    phone: '+27 21 987 6543',
    onboardedAt: '2025-12-03',
    status: 'Active',
  },
  // Add more mock entries as needed...
];

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Simple client-side filtering
  const filteredSchools = mockSchools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.principal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredSchools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSchools = filteredSchools.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">List of Onboarded Schools</h1>
          <p className="text-gray-400 mt-2">
            View and manage all schools that have been onboarded to the Sanaptics platform ({filteredSchools.length} total).
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, address, or principal..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-900/70">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300">School Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300 hidden md:table-cell">Type</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300 hidden lg:table-cell">Address</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300">Principal</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300 hidden md:table-cell">Onboarded</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedSchools.length > 0 ? (
                paginatedSchools.map((school) => (
                  <tr
                    key={school.id}
                    className="border-t border-gray-700 hover:bg-gray-700/50 transition"
                  >
                    <td className="px-6 py-4 font-medium text-white">{school.name}</td>
                    <td className="px-6 py-4 text-gray-300 hidden md:table-cell">{school.type}</td>
                    <td className="px-6 py-4 text-gray-300 hidden lg:table-cell">{school.address}</td>
                    <td className="px-6 py-4 text-gray-300">{school.principal}</td>
                    <td className="px-6 py-4 text-gray-400 hidden md:table-cell">
                      {new Date(school.onboardedAt).toLocaleDateString('en-ZA')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Link
                          to={`/schools/${school.id}`}
                          className="text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="hidden sm:inline">View Details</span>
                        </Link>
                        <button className="text-gray-400 hover:text-white transition">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    No schools found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredSchools.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-700 flex items-center justify-between flex-wrap gap-4">
            <div className="text-sm text-gray-400">
              Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredSchools.length)} of {filteredSchools.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="px-4 py-2 text-sm font-medium text-gray-300">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}