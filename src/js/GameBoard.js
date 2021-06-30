/* eslint-disable no-plusplus */
// TODO: write code here
export default class GameBoard {
  constructor() {
    this.size = 16;
    this.gameBoard = document.querySelector('.board');
    this.scores = document.querySelector('.scores');
    this.fails = document.querySelector('.fails');
    this.cell = null;
  }

  drawGB() {
    for (let i = 0; i < this.size; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.id = `cell${i}`;
      this.gameBoard.appendChild(cell);
    }
  }

  getRandom() {
    setInterval(() => {
      const random = Math.floor((Math.random() * this.size));
      const cells = Array.from(document.querySelectorAll('.cell'));
      const availableCells = cells.filter((cell) => cell.id !== this.active);
      for (const cell of cells) {
        if (cell.classList.contains('goblin')) {
          cell.classList.remove('goblin');
        }
      }
      availableCells[random].classList.add('goblin');
    }, 1000);
  }

  getScores() {
    this.scores.textContent++;
  }

  getFails() {
    this.fails.textContent++;
  }

  endGame() {
    this.scores.textContent = 0;
    this.fails.textContent = 0;
  }
}
