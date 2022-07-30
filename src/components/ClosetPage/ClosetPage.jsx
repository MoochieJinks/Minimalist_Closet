// basic imports
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';


// component imports

// MUI imports

// This component will display all of the user's closet items
function ClosetPage(props) {
    // hooks
    const dispatch = useDispatch();

    // selectors
    const closetReducer = useSelector((store) => store.closetReducer);
    const user = useSelector((store) => store.user);


    // actions
    useEffect( () => {
        getCloset();
    })

    const getCloset = () => {
        // console.log('getCloset');
        dispatch({type: 'FETCH_CLOSET' });
    }

  return (
    <div>
      <h2>Here's what is currently in your closet!</h2>
      <h2>{ JSON.stringify( closetReducer)}</h2>
        {/* <Grid container display={"flex"} wrap={"wrap"} justifyContent={"space-evenly"} alignContent={"center"} spacing={5} padding={3}>
            {closetReducer.closets.map((closet) => {}
        </Grid> */}
    </div>
  );
}

export default ClosetPage;