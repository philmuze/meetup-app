<template>
  <div class="container lg:max-w-screen-lg mx-auto px-6 py-2">
    <h1 class="text-base font-display font-bold tracking-wide uppercase py-2">Live Sessions</h1>
    <ul class="list-reset">
      <li v-for="session in sessions" :key="session.id">
        <SessionCard :session="session" />
      </li>
    </ul>
  </div>
</template>

<script>
import SessionCard from "@/components/SessionCard";

export default {
  name: "PageSessions",
  components: {
    SessionCard
  },
  data() {
    return {
      sessions: [
        {
          id: 1,
          name: "Here we go - Vue.JS Dresden #1",
          time: "19:00",
          live: true
        },
        {
          id: 2,
          name: "Here we go - Vue.JS Dresden #2",
          time: "19:30",
          live: false
        },
        {
          id: 3,
          name: "VUe.js London",
          time: "12:00",
          live: true
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
