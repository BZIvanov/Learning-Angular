import React from 'react';
import Navigation from '../../common/navigation/navigation';

const Git = () => {
  return (
    <div>
        <Navigation />
        <div style={{border: '1px solid green'}}>
          <h3>git init</h3>
          <p>It will initialize a new git repository in a .git folder where all the changes will be tracked</p>
        </div>

        <div style={{border: '1px solid green'}}>
          <h3>git clone <em>ssh_url</em></h3>
          <p>This command will clone remote repository from Github for example. ssh_url should be replaced with the url we take from github</p>
        </div>

        <div style={{border: '1px solid green'}}>
          <h3>git pull</h3>
          <p>Will take all the files from the remote repository on update our local repository.</p>
        </div>

        <div style={{border: '1px solid green'}}>
          <h3>git merge <em>custom-branch</em></h3>
          <p>If we use this command while we are on master branch for example we will merge changes from the custom-branch to our master branch.</p>
        </div>
    </div>
  );
}

export default Git;
