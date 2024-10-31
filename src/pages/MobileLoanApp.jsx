import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { LoanSlider } from '@/components/LoanSlider';
import { MonthlyPayment } from '@/components/MonthlyPayment';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { useLoanCalculator } from '@/hooks/useLoanCalculator';

export default function MobileLoanApp({ onApply }) {
  const { loanAmount, setLoanAmount, loanTerm, setLoanTerm, monthlyPayment } = useLoanCalculator();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 text-white">
      <Header />

      <div className="px-4">
        <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
          <CardContent className="p-4 space-y-6">
            <LoanSlider
              label="Loan Amount"
              value={loanAmount}
              onChange={setLoanAmount}
              min={500}
              max={5000}
              step={100}
              prefix="RM "
            />

            <LoanSlider
              label="Loan Term"
              value={loanTerm}
              onChange={setLoanTerm}
              min={3}
              max={36}
              step={1}
              suffix=" months"
            />

            <MonthlyPayment amount={monthlyPayment} />

            <Button 
              className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold py-6"
              onClick={onApply}
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <Features />
      <Footer />
    </div>
  );
}