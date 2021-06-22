import React from "react";
import "./style.css";

function Input(props) {
    return (
        <form>
            <div className = "form">
                <label htmlFor = "search"></label>
                <input
                    className = "form-control"
                    onChange = {props.handleInputChange}
                    name = "search"
                    type = "text"
                    value = {props.vale}
                    placeholder = "Search by Name"
                    id = "search"
                />
                <button className = "btn btn-primary" onClick = {props.handleFormSubmission}>Search</button>
                <button className = "btn btn-primary" onClick = {props.refreshPage}>Reset</button>
                <br />
            </div>
        </form>
    );
};

export default Input;