import React from 'react'
import { StartupModel } from '../models/StartupModel'
import { Stage } from './Stage'

interface AppProps {
    model: StartupModel;
}

export const App = ({ model }: AppProps): React.ReactElement => {

    return (
        <div id='main'>
            <h1>{'My startup progress'}</h1>
            {model.phases.map((phase, index) =>
                <Stage key={index}
                    title={phase.title}
                    steps={phase.tasks}
                    isDone={phase.isPhaseDone()} />)
            }
        </div>
    );
}
