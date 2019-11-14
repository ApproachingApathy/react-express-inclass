import React from 'react'
import {markdown} from 'markdown'

export default class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount () {
        const id = this.props.match.params.id
        console.log(`${this.props.match.params.id}`)
        fetch(`/posts/${id}`)
        .then((data) => {
            data = data.json();
            this.setState({Post:data});
            return data
        })
        .then((post) => {
            // console.log(markdown.toHTML(post.content))
            this.setState({Post:post, content: markdown.toHTML(post.content)})
        })
    }

    render() {
        console.log(this.state.content)
        return (
            <>
                <h1>
                    {this.state.Post ? this.state.Post.title : 'Nothing\'s Here!'}
                </h1>
                <hr/>
                <div dangerouslySetInnerHTML={{__html: this.state.content ? this.state.content : null}}>
                </div>
            </>
        )
    }
}