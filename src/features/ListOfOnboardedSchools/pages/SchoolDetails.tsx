import { useParams } from 'react-router-dom';
import { Building2, MapPin, User, Calendar, Tag } from 'lucide-react';

const MOCK_SCHOOL_DETAILS = {
  '1': { id: '1', name: 'Johannesburg High School', type: 'Public', address: '123 Main Rd, Sandton', principal: 'Dr. Thabo Mokoena', onboarded: '2025/11/15', description: 'A leading public high school in Johannesburg known for academic excellence and a wide range of extracurricular activities.', status: 'Active' },
  '2': { id: '2', name: 'Cape Town International College', type: 'Private', address: '45 Ocean View, Camps Bay', principal: 'Ms. Sarah Johnson', onboarded: '2025/12/03', description: 'An exclusive private college offering an international curriculum and state-of-the-art facilities.', status: 'Active' },
  '3': { id: '3', name: 'Pretoria Tech Academy', type: 'Private', address: '88 Silver Lakes, Pretoria', principal: 'Mr. John Dube', onboarded: 'Pending', description: 'Specializing in technology and innovation, preparing students for future-proof careers.', status: 'Pending' },
};

const SchoolDetails = () => {
  const { id } = useParams();
  const school = MOCK_SCHOOL_DETAILS[id as keyof typeof MOCK_SCHOOL_DETAILS];

  if (!school) {
    return (
      <div className="space-y-8 p-6 lg:p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">School Not Found</h1>
        <p className="text-lg text-slate-600 mt-2">The requested school details could not be found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">{school.name}</h1>
        <p className="text-lg text-slate-600 mt-2">Detailed information about {school.name}.</p>
      </div>

      {/* School Details Card */}
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <Building2 size={24} className="text-blue-500" />
            <div>
              <p className="text-sm font-medium text-slate-500">Type</p>
              <p className="text-base font-semibold text-slate-900">{school.type}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin size={24} className="text-blue-500" />
            <div>
              <p className="text-sm font-medium text-slate-500">Address</p>
              <p className="text-base font-semibold text-slate-900">{school.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <User size={24} className="text-blue-500" />
            <div>
              <p className="text-sm font-medium text-slate-500">Principal</p>
              <p className="text-base font-semibold text-slate-900">{school.principal}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Calendar size={24} className="text-blue-500" />
            <div>
              <p className="text-sm font-medium text-slate-500">Onboarded</p>
              <p className="text-base font-semibold text-slate-900">{school.onboarded}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Tag size={24} className="text-blue-500" />
            <div>
              <p className="text-sm font-medium text-slate-500">Status</p>
              <p className={`text-base font-semibold ${
                school.status === 'Active' ? 'text-green-600' : 'text-orange-600'
              }`}>{school.status}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Description</h3>
          <p className="text-slate-700 leading-relaxed">{school.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetails;
