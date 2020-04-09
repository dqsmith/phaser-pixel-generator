import React from 'react';
import { useSelector } from 'react-redux';

const Modal = (props) => {
	const grid = useSelector(state => state.gridReducer).grid;
	const isActive = props.show ? 'is-active' : '';
	const showModal = props.showModal;

	const image = [];

	if (showModal) {
		grid.forEach(row => {
			let imageRow = ''
			row.forEach(cell => {
				imageRow += cell.value;
			});
			image.push(imageRow);
		});
	}

	return (
		<div className={"modal " + isActive}>
			<div className="modal-background"></div>
			<div className="modal-content">
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Phaser Texture Code</p>
						<button className="delete" aria-label="close" onClick={() => showModal(false)}></button>
					</header>
					<section className="modal-card-body">
						<pre>
							<code>
								<div>const image = [</div>
								{
									image.map((row, index) => <div key={index}> {row},</div>)
								}
								<div>];</div>
								<div>{'// Generate a new texture with a reference to the game object'}</div>
								<div>{'game.textures.generate("image", { data: image, pixelWidth: 5 });'}</div>
							</code>
						</pre>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Modal;
