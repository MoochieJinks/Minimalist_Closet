import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import ClosetPage from '../ClosetPage/ClosetPage';

function AddClothes(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [newClothes, setNewClothes] = useState({
    type: 'shirt',
    color: 'red',
    size: 'M',
    description: '',
    user_id: store.user.id
  })

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

  // const deleteClothes = () => {
  //   console.log( 'in deleteClothes');
  //   dispatch({ type: 'DELETE_CLOTHES', payload: newClothes });
  // }

  const updateClothes = () => {
    console.log( 'in updateClothes');
    dispatch({ type: 'UPDATE_CLOTHES', payload: newClothes });
  }

  return (
    <div>
      <h2>Add a new item to your closet!</h2>
      <div>
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
      <h2>Here's what's currently in the closet!</h2>
      <ClosetPage />
    </div>
  );
}

export default AddClothes;
