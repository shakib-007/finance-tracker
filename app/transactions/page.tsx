import Link from 'next/link'
import React from 'react'

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
        <div className='overflow-x-auto'>
            <table className='min-w-full  text-sm text-left'>
                <thead className='bg-gray-100 text-gray-700 uppercase'>
                    <tr>
                        <th className='py-2'>Date</th>
                        <th className='py-2'>Description</th>
                        <th className='py-2'>Category</th>
                        <th className='py-2'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='py-2'>2023-10-01</td>
                        <td>Salary</td>
                        <td>Income</td>
                        <td>$5,000.00</td>
                    </tr>
                    <tr>
                        <td className='py-2'>2023-10-05</td>
                        <td>Groceries</td>
                        <td>Food</td>
                        <td>$200.00</td>
                    </tr>
                    {/* Add more transactions as needed */}
                </tbody>
            </table>
            
        </div>
    </div>
  )
}
