import React, { ReactNode } from 'react';
import { Board } from './Board';
import { Colors } from './Colors';
import { Figure } from './figures/Figure';

export class Cell {
	readonly x: number;
	readonly y: number;
	readonly color: Colors;
	figure: null | Figure;
	board: Board;
	available: boolean;
	id: number;

	constructor(
		board: Board,
		x: number,
		y: number,
		color: Colors,
		figure: null | Figure
	) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.figure = figure;
		this.board = board;
		this.available = false;
		this.id = Math.random();
	}
}
