import * as React    from 'react'
import * as ReactDOM from 'react-dom'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'

import { App } from './components/App'
import { Home, NewInvestments } from './views'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />

            <Route path="newinvestments" component={NewInvestments} />
        </Route>
    </Router>,
    document.getElementById('app')
)
