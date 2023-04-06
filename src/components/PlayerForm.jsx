import React from 'react';

const PlayerForm = () => {
    return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" />
      <label htmlFor="breed">Breed:</label>
      <input type="text" name="breed" />
      <button type="submit">Submit</button>
    </form>
    )
};

export default PlayerForm;