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
        this.addSquareIfValid(board, availableSquares, Square.at(square.row + 2, square.col + 1));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row + 2, square.col - 1));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row - 2, square.col + 1));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row - 2, square.col - 1));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row + 1, square.col + 2));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row - 1, square.col + 2));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row + 1, square.col - 2));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row - 1, square.col - 2));
        return availableSquares;
    }
}
