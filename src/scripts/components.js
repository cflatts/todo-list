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
        return(
            <div>Hi</div>
            )
    }
})


export default ListView