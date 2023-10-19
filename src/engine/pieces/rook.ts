import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableSquares: Square[] = [];
        const square = board.findPiece(this);
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
