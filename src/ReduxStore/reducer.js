import * as actions from "./actionsType";

let lastId = 0;

export const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.TODO_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case actions.TODO_MODIFIED:
            return state.map(todo => todo.id !== action.payload.id ? todo : { ...todo, description: action.payload.description });

        case actions.TODO_RESOLVED:
            return state.map(todo => todo.id !== action.payload.id ? todo : { ...todo, resolved: true });

        case actions.TODO_REMOVED:
            return state.filter(todo => todo.id !== action.payload.id)
        default:
            return state
    }
}