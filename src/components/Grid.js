import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateGrid } from '../store/actions';

const Grid = () => {
	const dispatch = useDispatch();
	const table = [];
	const selectedColor = useSelector(state => state.colorReducer).color;
	const grid = useSelector(state => state.gridReducer).grid;
	const contrast = useSelector(state => state.utilsReducer).contrast;

	let applying = false;

	const applyColor = (event, cell) => {
		applying = true;
		colorize(event, cell);
	}

	const stopApplying = () => {
		applying = false;
		dispatch(updateGrid(grid));
	}

	const autoApplyColor = (event, cell) => {
		if (applying) {
			colorize(event, cell);
		}
	}

	const colorize = (event, cell) => {
		event.target.style.backgroundColor = selectedColor.color;
		cell.value = selectedColor.value;
		cell.color = selectedColor.color;
	}

	const createGrid = () => {
		if (grid) {
			grid.forEach((column, index) => {
				const cells = [];
				column.forEach((cell, index) => {
					const columnCell = <td className="grid-cell"
						style={{ backgroundColor: cell.color }}
						onMouseDown={(event) => applyColor(event, cell)}
						onMouseUp={stopApplying}
						onMouseOver={(event) => autoApplyColor(event, cell)}
						key={index}></td>;
					cells.push(columnCell);
				});

				table.push(<tr className="grid-row" key={index}>{cells}</tr>);
			});
		}

		const gridContrast = contrast ? {
			backgroundColor: '#fff'
		} : {}

		return <table className="grid" style={gridContrast}>
			<tbody>{table}</tbody>
		</table>;
	}

	return (
		<div className="container">
			<div className="columns">
				<div className="column">
					<h1 className="is-column-header">Draw</h1>
					<div className="columns">
						<div className="column">
							{createGrid()}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Grid;