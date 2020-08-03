import React from "react";

const FormField = ({ name, value, onChange, type, title }) => (
  <div>
    <label>
      {title}
      <input
        name={name}
        type={type}
        value={value}
        name="name"
        onChange={onChange}
      />
    </label>
  </div>
);

export default FormField;
