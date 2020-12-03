import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers/reducer'

const store = createStore(reducer, compose(applyMiddleware(thunk)))

export default store