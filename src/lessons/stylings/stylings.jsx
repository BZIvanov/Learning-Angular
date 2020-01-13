import React from 'react';
import Navigation from '../../common/navigation/navigation';
import OtherCode from '../../components/other-code/other-code-component';

const Stylings = () => {
  return (
    <div>
        <Navigation />
        <div style={{border: '1px solid green'}}>
          <h1>text-overflow</h1>
          <p>This property is helpful for handling long text</p>
          <div>
            <p>For detailed info visit the documentation here: 
              <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow">text-overflow</a>
            </p>
            <p>If we specify the value to be ellipsis, three dots will be added, if the text doesnt fit the container</p>
            <p>Remember it is important to use this property with other css properties in order to work. Check the example below:</p>
            <OtherCode code={`
  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }`} breadcrumb={['my-project', 'styles.css']} />
          </div>
        </div>
    </div>
  );
}

export default Stylings;
