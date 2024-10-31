import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function PersonalInfoPage({ onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    idNumber: '',
    address: '',
    employment: 'permanent',
    yearsOfEmployment: '1-3',
    companyName: '',
    industry: '',
    companyAddress: '',
    companyPhone: '',
    monthlyIncome: '',
  });

  const handleChange = (e) => {
    let value = e.target.value;
    
    // Format ID number as 000000-00-0000
    if (e.target.name === 'idNumber') {
      value = value.replace(/\D/g, '').substring(0, 12);
      if (value.length >= 6) value = value.slice(0, 6) + '-' + value.slice(6);
      if (value.length >= 9) value = value.slice(0, 9) + '-' + value.slice(9);
    }
    
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-4">
      <Button 
        variant="ghost" 
        className="text-white mb-6"
        onClick={onBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <h1 className="text-2xl font-bold mb-6">Personal Information</h1>

      <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">ID Number (Format: 000000-00-0000)</label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                placeholder="000000-00-0000"
                maxLength="14"
                className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                rows="3"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Employment Type</label>
                <select
                  name="employment"
                  value={formData.employment}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                  required
                >
                  <option value="permanent">Permanent</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Years of Employment</label>
                <select
                  name="yearsOfEmployment"
                  value={formData.yearsOfEmployment}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                  required
                >
                  <option value="1-3">1-3 years</option>
                  <option value="3-4">3-4 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">More than 10 years</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Industry</label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Company Address</label>
              <textarea
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                rows="3"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Company Contact Number</label>
                <input
                  type="tel"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Monthly Income (RM)</label>
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold py-6"
            >
              Next: Upload Documents <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}