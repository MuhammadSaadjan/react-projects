import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props) {
        super(props)

    }

    buttonClicked = () => {
        this.props.change(Math.random())
    }

    render() {
        return (
            <div>
                <button onClick={console.log('btn clicked')}>Change</button>
            </div>
        )
    }
}
