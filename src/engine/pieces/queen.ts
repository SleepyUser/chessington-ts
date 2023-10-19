import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableSquares: Square[] = [];
        const square = board.findPiece(this);
        let candidateSquare = undefined;
        //Diagonal
        this.GetDiagonalMovement(square, candidateSquare, board, availableSquares);
        this.getOrthogonalMovement(square, candidateSquare, board, availableSquares);

        return availableSquares;
    }
}
