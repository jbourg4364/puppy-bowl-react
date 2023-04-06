import React, {useEffect, useState} from 'react';
import PlayerForm from './PlayerForm';
import { fetchAllPlayers } from '../api/ajaxHelpers';
import { renderAllPlayers } from './Players';


const Main = () => {

    const [players] = useState()
    useEffect(() => {
      const getData = async() => {
         const players = await fetchAllPlayers()
        renderAllPlayers(players);  
      }
       getData();
    },[]);
    

      return (
        <>
        <div>
          <PlayerForm />
        </div>
        <div id='all-players-container'>
            {players}
        </div>
        </>
      )
};


export default Main;