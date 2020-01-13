import React from 'react';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <div>
        <button onClick={() => props.history.push('/')}>Back to Home</button>
    </div>
  );
}

export default withRouter(Navigation);
