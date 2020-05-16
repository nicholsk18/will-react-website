import React from "react";

const Button = (props) => {
    return props.state ? (
        <button className="btn btn-success" type="button" disabled="disabled">
            <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
            ></span>
            Loading...
        </button>
    ) : (
        <button type="submit" id="submit" className="btn btn-success px-5">
            Submit
        </button>
    );
};

export default Button;
