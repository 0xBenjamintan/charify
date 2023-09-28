import React from "react";
import PropTypes from "prop-types";

const BlurCard = ({ children }) => {
  return (
    <div className="relative w-96 h-96 bg-slate-50/20 backdrop-blur-lg rounded-lg shadow-md p-4 mx-4 my-4 z-50 governanceCard grid content-center">
      {children}
    </div>
  );
};

BlurCard.propTypes = {
  children: PropTypes.node.isRequired, // This ensures that you can pass any JSX elements as children
};

export default BlurCard;
