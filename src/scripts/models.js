import Backbone from 'backbone'

export const ListModel = Backbone.Model.extend ({
    defaults: {
        status: 'incomplete'
    }
})

export const ListCollection = Backbone.Collection.extend ({
    model: ListModel
})