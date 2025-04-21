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

const transactions = [
  {
    id: "1",
    description: "Grocery shopping",
    amount: -50.25,
    category: "Food",
    date: "2025-04-01",
  },
  {
    id: "2",
    description: "Monthly salary",
    amount: 3000,
    category: "Salary",
    date: "2025-04-02",
  },
  {
    id: "3",
    description: "Dinner",
    amount: -25,
    category: "Food",
    date: "2025-04-03",
  },
  {
    id: "4",
    description: "Freelance payment",
    amount: 500,
    category: "Salary",
    date: "2025-04-04",
  },
  {
    id: "5",
    description: "Electricity bill",
    amount: -120,
    category: "Expenses",
    date: "2025-04-05",
  },
];


const TransactionChart = () => {

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
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Income vs Expenses by Category
      </h2>

      <ResponsiveContainer width="100%" height={300}>
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
  );
};

export default TransactionChart;
