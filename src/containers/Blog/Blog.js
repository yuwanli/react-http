import React, { Component } from 'react';
// import axios from '../../axios'
import {Route,NavLink} from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

class Blog extends Component {
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
                <Route path="/" exact component={Posts}></Route>
                <Route path="/new-post" component={NewPost}></Route>
                <Route path="/full-post/:id" component={FullPost}></Route>
            </div>
        );
    }
}

export default Blog;