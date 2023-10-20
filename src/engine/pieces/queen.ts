import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableSquares: Square[] = [];
        const square = board.findPiece(this);
        //Diagonal
        for (let i = 1; Math.max(square.col + i, square.row + i) <= 7; i++) {
            availableSquares.push(Square.at(square.row + i, square.col + i));
        }
        for (let i = 1; Math.min(square.row - i, square.col - i,) >= 0; i++) {
            availableSquares.push(Square.at(square.row - i, square.col - i));
        }
        for (let i = 1; square.row + i <= 7 && square.col - i >= 0; i++) {
            availableSquares.push(Square.at(square.row + i, square.col - i));
        }
        for (let i = 1; square.row - i >= 0 && square.col + i <= 7; i++) {
            availableSquares.push(Square.at(square.row - i, square.col + i));
        }
        //Straight lines
        for (let i = square.row + 1; i <= 7; i++) {
            availableSquares.push(Square.at(i, square.col));
        }
        for (let i = square.row - 1; i >= 0; i--) {
            availableSquares.push(Square.at(i, square.col));
        }
        for (let i = square.col - 1; i >= 0; i--) {
            availableSquares.push(Square.at(square.row, i));
        }
        for (let i = square.col + 1; i <= 7; i++) {
            availableSquares.push(Square.at(square.row, i));
        }
        return availableSquares;
    }
}
