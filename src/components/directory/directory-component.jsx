import React from 'react';
import parse from 'html-react-parser';
import './directory-component.css';
import { directoryHelper}  from '../../helpers/directory';

const DirectoryComponent = ({ tree }) => {
  const renderData = directoryHelper(tree).map(row => parse(row));
  
  return (
    <div className="directory">
      {renderData}
    </div>
  );
}

export default DirectoryComponent;
