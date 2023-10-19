import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableSquares: Square[] = [];
        const square = board.findPiece(this);
        let candidateSquare = undefined;
        for (let i = 1; Math.max(square.col + i, square.row + i) <= 7; i++) {
            candidateSquare = Square.at(square.row + i, square.col + i);
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = 1; Math.min(square.row - i, square.col - i,) >= 0; i++) {
            candidateSquare = Square.at(square.row - i, square.col - i);
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = 1; square.row + i <= 7 && square.col - i >= 0; i++) {
            candidateSquare = Square.at(square.row + i, square.col - i);
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = 1; square.row - i >= 0 && square.col + i <= 7; i++) {
            candidateSquare = Square.at(square.row - i, square.col + i);
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        return availableSquares;
    }
}
