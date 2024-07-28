import React from "react";

export default function Pagination({
  paginateFront,
  paginateBack,
  paginateFirst,
  paginateLast,
  isLast,
  isFirst,
  currentPage,
  total,
  postsPerPage
}) {
  const start = (currentPage - 1) * postsPerPage + 1;
  const end = Math.min(currentPage * postsPerPage, total);

  return (
    <nav aria-label="Page navigation example" className="mt-4">
      <div className="text-right">
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium px-2'>
            {start}
          </span>
          to
          <span className='font-medium'> {end} </span>
          of
          <span className='font-medium '> {total} </span>
          results
        </p>
      </div>
      <ul className="flex items-center justify-end -space-x-px h-8 text-sm mt-2">
        <li>
          <button
            onClick={() => {
              if (!isFirst) paginateFirst();
            }}
            disabled={isFirst}
            className={`flex items-center justify-center px-3 h-8 leading-tight rounded-l-lg border ${isFirst ? "cursor-not-allowed opacity-75 bg-gray-200 text-gray-500" : "cursor-pointer bg-white text-gray-500 border-gray-300 hover:bg-blue-100 hover:text-blue-700"}`}
            style={{ borderColor: "#081c74", color: isFirst ? "gray" : "#081c74" }}
          >
            First
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              if (!isFirst) paginateBack();
            }}
            disabled={isFirst}
            className={`flex items-center justify-center px-3 h-8 leading-tight border ${isFirst ? "cursor-not-allowed opacity-75 bg-gray-200 text-gray-500" : "cursor-pointer bg-white text-gray-500 border-gray-300 hover:bg-blue-100 hover:text-blue-700"}`}
            style={{ borderColor: "#081c74", color: isFirst ? "gray" : "#081c74" }}
          >
            Previous
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              if (!isLast) paginateFront();
            }}
            disabled={isLast}
            className={`flex items-center justify-center px-3 h-8 leading-tight border ${isLast ? "cursor-not-allowed opacity-75 bg-gray-200 text-gray-500" : "cursor-pointer bg-white text-gray-500 border-gray-300 hover:bg-blue-100 hover:text-blue-700"}`}
            style={{ borderColor: "#081c74", color: isLast ? "gray" : "#081c74" }}
          >
            Next
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              if (!isLast) paginateLast();
            }}
            disabled={isLast}
            className={`flex items-center justify-center px-3 h-8 leading-tight rounded-r-lg border ${isLast ? "cursor-not-allowed opacity-75 bg-gray-200 text-gray-500" : "cursor-pointer bg-white text-gray-500 border-gray-300 hover:bg-blue-100 hover:text-blue-700"}`}
            style={{ borderColor: "#081c74", color: isLast ? "gray" : "#081c74" }}
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
}
