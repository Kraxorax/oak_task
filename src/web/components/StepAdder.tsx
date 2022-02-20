import React from "react"
import { Task } from "../models/StartupModel"

interface StepAdderProps {
  updateModel: () => void,
  addTask: (t: Task) => void
}

export const StepAdder = ({ updateModel, addTask }: StepAdderProps) => {

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask(new Task(e.currentTarget.value, false));
      updateModel();
      e.currentTarget.value = '';
    }
  }

  return (<input type='text' placeholder='Add new task' onKeyDown={onKeyPress} />);
}

