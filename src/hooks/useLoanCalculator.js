import { useState, useEffect } from 'react';

export function useLoanCalculator(initialAmount = 2500, initialTerm = 12) {
  const [loanAmount, setLoanAmount] = useState(initialAmount);
  const [loanTerm, setLoanTerm] = useState(initialTerm);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const monthlyRate = 0.18 / 12;
    const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
    setMonthlyPayment(payment);
  }, [loanAmount, loanTerm]);

  return {
    loanAmount,
    setLoanAmount,
    loanTerm,
    setLoanTerm,
    monthlyPayment
  };
}