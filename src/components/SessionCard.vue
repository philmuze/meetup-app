<template>
  <router-link to="/hsd12" class="no-underline">
  <div class="px-4 py-2">
    <div class="border border-grey-light bg-white rounded p-4 leading-normal shadow hover:translateY-2px transition overflow-hidden">
    <div class="text-black font-bold text-xl mb-2">{{ session.name }}</div>
    <div class="flex items-center justify-center">
      <div :class="[ session.live ? 'green dot' : 'red dot' ]"></div>
      <p class="text-grey-darker text-base">20. Aug. - 19:00</p>
    </div>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  name: "SessionCard",
  props: {
    session: Object
  }
};
</script>

<style lang="scss" scoped>
.dot {
  border-radius: 50%;
  height: 8px;
  width: 8px;
  margin: 0 8px;
  &.green {
    background-color: #38c172;
  }
  &.red {
    background-color: #e3342f;
  }
}
</style>
