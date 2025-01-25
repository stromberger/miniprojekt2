<script setup lang="ts">
import {type Choice, type Scenario} from "@/game/Story.ts";
import {type Ref, ref} from "vue";

defineProps<{
  scenario: Scenario,
}>();

const emit = defineEmits<{
  (e: 'click', newScenarioId?: number): void
}>()

let isConsequence = ref(false);
let currentChoice: Ref<any> = ref(0);

function transitionToConsequence(option: Choice) {
  currentChoice.value = option;
  isConsequence.value = true;
  // delay for 2 seconds
  setTimeout(() => {
    emit('click', option.nextScenario);
    isConsequence.value = false;
  }, 3000);
}

</script>

<template>
  <div>
    <div v-if="!isConsequence">
    <h2 class="pb-2 text-slate-400">{{ scenario.title }}</h2>
    <p class="pb-6 text-xl text-slate-800">{{ scenario.description }}</p>
    <button class="cursor-pointer mb-2 p-4 w-full border transition-colors duration-100 ease-in-out hover:bg-blue-700 hover:text-white" v-for="option in scenario.choices" :key="option.id" @click="transitionToConsequence(option)">
      {{ option.text }}
    </button>
  </div>
  </div>
  <div v-if="isConsequence">
    <h1>{{currentChoice.consequence}}</h1>
  </div>
</template>

<style scoped>

</style>
