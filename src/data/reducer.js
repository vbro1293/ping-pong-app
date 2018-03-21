import { UPDATE_NAME, UPDATE_SCORE } from './actions';
//Variables for number of serves each and winning score

const servesEach = 5;
const endOn = 21;

//Update specified players name
const updateName = (state, { player, name }) => state.setIn(["players", player, "name"], name);

//Add 1 to players score
const incrementScore = (state, { player }) => state.updateIn(["players", player, "score"], score => score+1);

//switch statement to call function depending on action type
const state = (state, action) => {
	switch (action.type){
		case UPDATE_NAME: return updateName(state, action);
		case UPDATE_SCORE: return incrementScore(state, action);
		default: return state;
	}
}

export default state;