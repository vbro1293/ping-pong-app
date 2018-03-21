import { connect } from "react-redux";
import { updateName } from "../data/actions";
import Input from "../components/Input";

//For passing in the event handler to <Input>

const mapDispatchToProps = (dispatch, { id }) => ({
	onChange: e => dispatch(updateName(id, e.target.value))
});

export default connect(null, mapDispatchToProps)(Input);