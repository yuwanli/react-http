import React, { Component } from 'react';
import axios from '../../../axios'
// import {} from 'react-router-dom'

import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPost: null
    }

    componentDidMount() {
        console.log('[FullPost] componentDidMount') 
        this.loadData()
    }
    componentDidUpdate() {
        console.log('[FullPost] componentDidUpdate') 
        this.loadData()
    }

    loadData() {
        const id = this.props.match.params.id
        if (id) {
            if (!this.state.loadedPost || ( this.state.loadedPost && this.state.loadedPost.id !== +id)) {
                axios.get('/posts/' + id)
                .then(res => {
                    this.setState({loadedPost: res.data})
                })
            }
        }
    }

    handleDelete = () => {
        axios.delete('/posts/' + this.props.match.params.id).then(res => console.log(res))
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id){
            post = <p style={{textAlign: 'center'}}>loading</p>;
        }
        if (this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.handleDelete} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;