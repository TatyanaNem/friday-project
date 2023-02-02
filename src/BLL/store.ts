import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {authorizationReducer} from './authorizationReducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authorizationReducer
})

const store = createStore(rootReducer)

export type AppStoreType = ReturnType<typeof rootReducer>

export default store;

// @ts-ignore
window.store = store;