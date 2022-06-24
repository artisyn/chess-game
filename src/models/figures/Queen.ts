import { Figure, FigureNames } from './Figure';

import blackLogo from '../../assets/blackQueen.png';
import whiteLogo from '../../assets/whiteQueen.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export class Queen extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.QUEEN;
	}
}
