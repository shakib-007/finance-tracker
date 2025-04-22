import Image from "next/image";
import TransactionChart from "./components/TransactionChart";
import getAllTransactions from "@/lib/getAllTransactions";

export default async function Home() {
  const transactions = await getAllTransactions();
  console.log(transactions);

  const totalIncome =  transactions.reduce((sum: number, item: any) => item.amount > 0 ? sum + item.amount : sum, 0);
  const totalExpenses = transactions.reduce((sum: number, item: any) => item.amount < 0 ? sum + Math.abs(item.amount) : sum, 0);
  const netBalance = totalIncome - totalExpenses;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Summary Reports</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-100 rounded-lg shadow text-center">
          <p className="text-sm text-gray-600">Total Income</p>
          <p className="text-xl font-bold text-green-600">${totalIncome}</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow text-center">
          <p className="text-sm text-gray-600">Total Expenses</p>
          <p className="text-xl font-bold text-red-600">${totalExpenses}</p>
        </div>
        <div className='p-4 bg-blue-100 rounded-lg shadow text-center'>
          <p className="text-sm text-gray-600">Net Balance</p>
          <p className="text-xl font-bold text-blue-600">
            ${netBalance}
          </p>
        </div>
      </div>

      <div>
        <TransactionChart transactions={transactions} />
      </div>

    </div>
  );
}