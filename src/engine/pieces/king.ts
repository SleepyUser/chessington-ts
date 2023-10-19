import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
        this.isKing = true;
    }

    public getAvailableMoves(board: Board) {
        let availableSquares: Square[] = [];
        const square = board.findPiece(this);

        if (square.row + 1 <= 7) {
            availableSquares.push(Square.at(square.row + 1, square.col));

        }
        if (square.row - 1 >= 0) {
            availableSquares.push(Square.at(square.row - 1, square.col));
        }

        if (square.col + 1 <= 7) {
            availableSquares.push(Square.at(square.row, square.col + 1));
            if (square.row + 1 <= 7) {
                availableSquares.push(Square.at(square.row + 1, square.col + 1));
            }
            if (square.row - 1 >= 0) {
                availableSquares.push(Square.at(square.row - 1, square.col + 1));
            }
        }
        if (square.col - 1 >= 0) {
            availableSquares.push(Square.at(square.row, square.col - 1));
            if (square.row + 1 <= 7) {
                availableSquares.push(Square.at(square.row + 1, square.col - 1));
            }
            if (square.row - 1 >= 0) {
                availableSquares.push(Square.at(square.row - 1, square.col - 1));
            }
        }
        return availableSquares;
    }
}
