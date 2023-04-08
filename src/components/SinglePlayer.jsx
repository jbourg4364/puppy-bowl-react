import React from 'react';
import { fetchSinglePlayer } from "../api/ajaxHelpers";
import { renderAllPlayers } from './Players';
import { fetchAllPlayers } from '../api/ajaxHelpers';



export const renderSinglePlayer = (playerObj) => {
    if (!playerObj || !playerObj.id) {
      playerContainer.innerHTML = "<h3>Couldn't find data for this player!</h3>";
      return;
    }
  
    let pupHTML = `
      <div class="single-player-view">
        <div class="header-info">
          <p class="pup-title">${playerObj.name}</p>
          <p class="pup-number">#${playerObj.id}</p>
        </div>
        <p>Team: ${playerObj.team ? playerObj.team.name : 'Unassigned'}</p>
        <p>Breed: ${playerObj.breed}</p>
        <img src="${playerObj.imageUrl}" alt="photo of ${
      playerObj.name
    } the puppy">
        <button id="see-all">Back to all players</button>
      </div>
    `;
    playerContainer.innerHTML = pupHTML;
  
    let seeAllButton = document.getElementById('see-all');
    seeAllButton.addEventListener('click', async () => {
      const players = await fetchAllPlayers();
      renderAllPlayers(players);
    });
  };




