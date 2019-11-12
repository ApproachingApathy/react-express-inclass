import React from 'react'

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
            this.setState({Post:post})
        })
    }

    render() {
        return (
            <>
                <h1>
                    Yo {this.state.Post ? this.state.Post.title : 'Nothing\'s Here!'}
                </h1>
                <div>
                    {this.state.Post ? this.state.Post.content : null}
                </div>
            </>
        )
    }
}