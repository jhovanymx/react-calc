import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Operations = ({ onClickOperation, onClickEquals }) => (
    <section className="operations">
        <Button text="+" clickHandler={onClickOperation} />
        <Button text="-" clickHandler={onClickOperation} />
        <Button text="*" clickHandler={onClickOperation} />
        <Button text="/" clickHandler={onClickOperation} />
        <Button text="=" clickHandler={onClickEquals} />
    </section>
);

Operations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEquals: PropTypes.func.isRequired
};

export default Operations;