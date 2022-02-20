import React from 'react'
import { Step } from './Step'
import { StepAdder } from './StepAdder'
import { Phase, Task } from '../models/StartupModel'

type StageProps = Phase & { index: number, updateModel: () => void, locked: boolean }

export const Stage = ({ title, tasks, locked, index, isPhaseDone, updateModel }: StageProps): React.ReactElement => {

    const isDone = isPhaseDone();

    const indexComp = () => {
        return (<div className='index'>{index + 1}</div>)
    }

    const checkMark = () => {
        if (!isDone) return ''
        else return (<div className='checkmark'>✔</div>)
    }

    return (
        <div className='stage'>
            <h2>{indexComp()} <span className='title'>{`${title}`}</span> {checkMark()}</h2>
            {tasks.map((task, index) =>
                <Step key={index} {...task} updateModel={updateModel} isDisabled={locked || isDone} isPhaseDone={isDone} />)}
            {!isDone && <StepAdder updateModel={updateModel} addTask={((t: Task) => tasks.push(t))} />}
        </div>
    );
}
