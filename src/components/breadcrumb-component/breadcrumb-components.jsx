import React from 'react';
import './breadcrumb-component.css';

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumb">
      {breadcrumbs.map((bc, idx) => {
        return (
          <span key={bc}>
            {bc}
            {idx !== breadcrumbs.length - 1 ? 
              <span className="breadcrumb-separator">></span> :
              null}
          </span>)
      })}
    </div>
  );
}

export default Breadcrumb;
