import React from "react"
import { Task } from "../models/StartupModel"

interface StepAdderProps {
  updateModel: () => void,
  addTask: (t: Task) => void
}

export const StepAdder = ({ updateModel, addTask }: StepAdderProps) => {

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputText = e.currentTarget.value.trim();
    if (e.key === 'Enter' && inputText.length > 0) {
      addTask(new Task(inputText, false));
      updateModel();
      e.currentTarget.value = '';
    }
  }

  return (<input type='text' placeholder='Add new task' onKeyDown={onKeyPress} />);
}

