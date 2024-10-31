import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Upload, Check } from 'lucide-react';

const DOCUMENT_REQUIREMENTS = {
  employed: [
    { id: 'mykad', label: 'Copy of MyKad (front and back)', required: true },
    { id: 'salarySlip', label: "Latest 1 month's Salary Slip", required: true },
    { id: 'bankStatement', label: "Latest 1 month's bank statement", required: true },
    { id: 'epfStatement', label: "Latest 12 months' EPF Statement", required: true },
    { id: 'formB', label: 'Latest Form B/BE (with validated receipt of payment to IRB)', required: true },
  ],
  'self-employed': [
    { id: 'mykad', label: 'Copy of MyKad (front and back)', required: true },
    { id: 'businessCert', label: 'Form 9,24, 49 or Business Registration Certificate', required: true },
    { id: 'bankStatement', label: "Latest 1 month's bank statement", required: true },
  ],
  commission: [
    { id: 'mykad', label: 'Copy of MyKad (front and back)', required: true },
    { id: 'commissionSlip', label: "Latest 6 months' Salary Slip / Commission Statement", required: true },
    { id: 'bankStatement', label: "Latest 6 months' bank statement", required: true },
  ],
};

export default function DocumentsPage({ employmentType = 'employed', onBack, onSubmit }) {
  const [uploads, setUploads] = useState({});

  const handleFileChange = (documentId, file) => {
    setUploads(prev => ({
      ...prev,
      [documentId]: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(uploads);
  };

  const documents = DOCUMENT_REQUIREMENTS[employmentType] || DOCUMENT_REQUIREMENTS.employed;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-4">
      <Button 
        variant="ghost" 
        className="text-white mb-6"
        onClick={onBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <h1 className="text-2xl font-bold mb-6">Required Documents</h1>

      <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {documents.map(({ id, label, required }) => (
              <div key={id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">
                    {label}
                    {required && <span className="text-red-400 ml-1">*</span>}
                  </label>
                  {uploads[id] && <Check className="h-4 w-4 text-green-400" />}
                </div>
                <div className="relative">
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(id, e.target.files[0])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    required={required}
                  />
                  <div className="w-full p-4 rounded-md bg-white/20 border border-white/30 flex items-center justify-center gap-2">
                    <Upload className="h-4 w-4" />
                    <span>{uploads[id]?.name || 'Click to upload'}</span>
                  </div>
                </div>
              </div>
            ))}

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold py-6"
            >
              Submit Application <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}