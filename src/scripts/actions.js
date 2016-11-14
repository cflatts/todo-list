import STORE from './store'

const ACTIONS = {
    _createTask: function(taskName) {
        var newTaskAttrs = {
            title: taskName
        }

        var listCollection = STORE._get('listCollection')
        listCollection.add(newTaskAttrs)
        STORE._set({
            listCollection:listCollection
        })
    }
}

export default ACTIONS