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
        console.log(this.props)
        return(
            <div id = 'todoList'>
                <Header />

            </div>
            )
    }
})

var Header = React.createClass ({
    render: function() {
        return (
            <div id = 'headerContainer'>
                <h1>DOIT-TOIT LIST</h1>
            </div>
            )
    }
})


export default ListView