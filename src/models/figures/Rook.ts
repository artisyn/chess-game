import { Figure, FigureNames } from './Figure';

import blackLogo from '../../assets/blackRook.png';
import whiteLogo from '../../assets/whiteRook.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class Rook extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.ROOK;
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		if (this.cell.isEmptyVertical(target)) {
			return true;
		}
		if (this.cell.isEmptyHorisontal(target)) {
			return true;
		}
		return false;
	}
}
