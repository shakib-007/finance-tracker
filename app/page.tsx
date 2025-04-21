import Image from "next/image";
import TransactionChart from "./components/TransactionChart";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Summary Reports</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-100 rounded-lg shadow text-center">
          <p className="text-sm text-gray-600">Total Income</p>
          <p className="text-xl font-bold text-green-600">$20,000.00</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow text-center">
          <p className="text-sm text-gray-600">Total Expenses</p>
          <p className="text-xl font-bold text-red-600">$10,000.00</p>
        </div>
        <div className='p-4 bg-blue-100 rounded-lg shadow text-center'>
          <p className="text-sm text-gray-600">Net Balance</p>
          <p className="text-xl font-bold text-blue-600">
            $10,000.00
          </p>
        </div>
      </div>

      <div>
        <TransactionChart />
      </div>

    </div>
  );
}