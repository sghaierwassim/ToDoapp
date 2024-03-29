import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducerRoot from './reducer';

const middleware = [ thunk ]

export default createStore(
    reducerRoot
    ,compose(applyMiddleware(...middleware)
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)