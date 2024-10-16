import React, { Component } from 'react'

export default class Reset extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <button onClick={this.props.reset}>Reset state</button>
                <button onClick={this.props.delete}>Delete all Tasks</button>

            </div>
        )
    }
}
