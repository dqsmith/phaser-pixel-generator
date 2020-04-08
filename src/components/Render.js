
import React from 'react';
import { useSelector } from 'react-redux';

const Render = (props) => {
	const grid = useSelector(state => state.gridReducer).grid;
	const size = useSelector(state => state.sizeReducer);
	const contrast = useSelector(state => state.utilsReducer).contrast;
	const scale = useSelector(state => state.utilsReducer).scale;
	let image = [];
	const renderer = props.renderer;

	if (props.renderer.context) {
		renderer.scale.canvas.width = size.width * scale;
		renderer.scale.canvas.height = size.height * scale;
	}

	grid.forEach(row => {
		let imageRow = ''
		row.forEach(cell => {
			imageRow += cell.value;
		});
		image.push(imageRow);
	});

	if (image.length && props.renderer.context) {
		const texture = renderer.textures.generate(new Date().getTime().toString(), { data: image, pixelWidth: scale });
		renderer.context.drawImage(texture.getCanvas(), 0, 0);
		renderer.canvas.style.backgroundColor = contrast ? '#fff' : '#000';
		renderer.loop.stop()
	}

	return (
		<div className="container">
			<div className="columns">
				<div className="column">
					<h1 className="is-column-header">Render</h1>
					<div className="columns">
						<div className="column">
							<div id="renderer" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Render;
