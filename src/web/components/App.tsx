import React, { useState } from 'react'
import { StartupModel } from '../models/StartupModel'
import { Stage } from './Stage'
import '../styles.less'

interface AppProps {
    startupModel: StartupModel;
    storage: Storage;
}

export const App = ({ startupModel, storage }: AppProps): React.ReactElement => {
    let initialModel: StartupModel = startupModel;
    if (storage.getItem('startupModel') != null) {
        const sm = storage.getItem('startupModel') as string;
        initialModel = StartupModel.fromJson(JSON.parse(sm));
    }

    const [model, setModel] = React.useState(initialModel);
    let fact: null | string = null
    const [factState, setFactState] = useState(fact);

    const updateModel = () => ((m: StartupModel): void => {
        const newModel = Object.assign({}, m);
        storage.setItem('startupModel', JSON.stringify(newModel));
        setModel(newModel);
    })(model);

    if (!factState && model.phases.every(phase => phase.isPhaseDone())) {
        const fetchPromise = fetch("https://uselessfacts.jsph.pl/random.json");
        fetchPromise.then(response => response.json().then(json => setFactState(json.text)))
    }

    const renderPhases = (): React.ReactElement[] => {
        return model.phases.reduce((ps, phase, index) => {
            let locked = false;
            if (index > 0 && !model.phases[index - 1].isPhaseDone()) {
                locked = true;
            }

            ps.push(<Stage key={index} index={index} {...phase} updateModel={updateModel} locked={locked} />)

            return ps;
        }, ([] as React.ReactElement[]));
    }

    return (
        <div id='main'>
            <h1>{'My startup progress'}</h1>
            {renderPhases()}
            {factState && <p>{factState}</p>}
        </div>
    );
}
