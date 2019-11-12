import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Index from '../Index'
import Post from '../Post'

export default class AppRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
        <>
            <Router>
                <Route exact path='/'>
                    <Index />
                </Route>
                <Route path='/post/:id' component={Post}/>
                {/* <Route path='/post/:id'>
                    <Post />
                </Route> */}
            </Router>
        </>
        )
    }
}