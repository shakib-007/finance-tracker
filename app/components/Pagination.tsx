"use client";

import { useEffect, useState } from "react";

export default function Pagination() {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 5;

  const transactionss = [
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

  useEffect(() => {
    fetch(`http://localhost:4000/transactions?_page=${page}&_limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, [page]);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <span>Showing 1 - 2 of 12</span>
        </div>
        <div>
          <select
            name="limit"
            className="border border-gray-300 rounded-lg p-1"
          >
            <option value="">Per Page</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="flex gap-2 mt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-2">
            {page} / 10
          </span>
          <button
            disabled={page === 10}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
