import React, { FC } from 'react';
import { Cell } from '../models/Cell';
import { Figure } from '../models/figures/Figure';

interface CellProps {
	cell: Cell;
	selected: boolean;
	click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
	return (
		<div
			onClick={() => click(cell)}
			className={['cell', cell.color, selected ? 'selected' : ''].join(
				' '
			)}
			style={{ background: cell.available && cell.figure ? 'green' : '' }}
		>
			{cell.available && !cell.figure && <div className={'available'} />}
			{cell.figure?.logo && (
				<img src={cell.figure.logo} alt="chess piece"></img>
			)}
		</div>
	);
};

export default CellComponent;
