import React, { Component } from 'react'

export default class Add extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newTask: ''

        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.newTask.trim() !== '') {
            this.props.addtasks(this.state.newTask)
            this.setState({ newTask: '' })
        }
    }




    handleChange = (e) => {
        this.setState({
            newTask: e.target.value
        })
    }



    render() {
        return (
            <div>
                <h1>Add new tasks</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        id='item'
                        name='text'
                        value={this.state.newTask}
                        onChange={this.handleChange}

                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
