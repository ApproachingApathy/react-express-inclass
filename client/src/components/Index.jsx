import React from 'react'

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {posts:[]}

    }

    componentDidMount() {
        fetch('/posts')
        .then(data => data.json())
        .then(data => this.setState({posts: data}))
    }

    render() {
        let posts = this.state.posts.map((post, index)=>{
            return (
                <li key={post.id}>{post.title}</li>
            )
        })
        return (
            <ul>
                {posts}
            </ul>
        )
    }
}