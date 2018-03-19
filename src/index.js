/**
 * 首页index
 * Created by Yan on 2018/03/13.
 */

import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './containers/index'

require('./theme/css')

render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
)