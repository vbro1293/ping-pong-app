import { Map } from "immutable";

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