import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '../../assets/blackBishop.png';
import whiteLogo from '../../assets/whiteBishop.png';

export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.BISHOP;
	}
}
