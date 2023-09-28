import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 mb-3 border-cab2fb text-cab2fb hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded-lg w-48"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
