import { defaults, defaultGrid, initialGrid } from './defaults';

export function updateGrid(value) {
	return (dispatch) => {
		dispatch({ type: 'GRID', payload: value });
	}
}

export function addWidth(value) {
	return (dispatch) => {
		dispatch({ type: 'WIDTH', payload: value });
	}
}

export function addHeight(value) {
	return (dispatch) => {
		dispatch({ type: 'HEIGHT', payload: value });
	}
}

export function currentColor(value) {
	return (dispatch) => {
		dispatch({ type: 'COLOR', payload: value });
	}
}

export function changeContrast(value) {
	return (dispatch) => {
		dispatch({ type: 'CONTRAST', payload: value });
	}
}

export function addScale(value) {
	return (dispatch) => {
		dispatch({ type: 'SCALE', payload: value });
	}
}

export function reset() {
	return (dispatch) => {
		dispatch({ type: 'WIDTH', payload: defaults.width });
		dispatch({ type: 'HEIGHT', payload: defaults.height });
		dispatch({ type: 'COLOR', payload: defaults.color });
		dispatch({ type: 'CONTRAST', payload: defaults.contrast });
		dispatch({ type: 'SCALE', payload: defaults.scale });
		dispatch({ type: 'GRID', payload: defaultGrid() });
	}
}

export function set() {
	return (dispatch) => {
		dispatch({ type: 'GRID', payload: initialGrid() });
	}
}
