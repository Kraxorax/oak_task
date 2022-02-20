import React from 'react'
import { Step, StepProps } from './Step'

export interface StageProps {
    title: string;
    steps: StepProps[];
    isDone: boolean;
}

export const Stage = ({ title, steps, isDone }: StageProps): React.ReactElement => {

    return (
        <div>
            <h2>{`${title}${isDone ? ' ✔' : ''}`}</h2>
            {steps.map((step, index) => <Step key={index} {...step} />)}
        </div>
    );
}
