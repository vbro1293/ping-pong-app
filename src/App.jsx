import React, { Component } from 'react';
import PingPong from "./containers/PingPong";
import PageHeading from './components/PageHeading';

class App extends Component {
	render() {
		return (
			<div>
				<PageHeading title="PongPing" subtitle="🏓"/>
	    		<PingPong />
	    		</div>
    	);
	}
}

export default App;
