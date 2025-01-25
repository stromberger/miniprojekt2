<script setup lang="ts">
import story, {type Scenario} from "@/game/Story.ts";
import Decision from "@/components/Decision.vue";
import {ref} from "vue";

let currentStory = story;
let currentScenario = ref(currentStory.scenarios[0]);
let isDone = ref(false);
let isInitial = ref(true);

function changeScenario(newScenarioId?: number) {
  console.log("changing scenario to", newScenarioId);
  let s = currentStory.scenarios.find(scenario => scenario.id === newScenarioId) as Scenario;
  if (s === undefined || s === null || newScenarioId === undefined) {
    isDone.value = true;
    return;
  } else {
    currentScenario.value = s;
    isDone.value = false;
  }
}

</script>

<template>
  <main class="h-screen flex justify-center items-center font-mono">
    <div class="border border-slate-300 p-8 w-3xl">
      <div v-if="isInitial">
        <h2 class="pb-2 text-slate-400">Let the game begin!</h2>
        <h1 class="text-2xl pb-4 text-slate-800">{{currentStory.title}}</h1>
        <p class="pb-4 text-slate-700">{{currentStory.description}}</p>
        <button class="cursor-pointer mb-2 p-4 w-full border transition-colors duration-100 ease-in-out hover:bg-blue-700 hover:text-white"
                @click="() => {
          isDone = false;
          isInitial = false;
        }">Start</button>
      </div>
      <Decision v-if="!isDone && !isInitial" :scenario="currentScenario" @click="changeScenario"/>
      <div v-if="isDone && !isInitial">
        <h1 class="text-2xl pb-4 text-slate-800">The End</h1>
        <p class="pb-4 text-slate-700">Du hast das Ende vom Spiel erreicht! Möchtest du noch einmal von vorne Anfangen, um andere Möglichkeiten zu erkunden?</p>
        <button class="cursor-pointer mb-2 p-4 w-full border transition-colors duration-100 ease-in-out hover:bg-blue-700 hover:text-white"
        @click="() => {
          isDone = false;
          changeScenario(1);
        }">
          Erneut spielen
        </button>
      </div>
    </div>
  </main>
</template>
