import Link from 'next/link'
import React from 'react'
import Pagination from '../components/Pagination'

export default function Transactions() {
  return (
    <div>
        <div className='flex justify-between mb-4'>
            <div>
                <h1 className='text-2xl mb-2'>Transactions List</h1>
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
            className="border border-gray-300 rounded-lg p-3"
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
                        <th className='py-2'>Date</th>
                        <th className='py-2'>Description</th>
                        <th className='py-2'>Category</th>
                        <th className='py-2'>Amount</th>
                        <th className='py-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='py-2'>2023-10-01</td>
                        <td>Salary</td>
                        <td>Income</td>
                        <td>$5,000.00</td>
                        <td>
                            <Link href='/transactions/edit' className='bg-blue-500 text-white px-4 py-2 me-1 rounded-lg hover:bg-cyan-600 transition duration-200'>
                                Edit
                            </Link>

                            <button
                                type='button'
                                className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200'
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2'>2023-10-05</td>
                        <td>Groceries</td>
                        <td>Food</td>
                        <td>$200.00</td>
                        <td>

                        </td>
                    </tr>
                    {/* Add more transactions as needed */}
                </tbody>
            </table>
            <div>
                <Pagination />
            </div>
            
        </div>
    </div>
  )
}
