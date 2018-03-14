/**
 * redux-store
 * Created by Yan on 2018/03/14.
 */

import { createStore } from 'redux'
import reducers from './reducer'

const initState = {
    data: ''
};

export const store = createStore(
    reducers,
    initState
)