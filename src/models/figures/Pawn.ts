import { Figure, FigureNames } from './Figure';

import blackLogo from '../../assets/blackPawn.png';
import whiteLogo from '../../assets/whitePawn.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class Pawn extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.PAWN;
	}
}
