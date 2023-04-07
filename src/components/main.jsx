import React, {useEffect, useState} from 'react';
import PlayerForm from './PlayerForm';
import { fetchAllPlayers } from '../api/ajaxHelpers';
import { renderAllPlayers } from './Players';
import { render } from 'react-dom';
import { fetchSinglePlayer } from '../api/ajaxHelpers';



const Main = () => {
    const [players, setPlayers] = useState();
    const [playerId, getPlayerId] = useState();
  
    useEffect(() => {
      const getPlayers = async () => {
        const players = await fetchAllPlayers();
        setPlayers({players}); 
        renderAllPlayers(players);
      };
      getPlayers({players});
    }, []);

 
      return (
        <>
        <PlayerForm />
        <div id="all-players-container"></div>
        </>
      )
};


export default Main;