import React, { Component } from 'react';
// import axios from '../../axios'
import {Route,NavLink,Switch} from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent'

const asyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts></Posts>}></Route>
                <Route path="/" exact render={() => <Posts></Posts>}></Route> */}
                <Switch>
                    {
                        this.state.auth ? <Route path="/new-post" component={asyncNewPost}></Route> : null
                    }
                    <Route path="/" component={Posts}></Route>
                </Switch>
            </div>
        );
    }
}

export default Blog;