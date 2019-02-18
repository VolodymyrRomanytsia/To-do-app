import React from "react";

const Input = ({ name, label, style, placeholder, error, ...rest }) => {
  return (
    <div className="form-group mt-0">
      <label className="mb-0" htmlFor={name}><strong>{label}</strong></label>
      <input {...rest} name={name} id={name} placeholder={placeholder} className="form-control" style={style}/>
      {error && <div className="alert text-danger"><strong>{error}</strong></div>}
    </div>
  );
};

export default Input;
