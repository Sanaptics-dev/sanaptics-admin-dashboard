import { useState } from 'react';
import { Upload, School, MapPin, Mail, Phone, User, Save } from 'lucide-react';

export default function Onboarding() {
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolType: 'public',
    address: '',
    city: '',
    province: 'Gauteng',
    postalCode: '',
    principalName: '',
    email: '',
    phone: '',
    logo: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) { // 2MB limit example
      setErrors((prev) => ({ ...prev, logo: 'File too large (max 2MB)' }));
      return;
    }
    setFormData((prev) => ({ ...prev, logo: file }));
    setErrors((prev) => ({ ...prev, logo: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.schoolName.trim()) newErrors.schoolName = 'School name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (formData.logo && formData.logo.size > 2 * 1024 * 1024) {
      newErrors.logo = 'Logo file too large (max 2MB)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Replace with your actual API call (e.g., axios.post('/api/schools', formData))
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      // Reset form after success
      setFormData({
        schoolName: '',
        schoolType: 'public',
        address: '',
        city: '',
        province: 'Gauteng',
        postalCode: '',
        principalName: '',
        email: '',
        phone: '',
        logo: null,
      });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">School Onboarding</h1>
        <p className="text-gray-400 mt-2">
          Add a new school to the Sanaptics platform. The school will appear in the list of onboarded schools once submitted.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <School className="w-4 h-4" /> School Name *
            </label>
            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="e.g. Johannesburg High School"
            />
            {errors.schoolName && <p className="mt-1 text-sm text-red-400">{errors.schoolName}</p>}
          </div>

          {/* School Type */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">School Type</label>
            <select
              name="schoolType"
              value={formData.schoolType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="independent">Independent</option>
              <option value="special">Special Needs</option>
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Physical Address *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123 Main Street, Suburb"
            />
            {errors.address && <p className="mt-1 text-sm text-red-400">{errors.address}</p>}
          </div>

          {/* City & Province */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Johannesburg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Gauteng">Gauteng</option>
              <option value="Western Cape">Western Cape</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              <option value="Eastern Cape">Eastern Cape</option>
              {/* Add more provinces as needed */}
            </select>
          </div>

          {/* Contact Details */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <User className="w-4 h-4" /> Principal / Admin Name
            </label>
            <input
              type="text"
              name="principalName"
              value={formData.principalName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Dr. Jane Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@school.co.za"
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Contact Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+27 11 123 4567"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
          </div>

          {/* Logo Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Upload className="w-4 h-4" /> School Logo (optional, max 2MB)
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg text-white transition flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Choose File
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {formData.logo && (
                <span className="text-gray-300 text-sm">{formData.logo.name}</span>
              )}
            </div>
            {errors.logo && <p className="mt-1 text-sm text-red-400">{errors.logo}</p>}
          </div>
        </div>

        {/* Submit Section */}
        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2`}
          >
            <Save className="w-5 h-5" />
            {isSubmitting ? 'Onboarding...' : 'Onboard School'}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-6 p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300 text-center">
            School successfully onboarded! It will now appear in the List of Onboarded Schools.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300 text-center">
            There was an error onboarding the school. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
  