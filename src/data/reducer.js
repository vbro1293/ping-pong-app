import { UPDATE_NAME, UPDATE_SCORE, RESET } from './actions';
import initial from './initial';


//========VARIABLES

//Variables for number of serves each and winning score
const servesEach = 5;
const endOn = 21;


//========FUNCTIONS

//Update specified players name
const updateName = (state, { player, name }) => state.setIn(["players", player, "name"], name);

//Add 1 to players score
const updateScore = (state, { player }) => state.updateIn(["players", player, "score"], score => score+1);

//Get total score
const getTotal = players => players.reduce((total, player) => total + player.get("score"), 0);

//Get server
const getServer = totalScore => Math.floor(totalScore / servesEach) % 2;

//Update the server
const updateServer = state => {
	let total = getTotal(state.get("players"));
	let server = getServer(total);
	return state.update("players", players =>
		players.map((player, i) => 
			player.set("serving", i === server)))
}

//Detect winner
const updateWinner = state => {
	return state.update("players", players =>
		players.map(player =>
			player.set("won", player.get("score") >= endOn)
		)
	)
}

//Reset start to initial
const reset = () => initial;



//==========SWITCH FOR CALLING FUNCTIONS FOR SPECIFIC ACTIONS

//switch statement to call function depending on action type
const state = (state, action) => {
	switch (action.type){

		case UPDATE_NAME: return updateName(state, action);
		
		//chain functions- update score and the returned state is then used for updating the server
		case UPDATE_SCORE: return updateWinner(updateServer(updateScore(state, action)));

		case RESET: return reset();

		default: return state;
	}
}

export default state;