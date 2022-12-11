import React from 'react';

export const Button = ({page}) => {
  return (
    <button
      type="button"
      className="Button"
      onClick={()=>page()}
    >
      Load more
    </button>
  );
};
