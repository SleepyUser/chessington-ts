import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;
    public isKing: boolean = false;

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


    protected getOrthogonalMovement(square: Square, candidateSquare: Square | undefined, board: Board, availableSquares: Square[]) {
        for (let i = square.row + 1; i <= 7; i++) {
            candidateSquare = (Square.at(i, square.col));
            if (this.isSpaceEmpty(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else if (this.isPieceTakeable(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
                break;
            } else {
                break;
            }
        }
        for (let i = square.row - 1; i >= 0; i--) {
            candidateSquare = (Square.at(i, square.col));
            if (this.isSpaceEmpty(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else if (this.isPieceTakeable(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
                break;
            } else {
                break;
            }
        }
        for (let i = square.col - 1; i >= 0; i--) {
            candidateSquare = (Square.at(square.row, i));
            if (this.isSpaceEmpty(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else if (this.isPieceTakeable(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
                break;
            } else {
                break;
            }
        }
        for (let i = square.col + 1; i <= 7; i++) {
            candidateSquare = (Square.at(square.row, i));
            if (this.isSpaceEmpty(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else if (this.isPieceTakeable(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
                break;
            } else {
                break;
            }
        }
    }

    protected GetDiagonalMovement(square: Square, candidateSquare: Square | undefined, board: Board, availableSquares: Square[]) {
        for (let i = 1; Math.max(square.col + i, square.row + i) <= 7; i++) {
            candidateSquare = Square.at(square.row + i, square.col + i);
            if (this.isSpaceEmpty(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else if (this.isPieceTakeable(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
                break;
            } else {
                break;
            }
        }
        for (let i = 1; Math.min(square.row - i, square.col - i,) >= 0; i++) {
            candidateSquare = (Square.at(square.row - i, square.col - i));
            if (this.isSpaceEmpty(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else if (this.isPieceTakeable(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
                break;
            } else {
                break;
            }
        }
        for (let i = 1; square.row + i <= 7 && square.col - i >= 0; i++) {
            candidateSquare = (Square.at(square.row + i, square.col - i));
            if (this.isSpaceEmpty(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            } else if (this.isPieceTakeable(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
                break;
            } else {
                break;
            }
        }
        for (let i = 1; square.row - i >= 0 && square.col + i <= 7; i++) {
            candidateSquare = (Square.at(square.row - i, square.col + i));
            if (this.isSpaceEmpty(board, candidateSquare)) {
                availableSquares.push(candidateSquare);

            } else if (this.isPieceTakeable(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
                break;
            } else {
                break;
            }
        }
        return candidateSquare;
    }

    protected isSpaceEmpty(board: Board, checkSquare: Square) {
        return board.getPiece(checkSquare) === undefined;
    }

    protected isPieceTakeable(board: Board, checkSquare: Square) {
        let targetPiece: Piece | undefined = board.getPiece(checkSquare);
        return targetPiece?.player != this.player && !targetPiece?.isKing;
    }

    protected addSquareIfValid(board: Board, availableSquares: Square[], candidateSquare: Square) {
        if (candidateSquare.col >= 0 && candidateSquare.col <= 7 && candidateSquare.row >= 0 && candidateSquare.row <= 7) {
            if (this.isSpaceEmpty(board, candidateSquare) || this.isPieceTakeable(board, candidateSquare)) {
                availableSquares.push(candidateSquare);
            }
        }
    }
}
