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

    private addSquareIfValid(board: Board, availableSquares: Square[], candidateSquare: Square) {
        if (candidateSquare.col >= 0 && candidateSquare.col <= 7 && candidateSquare.row >= 0 && candidateSquare.row <= 7) {
            if (this.isSpaceEmpty(board, candidateSquare) || this.isPieceTakeable(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            }
        }
    }
}
