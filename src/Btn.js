import React from "react";
import './index.css';

const Btn = ({text, onClick, className}) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default Btn;