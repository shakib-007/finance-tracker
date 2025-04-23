import React from 'react'
import Link from "next/link";

export default function Navbar() {
  
  return (
    <div>
        <header className="bg-teal-100 shadow">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Finance Tracker</div>
            <ul className="flex space-x-6 text-gray-700 font-bold">
              <li>
                <Link href="/" className="hover:text-cyan-500 border-1 border-black-600 px-4 py-2 rounded-2xl">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/transactions" className="hover:text-cyan-500 border-1 border-black-600 px-4 py-2 rounded-2xl">
                  Transactions
                </Link>
              </li>
            </ul>
          </nav>
        </header>
    </div>
  )
}