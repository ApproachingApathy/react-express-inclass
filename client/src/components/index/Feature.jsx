import React from 'react';
// import featureImage from '%PUBLIC_URL%/images/default-feature-image.png'
import '../../styles/index/feature.css'
// TODO Investigate styled-components


export default class Featured extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="div-featureSection">
                    <div className="featureSection-title">
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className="featureSection-shortText">
                        <p><em>{this.props.shortText}</em></p>
                    </div> 
                </div>
            </>
        )
    }
}