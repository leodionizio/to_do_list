import $ from 'jquery'
import tether from 'tether'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/bootstrap/dist/js/bootstrap.min.js'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div>
        <Menu />
        <div className="container">
            <Routes />
        </div>
    </div>
)