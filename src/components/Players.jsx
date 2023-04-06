import React from 'react';
import { fetchAllPlayers } from '../api/ajaxHelpers';

const playerContainer = document.getElementById('all-players-container');

export const renderAllPlayers = (playerList) => {
  if (!playerList || !playerList.length) {
    playerContainer.innerHTML = '<h3>No players to display!</h3>';
    return;
  }

  let playerContainerHTML = '';
  playerList.map((pup) => {
    let pupHTML = `
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">${pup.name}</p>
          <p class="pup-number">#${pup.id}</p>
        </div>
        <img src="${pup.imageUrl}" alt="photo of ${pup.name} the puppy">
        <button class="detail-button" data-id=${pup.id}>See details</button>
        <button class="delete-button" data-id=${pup.id}>Remove from roster</button>
      </div>
    `;
    playerContainerHTML += pupHTML;
  });
  playerContainer.innerHTML = playerContainerHTML;

  let detailButtons = [...document.getElementsByClassName('detail-button')];
  detailButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const player = await fetchSinglePlayer(button.dataset.id);
      renderSinglePlayer(player);
    });
  });

  let deleteButtons = [...document.getElementsByClassName('delete-button')];
  deleteButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      await removePlayer(button.dataset.id);
      const players = await fetchAllPlayers();
      renderAllPlayers(players);
    });
  });
};