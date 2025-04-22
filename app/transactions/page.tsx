'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import toast from 'react-hot-toast';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export default function Transactions() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const [category, setCategory] = useState<string>("");
    const [deleteStatus, setDeleteStatus] = useState<boolean>(false);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
            setLoading(true);
            const res = await fetch(`${API_URL}/transactions?_page=${page}&_per_page=${limit}&category=${category}`);
            const data = await res.json();
            setTotal(data.items);
            setTransactions(data?.data || []);
            setDeleteStatus(false);
            } catch (err) {
            console.error("Failed to fetch transactions:", err);
            } finally {
            setLoading(false);
            }
        };
    
        fetchTransactions();
    }, [page, limit, category, deleteStatus]);

    if (loading) {
        return (
        <div className='flex justify-center items-center'>
            <p>Loading.....</p>
        </div>
        );
    }

  return (
    <div>
        <div className='flex justify-between mb-4'>
            <div>
                <h1 className='text-2xl font-bold mb-2'>Transactions List</h1>
            </div>

            <div>
                <button
                    type='button'
                    className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-200'
                >
                    <span className='text-sm font-semibold'>
                        <Link href='/transactions/add' className='flex items-center'>
                            Add Transaction
                        </Link>
                    </span>
                </button>
            </div>
        </div>

        <div className='mb-4'>
          <select
            name='category'
            className="border border-gray-300 bg-indigo-100 rounded-lg p-3"
            value={category}
            onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
            }}
          >
            <option value="">Filter by Category</option>
            <option value="Food">Food</option>
            <option value="Salary">Salary</option>
            <option value="Rent">Rent</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className='overflow-x-auto bg-white'>
            <table className='min-w-full  text-sm text-left'>
                <thead className='bg-gray-100 text-gray-700 uppercase'>
                    <tr>
                        <th className='py-3 pl-3'>Date</th>
                        <th className='py-3'>Description</th>
                        <th className='py-3'>Category</th>
                        <th className='py-3'>Amount</th>
                        <th className='py-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td className='p-3'>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>${transaction.amount}</td>
                            <td>
                                <Link href={`/transactions/edit/${transaction.id}`} className='bg-blue-500 text-white px-4 py-2 me-1 rounded-lg hover:bg-cyan-600 transition duration-200'>
                                    Edit
                                </Link>

                                <button
                                    type='button'
                                    className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 cursor-pointer'
                                    onClick={async () => {
                                        const res = await fetch(`${API_URL}/transactions/${transaction.id}`, {
                                            method: 'DELETE',
                                        });
                                        if (res.ok) {
                                            toast.success("Transaction deleted successfully");
                                            setDeleteStatus(true);
                                        }
                                        else {
                                            toast.error("Failed to delete transaction");
                                        }
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <Pagination 
                    totalItems={total} // Replace with the actual total items count from your API
                    itemsPerPage={limit}
                    currentPage={page}
                    setPage={setPage}
                    setLimit={setLimit} // Add this line to pass setLimit to Pagination
                />
            </div>
            
        </div>
    </div>
  )
}
