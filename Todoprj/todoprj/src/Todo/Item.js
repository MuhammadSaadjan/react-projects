import React, { Component } from 'react'
export default class Item extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <li key={this.props.id}>
                    <input type='checkbox'
                        checked={this.props.status === 'complete'}
                        onChange={() => this.props.toggleTaskStatus(this.props.id)}
                    />
                    {this.props.text} - {this.props.status}
                    <button onClick={() => this.props.removeTask(this.props.id)}>Remove</button>
                </li>
            </div>
        )
    }
}

