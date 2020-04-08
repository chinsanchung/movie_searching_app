import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import PropTypes from "prop-types";
import { useState } from "react";
import { paginate } from "../util/paginate";

function Filmography({ filmography }) {
    const pageSize = 7;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const sorted_list = paginate(filmography, currentPage, pageSize);

    return (
        <Fragment>
            <ul className="list-group">
                {sorted_list.map(
                    (item) =>
                        item.release_date !== "" && (
                            <li key={item.id} className="list-group-item">
                                <span className="col-2 filmography-text text--year">
                                    {item.release_date.split("-")[0]}
                                </span>
                                <Link
                                    to={`/content/${item.id}`}
                                    className="col-9 filmography-text"
                                >
                                    {item.title}{" "}
                                    <i
                                        style={{
                                            color: "rgba(0, 0, 0, 0.5)",
                                        }}
                                    >
                                        as
                                    </i>{" "}
                                    {item.character}
                                </Link>
                            </li>
                        )
                )}
            </ul>
            <Pagination
                pageSize={pageSize}
                itemsCount={filmography.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </Fragment>
    );
}

export default Filmography;
