export function MonthlyPayment({ amount }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-xl p-4 mt-4">
      <p className="text-sm font-medium text-indigo-200">Monthly Payment</p>
      <p className="text-3xl font-bold text-yellow-400 mt-1">
        RM {amount.toFixed(2)}
      </p>
      <p className="text-xs text-indigo-200 mt-1">18% APR</p>
    </div>
  );
}