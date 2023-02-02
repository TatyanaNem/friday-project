type InitialStateType = any

const initialState = {
    profile: {}
}

export type ActionsType = any

export const profileReducer = (state:InitialStateType = initialState, action: ActionsType) => {
    switch(action.type) {
        default:
            return state
    }
}