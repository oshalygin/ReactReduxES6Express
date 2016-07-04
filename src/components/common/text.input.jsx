import React from "react";

const TextInput = ({name, label, value, onChange, error}) => {
    return (
        <input
            type="text"
            value={value}
            />
    );
};

export default TextInput;