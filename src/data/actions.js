export const UPDATE_NAME = Symbol("UPDATE_NAME");
export const UPDATE_SCORE = Symbol("INCREMENT_SCORE");
export const RESET = Symbol("RESET");

//Action to update a players name
export const updateName = (player, name) => ({
	type: UPDATE_NAME,
	player,
	name,
})

//Action to increment a players score
export const updateScore = player => ({
	type: UPDATE_SCORE,
	player,
})

//Action to reset the count
export const reset = () => ({
	type: RESET,
})