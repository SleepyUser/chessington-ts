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
        this.addSquareIfValid(board, availableSquares, Square.at(square.row + 1, square.col));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row - 1, square.col));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row, square.col + 1));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row + 1, square.col + 1));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row - 1, square.col + 1));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row, square.col - 1));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row + 1, square.col - 1));
        this.addSquareIfValid(board, availableSquares, Square.at(square.row - 1, square.col - 1));
        return availableSquares;
    }
}
