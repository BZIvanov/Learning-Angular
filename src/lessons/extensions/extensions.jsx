import React from 'react';
import Navigation from '../../common/navigation/navigation';

const Extensions = () => {
  return (
    <div>
        <Navigation />
        <div style={{border: '1px solid green'}}>
          <h1>ES Lint</h1>
          <div>
            <p>For detailed info visit the documentation here: 
              <a target="_blank" rel="noopener noreferrer" href="https://eslint.org/docs/user-guide/getting-started">ES Lint docs</a>
            </p>
            <h3>Steps to install</h3>
            <ul>
            <li>In the termianl run "npm install eslint"</li>
            <li>"./node_modules/.bin/eslint --init"</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Extensions;
