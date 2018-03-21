import { Map, List } from "immutable";

//Set up initial object
//Array of 2 players with their initial name and score

const initial = Map({
    players: List([
        Map({
            name: "",
            score: 0,
        }),
        Map({
            name: "",
            score: 0,
        }),
    ]),
});

export default initial;