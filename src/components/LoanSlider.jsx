import { Slider } from '@/components/ui/slider';

export function LoanSlider({ label, value, onChange, min, max, step, prefix = '', suffix = '' }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xl font-bold text-yellow-400">{prefix}{value}{suffix}</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(val) => onChange(val[0])}
        min={min}
        max={max}
        step={step}
        className="my-4"
      />
      <div className="flex justify-between text-xs text-indigo-200">
        <span>{prefix}{min}{suffix}</span>
        <span>{prefix}{max}{suffix}</span>
      </div>
    </div>
  );
}