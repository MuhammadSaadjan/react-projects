import React, { Component } from 'react'

export default class Todo extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            item: '',
            list: []
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.item === '') {
            alert('Empty Items not allowed')
        }
        else if (this.state.list.indexOf(this.state.item) < 0) {

            this.setState({
                list: this.state.list.concat(this.state.item),
                item: ''
            })
        }
        else {
            alert('Item is already in the list')
        }
    }

    handleChange(e) {
        this.setState({
            item: e.target.value//passes the value in the HtML component to state
        })

        //TODO
        /**
         * Deletion
         * Search
         * Keyboard Integration
         */



    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text'
                        name='item'
                        id='item'
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
                <ul>
                    {
                        this.state.list.map((l, k) => {
                            return <li key={k}>{l}</li>
                        })
                    }
                </ul>

                <button onClick={() => this.setState({ list: [] })}>Reset</button>
            </div>
        )
    }
}
