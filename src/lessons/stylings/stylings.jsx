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

        <div style={{border: '1px solid green'}}>
          <h1>Background image with shadow</h1>
          <p>We can combine background image with color to make it look like a shadow to the image</p>
          <div>
            <p>For detailed info visit the documentation here: 
              <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-image">background-image</a>
            </p>
            <p>First we specify the fill color and then the image</p>
            <p>background-size: cover will make it always fit the width or the height so the image can cover the whole element. background-position: center will make the image to be centered in the element in case of overflow.</p>
            <OtherCode code={`
  header {
    background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
      url("../../media/examples/lizard.png");
    background-size: cover;
    background-position: center;
  }`} breadcrumb={['my-project', 'styles.css']} />
          </div>
        </div>

        <div style={{border: '1px solid green'}}>
          <h1>clip-path</h1>
          <p>With clip-path we can change the shape of an element</p>
          <div>
            <p>For detailed info visit the documentation here: 
              <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path">clip-path</a>
            </p>
            <p>We can use different types of shapes, if we use polygon for example we provide x and y value for each one of all 4 corners.</p>
            <OtherCode code={`
  header {
    clip-path: polygon(0 0, 100% 0, 100% 200px, 0 100vh);
  }`} breadcrumb={['my-project', 'styles.css']} />
          </div>
        </div>

        <div style={{border: '1px solid green'}}>
          <h1>transform</h1>
          <p>With transform we can do some transformations such as moving an element, in case we want to center it for example</p>
          <div>
            <p>For detailed info visit the documentation here: 
              <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform">transform</a>
            </p>
            <p>If we use the translate value we can move the element based on the horizontal and vertical axis.The values ar used on the element itself, in case we depend on the parent somehow.</p>
            <OtherCode code={`
  .my-box {
    transform: translate(50%, 50%);
  }`} breadcrumb={['my-project', 'styles.css']} />
          </div>
        </div>

        <div style={{border: '1px solid green'}}>
          <h1>animation with keyframes</h1>
          <p>We can animate elements like this</p>
          <div>
            <p>For detailed info visit the documentation here: 
              <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes">@keyframes</a>
            </p>
            <p>Keyframes start at some % and ends at some % and we can use more than 2 steps process. So basically in this example at 0% the css properties will be applied and at 100% the different values will be applied.</p>
            <OtherCode code={`
  .my-box {
    animation-name: coolThing;
    animation-duration: 3s;
    animation-timing-function: ease-in;
  }
  
  @keyframes coolThing {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  `} breadcrumb={['my-project', 'styles.css']} />
          </div>
        </div>

        <div style={{border: '1px solid green'}}>
          <h1>@font-face</h1>
          <p>With @font-face we can load fonts from a file.</p>
          <div>
            <p>For detailed info visit the documentation here: 
              <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face">@font-face</a>
            </p>
            <p>From the sources, the first one good to use for the browser will be the one to be used.</p>
            <OtherCode code={`
  @font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
         url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  
  .my-el {
    font-family: "Open Sans";
  }
  `} breadcrumb={['my-project', 'styles.css']} />
          </div>
        </div>

        <div style={{border: '1px solid green'}}>
          <h1>box-sizing: border-box</h1>
          <p>With border-box value we can change the behaviour of stacking padding and borders</p>
          <div>
            <p>For detailed info visit the documentation here: 
              <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing">box-sizing</a>
            </p>
            <p>Box sizing will recalculate the width subtracting the paddings, borders etc. so the element size will be restricted to the box it is placed in. Otherwise we will have the width + paddings + borders and the element will get larger than we want it in some cases.</p>
            <OtherCode code={`
  my-element {
    width: 100px;
    padding: 20px;
    border: 1px solid green;
    box-sizing: border-box;
  }
  `} breadcrumb={['my-project', 'styles.css']} />
          </div>
        </div>
    </div>
  );
}

export default Stylings;
