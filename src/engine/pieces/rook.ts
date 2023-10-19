import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableSquares: Square[] = [];
        const square = board.findPiece(this);
        let candidateSquare = undefined;
        for (let i = square.row + 1; i <= 7; i++) {
            candidateSquare = Square.at(i, square.col);
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = square.row - 1; i >= 0; i--) {
            candidateSquare = Square.at(i, square.col);
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = square.col - 1; i >= 0; i--) {
            candidateSquare = Square.at(square.row, i);
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = square.col + 1; i <= 7; i++) {
            candidateSquare = Square.at(square.row, i);
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        return availableSquares;
    }
}
