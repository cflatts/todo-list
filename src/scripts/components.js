import React from 'react'

var ListView = React.createClass ({

    getInitialState: function () {
        return {
            listColl: this.props.listColl
            }
    },

    componentWillMount: function () {
        console.log('mounting')
        this.props.listColl.on('update', () => {
            this.setState({
                listColl: this.state.listColl
            })
        })
    },

    _addTask : function(taskInfo) {
        this.props.listColl.add({
            task: taskInfo
        })
    },

    render: function() {
        // console.log(this.props)
        return(
            <div id = 'todoList'>
                <Header />
                <AddTask _addToTaskList = {this._addTask} />
                <TaskList listColl = {this.state.listColl} />
            </div>
            )
    }
})

var Header = React.createClass ({
    render: function() {
        return (
            <div id = 'headerContainer'>
                <h1>GRINDIN' 101</h1>
            </div>
            )
    }
})

var AddTask = React.createClass ({
    _addTask: function (evt) {
        if(evt.keyCode === 13) {
            // console.log(evt)
            this.props._addToTaskList(evt.target.value)
            evt.target.value = ''
        }
    },

    render: function() {
        return (
            <input type = 'text' placeholder = 'Next side hustle' onKeyDown = {this._addTask} />
        )
    }
})

var TaskList = React.createClass ({
    _getListComps: function(listColl) {
        return listColl.map((model) => <Task taskModel = {model} />
            )
    },

    render: function() {
        return (
            <ul id = 'taskList'>
                {this._getListComps(this.props.listColl)}
            </ul>
            )
    }
})

var Task = React.createClass ({
    _changeStatus: function (evt) {
        this.props.taskModel.set ({
            status: evt.target.value
        })
    },

    _removeTask: function () {
        this.props.taskModel.destroy()
    },

    render: function () {

        var taskStatus = this.props.taskModel.get('status')

        var statusValues = {
            incomplete: taskStatus === 'incomplete' ? 'selected' : '',
            inProgress: taskStatus === 'In Progress' ? 'selected' :'',
            complete: taskStatus === 'Complete' ? 'selected' : ''
        }

        return (
            <div className = 'task'>
                <div className = 'taskItem'>{this.props.taskModel.get('task')}</div>
                <select id = 'status' onChange = {this._changeStatus}>
                    <option value = 'incomplete' selected = {taskStatus.incomplete}>Incomplete</option>
                    <option value = 'inProgress' selected = {taskStatus.inProgress}>In Progress</option>
                    <option value = 'complete' selected = {taskStatus.complete}>Complete</option>
                </select>
                <button id = 'taskDoneButton' onClick = {this._removeTask}>On to the next one!</button>
            </div>
            )
    }
})


export default ListView