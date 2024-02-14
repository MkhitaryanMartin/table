import React from 'react';
import "./style.css"

const Checkbox = ({ label="", checked=false, onChange, name="",id }) => {


  return (
    <label>
      <input
      className='Checkbox'
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        id={id}
      />
      {label}
    </label>
  );
};

export default Checkbox;
