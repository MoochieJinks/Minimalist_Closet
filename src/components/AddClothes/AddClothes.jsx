import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function AddClothes(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [open, setOpen] = useState(false);
  const [newClothes, setNewClothes] = useState({
    type: 'shirt',
    color: 'red',
    size: 'M',
    description: '',
    user_id: store.user.id
  })

  const handleClickOpen = () => {
    setOpen(true);
    console.log('this is a button');
  };

  const handleClose = () => {
    setOpen(false);
  }

  const setType = () => {
    setNewClothes( { ...newClothes, type: event.target.value } );
  }

  const setColor = () => {
    setNewClothes( { ...newClothes, color: event.target.value } );
  }

  const setSize = () => {
    setNewClothes( { ...newClothes, size: event.target.value } );
  }

  const setDescription = () => {
    setNewClothes( { ...newClothes, description: event.target.value } );
  }

  const addClothes = () => {
    console.log( 'in addClothes');
    dispatch({ type: 'ADD_CLOTHES', payload: newClothes });
  }

  const deleteClothes = () => {
    console.log( 'in deleteClothes');
    dispatch({ type: 'DELETE_CLOTHES', payload: newClothes });
  }

  const updateClothes = () => {
    console.log( 'in updateClothes');
    dispatch({ type: 'UPDATE_CLOTHES', payload: newClothes });
  }

  return (
    <div>
      <h2>Add a new item to your closet!</h2>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
          <Dialog open ={open} onClose={handleClose}>
            <DialogTitle>Add a new item</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add an item, please fill in the form below
              </DialogContentText>
              <Select
              labelid='select-type'
              id="type"
              value={newClothes.type}
              label="Select Type"
              onChange={setType}
              >
                <MenuItem value="t-shirt">t-shirt</MenuItem>
                <MenuItem value="shirt">shirt</MenuItem>
                <MenuItem value="button-up">button-up</MenuItem>
                <MenuItem value="shirt">shirt</MenuItem>
                <MenuItem value="hoodie">hoodie</MenuItem>
                <MenuItem value="pullover">pullover</MenuItem>
                <MenuItem value="jeans">jeans</MenuItem>
                <MenuItem value="joggers">joggers</MenuItem>
                <MenuItem value="shorts">shorts</MenuItem>
                <MenuItem value="slacks">slacks</MenuItem>
              </Select>
              <Select
              lableid="select-color"
              id="color"
              value={newClothes.color}
              lable="Select Color"
              onChange={setColor}
              fullWidth>
                <MenuItem value="red">red</MenuItem>
                <MenuItem value="blue">blue</MenuItem>
                <MenuItem value="yellow">yellow</MenuItem>
                <MenuItem value="black">black</MenuItem>
                <MenuItem value="white">white</MenuItem>
                <MenuItem value="grey">grey</MenuItem>
                <MenuItem value="pastel-red">pastel-red</MenuItem>
                <MenuItem value="pastel-blue">pastel-blue</MenuItem>
                <MenuItem value="pastel-yellow">pastel-yellow</MenuItem>
              </Select>
              <Select
              lableid="select-size"
              id="size"
              value={newClothes.size}
              lable="Select Size"
              onChange={setSize}
              fullWidth>
                <MenuItem value="small">small</MenuItem>
                <MenuItem value="medium">medium</MenuItem>
                <MenuItem value="large">large</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
                <MenuItem value="xxl">xxl</MenuItem>
              </Select>
            <FormControl fullWidth>
              <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              defaultValue={newClothes.description}
              type="description"
              fullWidth
              variant="standard"
              onChange={setDescription}>
              </TextField>
            </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button onClick={addClothes}>Add</Button>
            </DialogActions>
          </Dialog>
      <select className="type-select" onChange={ setType }>
          <option>t-shirt</option>
          <option>shirt</option>
          <option>button-up</option>
          <option>hoodie</option>
          <option>pullover</option>
          <option>jeans</option>
          <option>joggers</option>
          <option>shorts</option>
          <option>slacks</option>
        </select>
        <select className="color-select" onChange={ setColor }>
          <option>red</option>
          <option>blue</option>
          <option>yellow</option>
          <option>black</option>
          <option>white</option>
          <option>grey</option>
          <option>pastel red</option>
          <option>pastel blue</option>
          <option>pastel yellow</option>
        </select>
        <select className="size-select" onChange={ setSize }>
          <option>x-small</option>
          <option>small</option>
          <option>medium</option>
          <option>large</option>
          <option>x-large</option>
          <option>xx-large</option>
          <option>xxx-large</option>
        </select>
        <input className="description-input" type="text" placeholder="description" onChange={ setDescription }></input>
        <button className="add-clothes-button" onClick={ addClothes }>Add Clothes</button>
        {/* <button className="delete-clothes-button" onClick={ deleteClothes }>Delete Clothes</button> */}
        {/* <button className="update-clothes-button" onClick={ updateClothes }>Update Clothes</button> */}
      </div>
    </div>
  );
}

export default AddClothes;
