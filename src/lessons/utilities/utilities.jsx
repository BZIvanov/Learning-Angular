import React from 'react';
import Navigation from '../../common/navigation/navigation';
import DirectoryComponent from '../../components/directory/directory-component';
import OtherCode from '../../components/other-code/other-code-component';

const Utilities = () => {
  return (
    <div>
        <Navigation />
        <div style={{border: '1px solid green'}}>
          <h1>Creating file with global variables</h1>
          <div>
            <p>For detailed info visit the documentation here: 
              <a target="_blank" rel="noopener noreferrer" href="https://create-react-app.dev/docs/adding-custom-environment-variables/">DOCS</a>
            </p>
            <h3>Steps</h3>
          
            <p>First create your new .env file</p>
            <DirectoryComponent tree={
              `folder|1|node_modules
              folder|1|public
              folder|1|src
              file|1|.env@active
              `
            } />

            <p>In the new created .env file put any variable you want. For example PORT:</p>
            <OtherCode code={`PORT=3100`} breadcrumb={['my-project', '.env']} />

            <p>In package.json we need to specify our new file. So React is aware if it's existance</p>
            <OtherCode code={
    `
    "scripts": {
        "start": "react-scripts start .env",
    }
    `
            } 
              breadcrumb={['my-project', 'package.json']} 
            />
          </div>
        </div>
    </div>
  );
}

export default Utilities;
