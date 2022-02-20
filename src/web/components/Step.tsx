import React from 'react'

export interface StepProps {
    title: string;
    isDone: boolean;
}

export const Step = ({ title, isDone }: StepProps): React.ReactElement => {
    return (
        <div className={`step ${isDone ? 'done' : ''}`}>
            <input type='checkbox' checked={isDone} />
            <label>{title}</label>
        </div>
    );
}
