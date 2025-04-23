'use client';

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

const TransactionChart = ({ transactions }: { transactions: Transaction[] }) => {

  const chartData = Array.from(new Set(transactions.map((t) => t.category))).map((category) => {
    const income = transactions
      .filter((t) => t.category === category && t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0);
  
    const expense = transactions
      .filter((t) => t.category === category && t.amount < 0)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  
    return { category, Income: income, Expense: expense };
  });

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-blue-50 shadow-lg rounded-lg">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">
          Income vs Expenses by Category
        </h2>

        <div className="w-full h-72 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Income" fill="#4ade80" />
              <Bar dataKey="Expense" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

  );
};

export default TransactionChart;
