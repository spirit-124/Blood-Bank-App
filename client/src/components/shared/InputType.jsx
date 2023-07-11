import React from "react";

const InputType = ({
  htmlFor,
  labelText,
  inputType,
  value,
  name,
  onChange,
}) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={htmlFor} className="form-label d-flex text-start ">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </>
  );
};

export default InputType;
