/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import GameBoard from './GameBoard';

export default class GameLogic {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.board = document.querySelector('.board');
    this.size = 16;
    this.missed = 0;
    this.cell = null;
  }

  init() {
    this.gameBoard.drawGB();
    this.gameBoard.getRandom();
    this.board.addEventListener('click', (event) => {
      event.preventDefault();
      this.onCellClick(event);
    });
  }

  onCellClick(event) {
    if (!(event.target.classList.contains('goblin'))) {
      this.gameBoard.getFails();
      this.missed += 1;
      if (this.missed === 5) {
        alert('Game over');
        this.gameBoard.endGame();
        this.missed = 0;
      }
    } else {
      this.gameBoard.getScores();
    }
  }
}
