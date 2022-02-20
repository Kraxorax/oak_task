import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'
import { makeTestModel } from './models/TestModel'

const startupModel = makeTestModel()
const startupStorage = window.localStorage

ReactDOM.render(
    <App startupModel={startupModel} storage={startupStorage} />, document.getElementById('root')
);
