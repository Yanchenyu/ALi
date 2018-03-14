/**
 * 首页index
 * Created by Yan on 2018/03/13.
 */

import React, { Component } from 'react'
import { render } from 'react-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { hashHistory, Router, Route } from 'react-router'

require('./theme/css/index');

const IndexContainer = (location, cb) => {
    require.ensure([], (require) => {
        cb(null, require('./containers/index').default)
    }, 'index')
};

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/index' getComponent={IndexContainer}></Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)