import React from 'react';

const Download = (props) => {
	const showModal = props.showModal;
	const handler = (mime) => {
		if (mime) {
			const link = document.createElement('a');
			link.download = `download.${mime}`;
			link.href = document.querySelector('#renderer > canvas').toDataURL(`image/${mime}`)
			link.click();
		} else {
			showModal(true);
		}
	}

	const types = [
		{
			mime: 'png',
			label: 'PNG'
		},
		{
			mime: 'jpg',
			label: 'JPG'
		},
		{
			mime: 'bmp',
			label: 'BMP'
		},
		{
			mime: 'gif',
			label: 'GIF'
		},
		{
			mime: '',
			label: 'Phaser Texture'
		}
	];

	return (
		<div className="container">
			<div className="columns">
				<div className="column">
					<h1 className="is-column-header">Download</h1>
					<div className="columns">
						<div className="column">
							{
								types.map((type, index) => <button className="button download-button is-info"
									onClick={() => handler(type.mime)} key={index}>{type.label}</button>)
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Download;