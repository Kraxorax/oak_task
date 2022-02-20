
export class Task {
    constructor(public title: string,
        public isDone: boolean) { }

    toggle = () => {
        this.isDone = !this.isDone;
    }
}

export class Phase {
    constructor(public title: string,
        public tasks: Task[]) { }

    isPhaseDone = (): boolean => {
        return this.tasks.every(t => t.isDone);
    }
}

export class StartupModel {
    static fromJson(json: any): StartupModel {
        let phases: Phase[] = [];
        for (let phase of json.phases) {
            let tasks: Task[] = [];
            for (let task of phase.tasks) {
                tasks.push(new Task(task.title, task.isDone));
            }
            phases.push(new Phase(phase.title, tasks));
        }
        return new StartupModel(phases);
    }

    constructor(public phases: Phase[]) { }

    isPhaseCompleted(phase: Phase): boolean {
        return phase.tasks.every(t => t.isDone);
    }
}


