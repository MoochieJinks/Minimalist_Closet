import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

// MUI imports
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



function EditCloset(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [type, setType] = useState();
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [description, setDescription] = useState();

  // const newClothes = ({
  //   id: props.closet.id,
  //   type: type,
  //   color: color,
  //   size: size,
  //   description: description,
  //   user_id: store.user.id
  // })

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log('this is a button');
  };

  const handleClose = () => {
    setOpen(false);
  }

  const setNewType = (event) => {
    setType( event.target.value );
    console.log({type});
  }

  const setNewColor = (event) => {
    setColor( event.target.value );
    console.log({color});
  }

  const setNewSize = (event) => {
    setSize( event.target.value );
    console.log({size});
  }

  const setNewDescription = (event) => {
    setDescription( event.target.value );
    console.log({description});
  }

  const editCloset = () => {
    console.log( 'in EditCloset');
    const newClothes = ({
      id: props.closet.id,
      type: type,
      color: color,
      size: size,
      description: description,
      user_id: store.user.id
    })
    dispatch({ type: 'UPDATE_CLOTHES', payload: newClothes });
    handleClose();
  }

  return (
    <div>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>Edit</Button>
        <Dialog open={open} onClose={handleClose} style={{height: "1000px"}}>
          <DialogTitle>Edit Closet</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To edit an existing item, please choose what you'd like to switch the item to.
            </DialogContentText>
              <Select
              lableid="select-type"
              id="type"
              value={type || props.closet.type}
              lable="Select Type"
              onChange={setNewType}
              fullWidth>
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
              value={color || props.closet.color}
              lable="Select Color"
              onChange={setNewColor}
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
              value={size || props.closet.size}
              lable="Select Size"
              onChange={setNewSize}
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
              defaultValue={description || props.closet.description}
              type="description"
              fullWidth
              variant="standard"
              onChange={setNewDescription}>
              </TextField>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={editCloset}>Submit Change</Button>
          </DialogActions>
        </Dialog>
      </div>
        {/* <div>
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
            <button className="add-clothes-button" onClick={ EditCloset }>Update Clothes</button>
        </div> */}
    </div>
  );
}

export default EditCloset;
