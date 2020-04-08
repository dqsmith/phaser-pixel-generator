import React from 'react';

import Size from '../components/Size';
import Colors from '../components/Colors';

const Controls = () => {
	return (
		<div className="columns">
			<div className="column">
				<Colors />
			</div>
			<div className="column">
				<Size />
			</div>
		</div>
	)
}

export default Controls;