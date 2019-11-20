import React from 'react';

const Alert = ({ alertObject }) => {
  return (
    alertObject !== null && (
      <div className={`alert alert-${alertObject.type}`}>
        <i className='fas fa-info-circle'> {alertObject.msg}</i>
      </div>
    )
  );
};

export default Alert;
