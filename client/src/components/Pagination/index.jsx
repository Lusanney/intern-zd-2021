/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

/**
 * Pagination Component
 */
const Pagination = ({ currentPage, lastPage, onPageClick }) => {

  // Calculating the list of page numbers button to be visible
  const pageButtons = [];
  for (let idx = currentPage - 2; idx <= currentPage + 2 && idx <= lastPage; idx++) {
    if (idx < 1) { continue; }
    pageButtons.push(idx);
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">

        <li className="page-item">
          <button className="page-link" type="button" onClick={() => onPageClick(1)}>«</button>
        </li>

        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" type="button" onClick={() => onPageClick(currentPage - 1)}>‹</button>
        </li>

        {/* Showing all the page numbers button */}
        {pageButtons.map((page) => (
          <li className={`page-item ${page === currentPage ? 'active' : ''}`} key={page}>
            <button className="page-link" type="button" onClick={() => onPageClick(page)}>{page}</button>
          </li>
        ))}

        <li className={`page-item page-item-dynamic ${currentPage === lastPage ? 'disabled' : ''}`}>
          <button className="page-link" type="button" onClick={() => onPageClick(currentPage + 1)}>›</button>
        </li>

        <li className="page-item">
          <button className="page-link" type="button" onClick={() => onPageClick(lastPage)}>»</button>
        </li>
      </ul>
    </nav>

  );
};

export default React.memo(Pagination);
