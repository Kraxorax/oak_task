import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'
import { makeTestModel } from './models/TestModel'

const startupModel = makeTestModel()

ReactDOM.render(
    <App model={startupModel} />, document.getElementById('root')
);
