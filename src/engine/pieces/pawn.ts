import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableSquares: Square[] = [];
        const square = board.findPiece(this);
        let blackWhiteMod: number = -1;
        let pawnStartRow: number = 6;

        if (Player.WHITE == this.player) {
            blackWhiteMod = 1;
            pawnStartRow = 1;
        }
        availableSquares.push(Square.at(square.row + (blackWhiteMod), square.col));
        if (board.findPiece(this).row == pawnStartRow) {
            availableSquares.push(Square.at(square.row + (2 * blackWhiteMod), square.col));
        }
        return availableSquares;
    }
}
