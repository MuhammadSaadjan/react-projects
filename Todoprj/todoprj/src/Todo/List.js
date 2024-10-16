import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.tasks.map(task =>
                            <Item
                                key={task.id}
                                id={task.id}
                                text={task.text}
                                status={task.status}
                                toggleTaskStatus={this.props.toggleTaskStatus}
                                removeTask={this.props.removeTask}
                            />)
                    }
                </ul>
            </div>
        )
    }
}

