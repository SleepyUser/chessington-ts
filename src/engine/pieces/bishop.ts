import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableSquares: Square[] = [];
        const square = board.findPiece(this);
        for (let i = 1; square.col + i <= 7 && square.row + i <= 7; i++) {
            availableSquares.push(Square.at(square.row + i, square.col + i));
        }
        for (let i = 1; square.row - i>= 0 && square.col - i >= 0; i++) {
            availableSquares.push(Square.at(square.row - i, square.col - i));
        }
        for (let i = 1; square.row + i <= 7 && square.col - i >= 0; i++) {
            availableSquares.push(Square.at(square.row + i, square.col - i));
        }
        for (let i = 1; square.row - i >= 0 && square.col + i <= 7; i++) {
            availableSquares.push(Square.at(square.row - i, square.col + i));
        }
        return availableSquares;
    }
}
