import React from "react";
const FromComponent = ({ id, text, placeholder, ...rest }) => {
  return (
    <div>
      <label for={id}>{id}</label>
      <input type={text} placeholder={placeholder} id={id} {...rest} />
    </div>
  );
};

export default FromComponent;
