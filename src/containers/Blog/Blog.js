import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        stateSelectedId: null
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data.slice(0,4)
                this.setState({
                    posts
                })
            })
    }

    postSelectedHandler = (id) => {
        this.setState({
            stateSelectedId: id
        })
    }

    render () {
        const posts = this.state.posts.map(post => {
            return (
                <Post 
                    key={post.id} 
                    {...post}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            )
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.stateSelectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;