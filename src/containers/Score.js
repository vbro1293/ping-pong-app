import { connect } from 'react-redux';
import { updateScore } from '../data/actions';
import Score from '../components/Score';

//For passing in the event handler to <Score>

const mapDispatchToProps = (dispatch, { id }) => ({
	onClick: () => dispatch(updateScore(id)),
});

export default connect(null, mapDispatchToProps)(Score);