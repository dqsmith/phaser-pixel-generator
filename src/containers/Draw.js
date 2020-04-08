import React from 'react';

import Grid from '../components/Grid';
import Render from '../components/Render';
import Download from '../components/Download';

const Draw = (props) => {
	return (
		<div className="container">
			<div className="columns">
				<div className="column">
					<Grid />
				</div>
				<div className="column">
					<Render renderer={props.renderer} />
				</div>
			</div>
			<div className="columns">
				<div className="column"></div>
				<div className="column">
					<Download />
				</div>
			</div>
		</div>
	)
}

export default Draw;