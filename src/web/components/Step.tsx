import React from 'react'
import { Task } from '../models/StartupModel'

type StepProps = Task &
{
    updateModel: () => void
    , isDisabled: boolean
    , isPhaseDone: boolean
}

export const Step = ({ title, isDone, toggle, updateModel, isDisabled, isPhaseDone }: StepProps): React.ReactElement => {

    const toggleDone = (): void => {
        toggle();
        updateModel();
    }

    const id = title.replace(/\s/g, '');

    return (
        <div className={`step ${isPhaseDone ? 'done' : ''}`}>
            <input id={id} type='checkbox' checked={isDone} onClick={toggleDone} disabled={isDisabled} />
            <label htmlFor={id}>{title}</label>
        </div>
    );
}
