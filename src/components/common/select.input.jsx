import React, { PropTypes } from "react";

const SelectInput = ({name, label, value, defaultOption, options, onChange, error}) => {
    return (
        <div className="form-group">
            <div className="field">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control">
                    <option value="">{defaultOption}</option>
                    {option.map((option) => {
                        return <option key={option.value} value={option.value}>{option.text}</option>
                    }) }
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string

}

export default SelectInput;