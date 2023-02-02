type InitialStateType = any

const initialState = {
    auth: {}
}

export type ActionsType = any

export const authorizationReducer = (state:InitialStateType = initialState, action: ActionsType) => {
    switch(action.type) {
        default:
            return state
    }
}