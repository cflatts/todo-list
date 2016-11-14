import Backbone from 'backbone'
import _ from 'underscore'
import {ListModel, ListCollection} from './models'

const STORE = _.extend(Backbone.Events, {

    _data: {
        listCollection: new ListCollection(),
        currentTasks: 'all'
    },

    _emitChange: function() {
        this.trigger('storeChanged')
    },

    _get: function(prop) {
        return this._data[prop]
    },

    _getData: function() {
        this._get('listCollection').on('update', () => {
            this._emitChange()
        })
    },

    _set: function(newData) {
        this._data = _.extend()
    }
})

export default STORE