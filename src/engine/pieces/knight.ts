import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableSquares: Square[] = [];
        const square = board.findPiece(this);
        if (square.row + 2 <= 7) //Up
        {
            if (square.col + 1 <= 7) {
                availableSquares.push(Square.at(square.row + 2, square.col + 1));
            }
            if (square.col - 1 >= 0) {
                availableSquares.push(Square.at(square.row + 2, square.col - 1));
            }
        }
        if (square.row - 2 >= 0) //Down
        {
            if (square.col + 1 <= 7) {
                availableSquares.push(Square.at(square.row - 2, square.col + 1));
            }
            if (square.col - 1 >= 0) {
                availableSquares.push(Square.at(square.row - 2, square.col - 1));
            }
        }
        if (square.col + 2 <= 7) //Right
        {
            if (square.row + 1 <= 7) {
                availableSquares.push(Square.at(square.row + 1, square.col + 2));
            }
            if (square.row - 1 >= 0) {
                availableSquares.push(Square.at(square.row - 1, square.col + 2));
            }
        }
        if (square.col - 2 >= 0) //Left
        {
            if (square.row + 1 <= 7) {
                availableSquares.push(Square.at(square.row + 1, square.col - 2));
            }
            if (square.row - 1 >= 0) {
                availableSquares.push(Square.at(square.row - 1, square.col - 2));
            }
        }
        return availableSquares;
    }
}
