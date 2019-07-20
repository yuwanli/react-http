import React, { Component } from 'react';
import axios from '../../../axios'
import {Link} from 'react-router-dom'

import Post from '../../../components/Post/Post'
import './Posts.css'

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
        this.setState({
            stateSelectedId: id
        })
    }
    render() { 
        let posts = <p style={{textAlign: 'center'}}>something went wrong</p>
        if (!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/post/' + post.id} key={post.id} >
                        <Post 
                            {...post}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </Link>
                )
            })
        }
        return ( 
            <section className="Posts">
                {posts}
            </section>
         );
    }
}
 
export default Posts;