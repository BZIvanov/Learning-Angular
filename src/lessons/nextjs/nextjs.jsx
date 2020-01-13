import React from 'react';
import Navigation from '../../common/navigation/navigation';
import DirectoryComponent from '../../components/directory/directory-component';
import JSXCode from '../../components/jsx-code/jsx-code-component';

const NextJS = () => {
  return (
    <div>
        <Navigation />
        <div style={{border: '1px solid green'}}>
          <h1>Routing</h1>
          <p>Routing</p>
          <div>
            <p>For detailed info visit the documentation here: 
              <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/docs/basic-features/pages">pages</a>
            </p>
            <p>In Next.JS the folder structure works as routing. Meaning, that folder name will be part of the url and the index.js file will be the content</p>
            
            <DirectoryComponent tree={
              `folder|1|node_modules
              folder|1|.next
              folder|1|pages@active
              file|2|index.jsx@active
              file|1|package.json
              `
            } />
          </div>
        </div>

        <div style={{border: '1px solid green'}}>
            <h1>getInitialProps</h1>
            <p>getInitialProps is a static method, which runs on both the server and client. It must return an object, data returned from that object can be used on the client.</p>
            <JSXCode code={
    `
    const HomePage => ({ stars }) {
      return <div>Stars {stars}</div>
    }
 
    HomePage.getInitialProps = () => {
      return { stars: 5 }
    }
 
    export default HomePage
    `} 
              breadcrumb={['my-project', 'src', 'pages', 'index.jsx']} 
            />
        </div>
    </div>
  );
}

export default NextJS;
