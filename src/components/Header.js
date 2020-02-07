import React, { useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const SectionHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    background-color: rgba(12, 21, 29, 0.8);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const Form = styled.form`
    position: relative;
    margin-right: 30px;
    outline: none;
`;
const Input = styled.input`
    width: 400px;
    height: 35px;
    padding-left: 45px;
    border-radius: 5px;
    font-size: 20px;
`;
const searchIcon = {
    position: "absolute",
    left: 7,
    paddingTop: 4,
    fontSize: 33
};
function Header() {
    const [value, setValue] = useState("");
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        // https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string
        const changedVal = value.split(" ").join("+");

        console.log(changedVal);
        window.location.href = "http://localhost:3000/search/" + changedVal;
        setValue("");
    };

    return (
        <SectionHeader>
            <div className="menu-group">
                <Link to="/" className="header-title">
                    <span style={{ color: "#fff" }}>MovSearch</span>
                </Link>
                <ul className="main-menu toggle">
                    <li>
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span>Watchlist</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div></div>
            <Form onSubmit={onSubmit}>
                <div>
                    <MdSearch style={searchIcon} />
                    <Input type="text" value={value} onChange={onChange} />
                </div>
            </Form>
        </SectionHeader>
    );
}

export default Header;
