import {legacy_createStore as createStore , combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import {getAllPizzaReducer} from './reducers/pizzaReducer';
import { cartReducer } from './reducers/cardReducer';
import { registerUserReducer, loginUserReducer} from './reducers/userReducer';
import { getUserOrdersReducer, placeOrderReducer } from './reducers/orderReducer';
import { getUserOrders } from './actions/orderAction';
import { addPizzaReducer } from './reducers/pizzaReducer';
import { getPizzaByIdReducer } from './reducers/pizzaReducer';
import { updatePizzaByIdReducer } from './reducers/pizzaReducer';
import { allUserOrdersReducer } from './reducers/orderReducer';
import { getAllUsersReducer } from './reducers/userReducer';
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addPizzaReducer:addPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer ,
    updatePizzaByIdReducer:updatePizzaByIdReducer,
    allUserOrdersReducer:allUserOrdersReducer,
    getAllUsersReducer:getAllUsersReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cartReducer:{
        cartItems:cartItems,

    },
    loginUserReducer:{
        currentUser:currentUser
    }
}
const middleware = [thunk]

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;