import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import {
	addWidth, addHeight, updateGrid,
	changeContrast, addScale, reset
} from '../store/actions';
import Slider from '../containers/Slider';
import Toggle from '../containers/Toggle';

const Size = () => {
	const dispatch = useDispatch();
	const width = useSelector(state => state.sizeReducer).width;
	const height = useSelector(state => state.sizeReducer).height;
	const scale = useSelector(state => state.utilsReducer).scale;
	const grid = useSelector(state => state.gridReducer).grid;

	const changeWidth = (event) => {
		createGrid();
		dispatch(addWidth(Number(event.target.value)));
	}

	const changeHeight = (event) => {
		createGrid();
		dispatch(addHeight(Number(event.target.value)));
	}

	const changeBackground = (event) => {
		dispatch(changeContrast(event.target.checked));
	}

	const changeScale = (event) => {
		dispatch(addScale(Number(event.target.value)));
	}

	const resetAll = () => {
		dispatch(reset());
	}

	const defaultCell = (row, column) => {
		return { id: `${row}_${column}`, value: '.', color: '' };
	}

	const createGrid = () => {
		const updatedGrid = [];
		for (let i = 0; i < height; i++) {
			const row = [];
			for (let j = 0; j < width; j++) {
				// If a color value exists, use it
				if (i in grid && j in grid[i]) {
					const gridCell = grid[i][j];
					row.push(Object.assign({}, {
						id: `${i}_${j}`,
						value: gridCell.value,
						color: gridCell.color
					}));
				} else {
					// Create new color value
					row.push(defaultCell(i, j));
				}
			}
			updatedGrid.push(row);
		}
		dispatch(updateGrid(updatedGrid));
	}

	return (
		<>
			<div className="columns">
				<div className="column">
					<h1 className="is-column-header">Canvas <strong>{width} x {height}</strong></h1>
					<div className="columns">
						<div className="column">
							<h2 className="is-column-subheader">Width</h2>
							<Slider handler={changeWidth} value={width} />
						</div>
						<div className="column">
							<h2 className="is-column-subheader">Height</h2>
							<Slider handler={changeHeight} value={height} />
						</div>
						<div className="column">
							<h2 className="is-column-subheader">Scale</h2>
							<Slider handler={changeScale} value={scale} />
						</div>
					</div>
					<div className="columns">
						<div className="column">
							<h2 className="is-column-subheader">Background Contrast</h2>
							<Toggle handler={changeBackground} />
						</div>
						<div className="column"></div>
						<div className="column has-no-header">
							<button className="button reset-button is-info" onClick={resetAll}>Reset</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Size;
