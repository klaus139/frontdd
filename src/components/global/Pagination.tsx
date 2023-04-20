import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  total: number;
  callback: (num: number) => void;
}

const Pagination: React.FC<IProps> = ({ total, callback }) => {
  const [page, setPage] = useState(1);

  const newArr = [...Array(total)].map((_, i) => i + 1);

  const isActive = (index: number) => {
    if (index === page) return 'active';
    return '';
  };

  const handlePagination = (num: number) => {
    setPage(num);
    callback(num);
  };

  useEffect(() => {
    const num = Number(new URLSearchParams(window.location.search).get('page')) || 1;
    setPage(num);
  }, []);

  return (
    <nav aria-label="Page navigation example" style={{ cursor: 'pointer' }}>
      <ul className="pagination">
        {page > 1 && (
          <li className="page-item" onClick={() => handlePagination(page - 1)}>
            <Link to={`?page=${page - 1}`} className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
        )}

        {newArr.map((num) => (
          <li
            key={num}
            className={`page-item ${isActive(num)}`}
            onClick={() => handlePagination(num)}
          >
            <Link to={`?page=${num}`} className="page-link">
              {num}
            </Link>
          </li>
        ))}

        {page < total && (
          <li className="page-item" onClick={() => handlePagination(page + 1)}>
            <Link to={`?page=${page + 1}`} className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
