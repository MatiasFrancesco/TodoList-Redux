import * as actions from "./actionsType";


export const todoAdder = description => ({
    type: actions.TODO_ADDED,
    payload:{
        description
    }
})

export const todoModifier = (id, description) => ({
    type: actions.TODO_MODIFIED,
    payload:{
        id,
        description
    }
})

export const todoResolver = id => ({
    type: actions.TODO_RESOLVED,
    payload:{
        id
    }
})

export const todoRemover = id => ({
    type: actions.TODO_REMOVED,
    payload:{
        id
    }
})