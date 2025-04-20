import Image from "next/image";

export default function Home() {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-6 bg-gradient-to-r from-cyan-200 to-red-100 shadow-md">
      <h1 className="text-2xl font-bold mb-4">Summary</h1>
      <div className="flex justify-between">
        <div className="mt-4 border-2 border-gray-400 rounded-lg p-3 space-y-2">
          <p className="text-3xl font-bold text-green-600">$10,000.00</p>
          <h2 className="text-xl font-semibold mb-2">Total Balance</h2>
        </div>
        <div className="mt-4 border-2 border-gray-400 rounded-lg p-3 space-y-2">
          <p className="text-3xl font-bold text-green-600">$5,000.00</p>
          <h2 className="text-xl font-semibold mb-2">Total Income</h2>
        </div>
        <div className="mt-4 border-2 border-gray-400 rounded-lg p-3 space-y-2">
          <p className="text-3xl font-bold text-red-600">$2,000.00</p>
          <h2 className="text-xl font-semibold mb-2">Total Expenses</h2>
        </div>
      </div>

    </div>
  );
}