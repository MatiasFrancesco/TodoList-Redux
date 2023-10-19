import * as actions from "./actionsType";


export const bugAdder = description => ({
    type: actions.BUG_ADDED,
    payload:{
        description
    }
})

export const bugModifier = (id, description) => ({
    type: actions.BUG_MODIFIED,
    payload:{
        id,
        description
    }
})

export const bugResolver = id => ({
    type: actions.BUG_RESOLVED,
    payload:{
        id
    }
})

export const bugRemover = id => ({
    type: actions.BUG_REMOVED,
    payload:{
        id
    }
})