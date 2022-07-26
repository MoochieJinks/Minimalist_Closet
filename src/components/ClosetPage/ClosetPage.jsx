// basic imports
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';


// component imports
import EditCloset from '../EditCloset/EditCloset';
// import AddClothes from '../AddClothes/AddClothes';

// MUI imports
import Button from '@material-ui/core/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './ClosetPage.css';

// This component will display all of the user's closet items
function ClosetPage(props) {
    // hooks
    const dispatch = useDispatch();

    // selectors
    const closetReducer = useSelector((store) => store.closetReducer);
    const user = useSelector((store) => store.user);

    // MUI consts


    // actions
    useEffect( () => {
        getCloset();
    })


    const getCloset = () => {
        // console.log('getCloset');
        dispatch({type: 'FETCH_CLOSET' });
    }

    const deleteClothes = (closetID) => {
        const deletePayload = {
            closetID: closetID
        }
        dispatch({ type: 'DELETE_CLOTHES', payload: deletePayload });
      }

    
      const updateClothes = () => {
        console.log( 'in updateClothes');
        dispatch({ type: 'UPDATE_CLOTHES', payload: newClothes });
      }

  return (
    <div>
        <div>
            <h2>Here's what is currently in your closet!</h2>
                {/* <Grid container display={"flex"} wrap={"wrap"} justifyContent={"space-evenly"} alignContent={"center"} spacing={5} padding={3}>

                </Grid> */}
        </div>
        <div className='MUI-table'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table" style={{backgroundColor: '#ADB5BB', border: '1px solid'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Number </TableCell>
                            <TableCell align="left">Clothing Type </TableCell>
                            <TableCell align="left">Clothing Color </TableCell>
                            <TableCell align="left">Clothing Size </TableCell>
                            <TableCell align="left">Other Info </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {closetReducer.map((closet) => {
                            return (
                                <TableRow key={closet.id}>
                                    <TableCell component="th" scope="row" style={{border: '.5px solid'}}>
                                        <EditCloset closet={closet}/> 
                                        <p></p>
                                        {closet.user_id === user.id ? <h3>{closet.id}</h3> : null}<Button className="delete-clothes-button" onClick={() => deleteClothes(closet.id)} style={{border: '.5px solid', color: 'blue'}}>Delete</Button>
                                    </TableCell>
                                    <TableCell align="left" className='tableCell'>{closet.type}</TableCell>
                                    <TableCell align="left" className='tableCell'>{closet.color}</TableCell>
                                    <TableCell align="left" className='tableCell'>{closet.size}</TableCell>
                                    <TableCell align="left" className='tableCell'>{closet.description}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
  );
}

export default ClosetPage;