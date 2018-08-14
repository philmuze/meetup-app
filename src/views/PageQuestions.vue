<template>
  <div class="center">
    <h1 class="mb-4">Vue.js Dresden #1</h1>
    <ul class="list-reset">
      <li v-for="question in questions" :key="question">
        <question-card></question-card>
      </li>
    </ul>


  </div>
</template>

<script>
import QuestionCard from "@/components/QuestionCard";

export default {
  name: "PageQuestion",
  components: {
    QuestionCard
  },
  data() {
    return {
      questions: [1, 2, 3]
    };
  }
};
</script>

<style scoped>
</style>
