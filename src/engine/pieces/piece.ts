import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    protected isSpaceValid(board: Board, checkSquare: Square) {
        return board.getPiece(checkSquare) === undefined;
    }


    protected getOrthogonalMovement(square: Square, candidateSquare: Square | undefined, board: Board, availableSquares: Square[]) {
        for (let i = square.row + 1; i <= 7; i++) {
            candidateSquare = (Square.at(i, square.col));
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = square.row - 1; i >= 0; i--) {
            candidateSquare = (Square.at(i, square.col));
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = square.col - 1; i >= 0; i--) {
            candidateSquare = (Square.at(square.row, i));
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = square.col + 1; i <= 7; i++) {
            candidateSquare = (Square.at(square.row, i));
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
    }

    protected GetDiagonalMovement(square: Square, candidateSquare: Square | undefined, board: Board, availableSquares: Square[]) {
        for (let i = 1; Math.max(square.col + i, square.row + i) <= 7; i++) {
            candidateSquare = Square.at(square.row + i, square.col + i);
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = 1; Math.min(square.row - i, square.col - i,) >= 0; i++) {
            candidateSquare = (Square.at(square.row - i, square.col - i));
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = 1; square.row + i <= 7 && square.col - i >= 0; i++) {
            candidateSquare = (Square.at(square.row + i, square.col - i));
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        for (let i = 1; square.row - i >= 0 && square.col + i <= 7; i++) {
            candidateSquare = (Square.at(square.row - i, square.col + i));
            if (this.isSpaceValid(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else {
                break;
            }
        }
        return candidateSquare;
    }
}
