import React, { Component,Suspense } from 'react';
// import axios from '../../axios'
import {Route,NavLink,Switch} from 'react-router-dom'

import './Blog.css';
// import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent'

// 自定义异步组件
const asyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

// 使用React.lazy实现异步组件 组合Suspense使用
const Posts = React.lazy(() => {
    return import('./Posts/Posts')
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
                    <Route path="/" render={() => 
                        <Suspense fallback={<div>...loading</div>}>
                            <Posts></Posts>
                        </Suspense>
                    }></Route>
                </Switch>
            </div>
        );
    }
}

export default Blog;