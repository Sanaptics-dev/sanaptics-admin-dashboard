import { useState } from 'react';
import { Upload, School, MapPin, Mail, Phone, User, Save, CheckCircle } from 'lucide-react';

export default function Onboarding() {
  const [formData, setFormData] = useState({
    schoolName: '', schoolType: 'public', address: '', city: '', principalName: '', email: '', phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSuccess(true);

    // Reset form after delay
    setTimeout(() => {
      setSuccess(false);
      setFormData({ schoolName: '', schoolType: 'public', address: '', city: '', principalName: '', email: '', phone: '' });
    }, 3000);
  };

  return (
    <div className="space-y-8 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">School Onboarding</h1>
        <p className="text-lg text-slate-600 mt-2">Add a new school to Sanaptics platform.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-md p-8 md:p-10 relative overflow-hidden">

        {/* Success Overlay */}
        {success && (
          <div className="absolute inset-0 bg-white/95 z-10 flex flex-col items-center justify-center animate-in fade-in duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Success!</h2>
            <p className="text-slate-600">School has been added to the database.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Name */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <School className="w-4 h-4 text-blue-600" /> School Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="schoolName"
              required
              value={formData.schoolName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              placeholder="e.g. Johannesburg High School"
            />
          </div>

          {/* School Type */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">School Type</label>
            <select
              name="schoolType"
              value={formData.schoolType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="independent">Independent</option>
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2 space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <MapPin className="w-4 h-4 text-blue-600" /> Physical Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              placeholder="123 Main Street, Suburb"
            />
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              placeholder="Johannesburg"
            />
          </div>

          {/* Province */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Province</label>
            <select
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            >
              <option>Gauteng</option>
              <option>Western Cape</option>
              <option>KwaZulu-Natal</option>
            </select>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <User className="w-4 h-4 text-blue-600" /> Principal Name
            </label>
            <input
              type="text"
              name="principalName"
              value={formData.principalName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              placeholder="Dr. Jane Smith"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Mail className="w-4 h-4 text-blue-600" /> Contact Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              placeholder="admin@school.co.za"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Phone className="w-4 h-4 text-blue-600" /> Contact Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              placeholder="+27 11 123 4567"
            />
          </div>

          {/* Logo Upload */}
          <div className="md:col-span-2 space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Upload className="w-4 h-4 text-blue-600" /> School Logo (Max 2MB)
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 font-medium">
                <Upload className="w-5 h-5" />
                Choose File
                <input type="file" className="hidden" accept="image/*" />
              </label>
              <span className="text-sm text-slate-500 italic">No file chosen</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Onboarding...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Onboard School
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}