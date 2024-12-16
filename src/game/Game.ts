import story from "@/game/Story.ts";

export const getScenario = (scenarioId: number) => {
    return story.scenarios.find(scenario => scenario.id === scenarioId);
}
