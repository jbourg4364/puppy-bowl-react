import React from 'react';
import { fetchSinglePlayer } from '../api/ajaxHelpers';
import { addNewPlayer } from '../api/ajaxHelpers';

const PlayerForm = () => {
    const formHandler = (event) => {
      event.preventDefault();
    }

  return (
    <div id='new-player-form'>
    <form >
      <label htmlFor="name">Name:</label>
      <input type="text" name="name"/>

      <label htmlFor="breed">Breed:</label>
      <input type="text" name="breed"/>

      <button type="submit" onClick={formHandler}>Submit</button>
    </form>
    </div>

    )
};

export default PlayerForm;