
export class Task {
    constructor(public title: string,
        public isDone: boolean) { }
}

export class Phase {
    constructor(public title: string,
        public tasks: Task[]) { }

    isPhaseDone(): boolean {
        return this.tasks.every(t => t.isDone);
    }
}

export class StartupModel {
    constructor(public phases: Phase[]) { }

    isPhaseCompleted(phase: Phase): boolean {
        return phase.tasks.every(t => t.isDone);
    }
}


