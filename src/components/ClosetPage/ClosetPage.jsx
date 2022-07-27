// basic imports
import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// component imports

// MUI imports
import {colors, Grid} from '@material-ui/core';

// This component will display all of the user's closet items
function ClosetPage(props) {
    // hooks
    const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>Here's what is currently in your closet!</h2>

    </div>
  );
}

export default ClosetPage;