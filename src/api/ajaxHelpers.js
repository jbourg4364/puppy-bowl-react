import React from 'react';

const cohortName = '2303-ftb-et-web-ft-react';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
    try {
      const response = await fetch(`${APIURL}/players`);
      const {
        success,
        error,
        data: { players },
      } = await response.json();
      if (error) throw error;
      // console.log(data);
      // const { players } = data;
      return players;
    } catch (error) {
      console.error('Oh no! There was an error in fetchAllPlayers!', error);
    }
  };