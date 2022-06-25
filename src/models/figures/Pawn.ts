import { Figure, FigureNames } from './Figure';

import blackLogo from '../../assets/blackPawn.png';
import whiteLogo from '../../assets/whitePawn.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import { BlobOptions } from 'buffer';

export class Pawn extends Figure {
	isFirstStep: boolean = true;
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.PAWN;
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		return true;
	}
	movefigure(target: Cell): void {
		super.movefigure(target);
	}
}
//52.53
