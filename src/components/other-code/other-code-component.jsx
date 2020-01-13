import React from 'react';
import parse from 'html-react-parser';
import './other-code-component.css';
import Breadcrumb from '../breadcrumb-component/breadcrumb-components';
import { otherCodeHelper }  from '../../helpers/other-code';

const OtherCode = ({ code, breadcrumb }) => {
  const renderData = otherCodeHelper(code).map((row, idx) => {
    return parse(`<div style="white-space: pre-wrap;" key=${idx}>${row}</div>`)
  });
  
  return (
    <div className="other-code">
      <Breadcrumb breadcrumbs={breadcrumb} />
      <div className="other-code-content">
        {renderData}
      </div>
    </div>
  );
}

export default OtherCode;
