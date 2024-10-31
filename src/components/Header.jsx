import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <div className="pt-12 pb-6 px-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-black">
          Swift<span className="text-yellow-400">Finance</span>
        </h1>
        <Button variant="ghost" className="text-white hover:text-yellow-400">
          Login
        </Button>
      </div>
      <p className="text-lg font-medium text-indigo-200">Need Quick Cash?</p>
      <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
        Get Instant Loans
      </h2>
    </div>
  );
}