import React from "react";

const style = {
    background: "#E73D9F",
    border: "2px solid #4935FF",
    fontSize: "2rem",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none"
};

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square;