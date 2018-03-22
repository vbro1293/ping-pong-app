import { Map, List } from "immutable";

//Set up initial object
//Array of 2 players with their initial name and score
//Whether they are serving and if they have won

const initial = Map({
    players: List([
        Map({
            name: "",
            score: 0,
            serving: true,
            won: false,
        }),
        Map({
            name: "",
            score: 0,
            serving: false,
            won: false,
        }),
    ]),
});

export default initial;