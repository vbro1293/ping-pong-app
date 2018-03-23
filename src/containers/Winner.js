import { connect } from 'react-redux';
import { reset } from '../data/actions';
import Winner from '../components/Winner';

//Dispatch reset action to onclick handler on button
const mapDispatchToProps = dispatch => ({
	onClick: e => dispatch(reset()),
});

export default connect(null, mapDispatchToProps)(Winner);