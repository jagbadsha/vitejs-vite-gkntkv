import { Button } from '@/components/ui/button';
import { Calculator, Shield, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FEATURES = [
  { icon: Calculator, title: 'Fast Approval', desc: 'Get approved in minutes' },
  { icon: Shield, title: 'Secure Process', desc: '100% safe & encrypted' },
  { icon: Clock, title: 'Flexible Terms', desc: 'Choose your repayment plan' },
];

export function Features() {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="mt-8 px-4">
      <Button
        variant="ghost"
        className="text-white w-full flex items-center justify-between mb-4"
        onClick={() => setShowFeatures(!showFeatures)}
      >
        <span className="text-lg font-semibold">Why Choose Us?</span>
        <ChevronDown className={`transform transition-transform ${showFeatures ? 'rotate-180' : ''}`} />
      </Button>

      {showFeatures && (
        <div className="grid grid-cols-1 gap-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center space-x-4"
            >
              <div className="bg-yellow-400/20 p-3 rounded-full">
                <Icon className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-indigo-200">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}