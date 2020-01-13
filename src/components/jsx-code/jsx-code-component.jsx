import React from 'react';
import parse from 'html-react-parser';
import './jsx-code-component.css';
import Breadcrumb from '../breadcrumb-component/breadcrumb-components';
import { jsxCodeHelper }  from '../../helpers/jsx-code';

const JSCode = ({ code, breadcrumb }) => {
  const renderData = jsxCodeHelper(code).map((row, idx) => {
    return parse(`<div style="white-space: pre-wrap;" key=${idx}>${row}</div>`)
  });
  
  return (
    <div className="jsx-code">
      <Breadcrumb breadcrumbs={breadcrumb} />
      <div className="jsx-code-content">
        {renderData}
      </div>
    </div>
  );
}

export default JSCode;
