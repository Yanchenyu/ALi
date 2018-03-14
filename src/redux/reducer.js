/**
 * redux-reducer
 * Created by Yan on 2018/03/14.
 */

import { combineReducers } from 'redux'

const dataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DATA_ACTION':
            return action.data
        default:
            return state
    }        
};

const reducers = combineReducers({
    data: dataReducer
});

export default reducers