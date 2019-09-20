import {createStore, compose ,applyMiddleware} from 'redux';
import rootReducer from './Reducers'
import thunk from 'redux-thunk'

const intialState ={};

const middleware =[thunk]

const store = createStore(
    rootReducer,
    intialState,
    compose(
        applyMiddleware(...middleware),
       window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;