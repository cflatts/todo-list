import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import ListView from './components'

const app = function() {


	ReactDOM.render(<ListView listColl = {new ListCollection()} />, document.querySelector('.container'))
}

app()