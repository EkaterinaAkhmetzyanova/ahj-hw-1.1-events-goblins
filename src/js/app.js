/* eslint-disable no-unused-vars */
import GameBoard from './GameBoard';
import GameLogic from './GameLogic';

const gameBoard = new GameBoard();
const gameLogic = new GameLogic(gameBoard);

gameLogic.init();
