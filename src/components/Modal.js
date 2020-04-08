import React from 'react';

const Modal = (props) => {
	const isActive = props.show ? 'is-active' : '';
	const showModal = props.showModal;

	return (
		<div className={"modal " + isActive}>
			<div className="modal-background"></div>
			<div className="modal-content">
				<p className="">
					{/* Provide phaser code */}
				</p>
			</div>
			<button className="modal-close is-large"
				onClick={() => showModal(false)} aria-label="close"></button>
		</div>
	)
}

export default Modal;
