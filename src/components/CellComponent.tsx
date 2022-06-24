import React, { FC } from 'react';
import { Cell } from '../models/Cell';
import { Figure } from '../models/figures/Figure';

interface CellProps {
	cell: Cell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
	return (
		<div className={['cell', cell.color].join(' ')}>
			{cell.figure?.logo && (
				<img src={cell.figure.logo} alt="chess piece"></img>
			)}
		</div>
	);
};

export default CellComponent;
