import React from 'react'
import {Link} from 'react-router-dom'

import Feature from './Feature'

import '../../styles/listItem-box.css'
import '../../styles/list-noPad.css'

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {posts:[], newest:null, requestStatus:'Loading'}

    }

    componentDidMount() {
        fetch('/posts')
        .then(data => {
            if (data.status && data.status == 500) throw new Error();
            return data.json()
        })
        .then(data => this.setState({posts: data, newest: data[0]}))
        .catch(err => this.setState({requestStatus:'Server Error, Please Reload the Page or try again later.'}))
    }

    render() {
        let featuredBlurb = () => {
            if (this.state.newest && this.state.newest.content) return this.state.newest.content.substring(0, 40) + '...'
            else return ''
        }
        let posts = this.state.posts.map((post)=>{
            return (
                <div className="listItem_box">
                    <Link to={'/post/' + post.id}>
                        <li key={post.id}> 
                            <h4 className="listItem_box-title">
                                {post.title ? post.title : 'Could not fetch title.'}
                            </h4>
                            <p>
                                {post.content ? post.content.substring(0, 40) + '...' : 'Could not fetch content.'}
                            </p>
                            <p>
                                <em>
                                    {post.author ? post.author : 'Anonymous'}
                                </em>
                            </p>
                        </li>
                    </Link>
                </div>
                )
            })
        return (
            <>
                <Feature title={this.state.newest ? this.state.newest.title : this.state.requestStatus} shortText={ _ => this.featuredBlurb()}/>
                <ul className='list_noPad'>
                    {posts}
                </ul>
            </>
        )
    }
}