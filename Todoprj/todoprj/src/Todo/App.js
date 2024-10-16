import React, { Component } from 'react'
import Add from './Add'
import List from './List'
import Reset from './Reset'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }

    addTask = (taskText) => {
        // Check if the task already exists
        const taskExists = this.state.tasks.some(task => task.text === taskText);
        if (taskExists) {
            alert('Error: Task already exists');
        } else {
            const newTask = {
                id: this.state.tasks.length ? this.state.tasks[this.state.tasks.length - 1].id + 1 : 1,
                text: taskText,
                status: 'incomplete'
            }
            this.setState((prevState) => ({
                tasks: [...prevState.tasks, newTask],
                error: ''
            }))
        }
    }


    toggleTaskStatus = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task =>
                task.id === id // Check if the task id matches the id passed to the function
                    ? { ...task, status: task.status === 'incomplete' ? 'complete' : 'incomplete' }
                    : task
            )
        }))
    }

    resetTasks = () => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => ({
                ...task,
                status: task.status === 'complete' ? 'incomplete' : task.status
            }))
        }))
    }


    removeTask = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }))
    }

    deleteTasks = () => {
        this.setState({ tasks: [] })
    }

    render() {
        return (
            <div>
                <h1>Total Tasks: {this.state.tasks.length}</h1>

                <h1>Completed Tasks:{this.state.tasks.filter(task =>

                    task.status === "complete").length}</h1>

                <h1>Incomplete Tasks:{this.state.tasks.filter(task => task.status === "incomplete").length}</h1>

                <Add addtasks={this.addTask} />

                <List tasks={this.state.tasks} toggleTaskStatus={this.toggleTaskStatus} removeTask={this.removeTask} />

                <Reset reset={this.resetTasks} delete={this.deleteTasks} />
            </div>
        )
    }
}
/**
 *Add will need only an addition fxn
 *List will need all the data in the list
 *Reset will need only a reset fxn
 */