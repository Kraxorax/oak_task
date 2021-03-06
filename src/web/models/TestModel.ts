import { StartupModel, Phase, Task } from "./StartupModel"

export const makeTestModel = (): StartupModel => {
    const startupModel = new StartupModel([
        new Phase("Foundation", [
            new Task("Setup virtual office", false),
            new Task("Set mission & vision", false),
            new Task("Select busines name", false),
            new Task("Buy domains", false),
        ]),
        new Phase("Discovery", [
            new Task("Create roadmap", false),
            new Task("Competitor analysis", false),
        ]),
        new Phase("Delivery", [
            new Task("Release marketing website", false),
            new Task("Release MVP", false),
        ]),
    ]);
    return startupModel;
}

const modelJson =
{
    "phases": [
        {
            "title": "Foundation",
            "tasks":
                [
                    { "title": "Setup virtual office", "isDone": false },
                    { "title": "Set mission & vision", "isDone": false },
                    { "title": "Select busines name", "isDone": false },
                    { "title": "Buy domains", "isDone": false }
                ]
        }, {
            "title": "Discovery", "tasks":
                [
                    { "title": "Create roadmap", "isDone": false },
                    { "title": "Competitor analysis", "isDone": false }
                ]
        }
        , {
            "title": "Delivery", "tasks":
                [
                    { "title": "Release marketing website", "isDone": false },
                    { "title": "Release MVP", "isDone": false }
                ]
        }
    ]
}