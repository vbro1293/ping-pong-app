import { connect } from 'react-redux';
import PingPong from '../components/PingPong';

//Getting players state and mapping to props so it can be passed into components
const mapStateToProps = state => ({
	players: state.get('players'),
	winner: state.get('players').filter(p => p.get("won")).first(),
})

export default connect(mapStateToProps)(PingPong);