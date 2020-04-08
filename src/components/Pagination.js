import React, { useEffect } from "react";
import _ from "lodash";
// https://ing-yeo.net/2019/08/react-beginner-3/
function Pagination({ itemsCount, pageSize, currentPage, onPageChange }) {
    const pageCount = Math.ceil(itemsCount / pageSize);

    const pages = _.range(1, pageCount + 1);

    if (pageCount === 1) return null;
    return (
        <nav className="mt-1">
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={
                            page === currentPage
                                ? "page-item-active"
                                : "page-item"
                        }
                        style={{ cursor: "pointer" }}
                    >
                        {/* eslint-disable-next-line */}
                        <a
                            href="#"
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
