import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";

function Header() {
    return (
        <nav className="navbar bg-dark navbar-expand-lg fixed-top">
            <a href="/" className="navbar-brand header-title">
                MovSearch
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar"
            >
                <FaBars className="toggler-icon" />
            </button>
            <div className="collapse navbar-collapse mt-1" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mr-1">
                        <a
                            href="/"
                            className="nav-link header-item item__active"
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item mr-1">
                        <a href="/tv-shows" className="nav-link header-item">
                            TV Shows
                        </a>
                    </li>
                    <li className="nav-item mr-1">
                        <a href="/movies" className="nav-link header-item">
                            Movies
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/bookmark" className="nav-link header-item">
                            My List
                        </a>
                    </li>
                </ul>
                <div className="mr-5 d-none d-md-block">
                    <a href="/search" className="nav-link header-item pl-0">
                        <span>
                            Search&nbsp;&nbsp;&nbsp;
                            <FaSearch />
                        </span>
                    </a>
                </div>
                <div className="mr-5">
                    <a href="/login" className="nav-link header-item pl-0">
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
