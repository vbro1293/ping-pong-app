export const UPDATE_NAME = Symbol("UPDATE_NAME");
export const INCREMENT_SCORE = Symbol("INCREMENT_SCORE");

//Actions to update a players name and increment a players score
export const updateName = (player, name) => ({
	type: UPDATE_NAME,
	player,
	name,
})

export const incrementScore = player => ({
	type: INCREMENT_SCORE,
	player,
})