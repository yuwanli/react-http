import React, { Component } from 'react';
import axios from '../../../axios'

import Post from '../../../components/Post/Post'
import './Posts.css'
import FullPost from '../FullPost/FullPost'
import {Route} from 'react-router-dom'

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0,4)
                this.setState({
                    posts
                })
            })
            .catch(() => {
                this.setState({
                    error: true
                })
            })
    }
    postSelectedHandler = (id) => {
        this.props.history.push({
            pathname: '/' + id,
        })
    }
    render() { 
        let posts = <p style={{textAlign: 'center'}}>something went wrong</p>
        if (!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                    <Post 
                        key={post.id}
                        {...post}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                )
            })
        }
        return ( 
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/:id" component={FullPost}></Route>
            </div>
         );
    }
}
 
export default Posts;