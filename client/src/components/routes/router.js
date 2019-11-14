import React from 'react'
import {Route} from 'react-router-dom'

import Index from '../index/Index'
import Post from '../Post'
import Header from '../header/Header'

export default class AppRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
        <>  
            <Header />
            <div className='div-app'>
                <Route exact path='/'>
                    <Index />
                </Route>
                <Route path='/post/:id' component={Post}/>
            </div>
        </>
        )
    }
}