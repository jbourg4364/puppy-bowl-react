import React, {useEffect, useState} from 'react';
import PlayerForm from './PlayerForm';
import { fetchAllPlayers } from '../api/ajaxHelpers';
import { renderAllPlayers } from './Players';
import { render } from 'react-dom';
import { fetchSinglePlayer } from '../api/ajaxHelpers';
import { removePlayer } from '../api/ajaxHelpers';

const Main = () => {
    const [players, setPlayers] = useState();
    const [playerId, getPlayerId] = useState();
    
    useEffect(() => {
      const getPlayers = async () => {
        const players = await fetchAllPlayers();
        setPlayers({players}); 
        renderAllPlayers(players);
        // getPlayerId(players.map(player => {
        //   players[0] = {player};
        //   players[0].id = {playerId};
        // }));
       
      };
      getPlayers();
    }, []);

      return (
        <>
        <PlayerForm />
        <div id="all-players-container"></div>
        </>
      )
};


export default Main;