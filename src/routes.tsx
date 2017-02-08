import * as React    from 'react'
import * as ReactDOM from 'react-dom'

import { hashHistory, IndexRoute, Route, Router } from 'react-router'

import { App } from './components/App'
import { Home, NewInvestments } from './views'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="newinvestments" component={NewInvestments} />
        </Route>
    </Router>,
    document.getElementById('app')
)
