import React from "react";

const FormInput = ({ label, type, defaultValue }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input
        type={type}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </label>
  );
};

export default FormInput;
