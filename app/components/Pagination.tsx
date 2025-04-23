import React from 'react';

export default function Pagination({totalItems, itemsPerPage, currentPage, setPage, setLimit}: {totalItems: number, itemsPerPage: number, currentPage: number, setPage: React.Dispatch<React.SetStateAction<number>>, setLimit: React.Dispatch<React.SetStateAction<number>>}) {
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-blue-50 px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <span>Showing {startItem} - {endItem} of {totalItems}</span>
        </div>

        <div>
          <select
            name="limit"
            className="border border-gray-300 rounded-lg p-1"
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value="">Per Page</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="flex gap-2 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setPage((p: number) => p - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="px-4 py-2">
            {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setPage((p: number) => p + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
