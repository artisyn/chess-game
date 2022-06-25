import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/blackKing.png';
import whiteLogo from '../../assets/whiteKing.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.KING;
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		return true;
	}
}
