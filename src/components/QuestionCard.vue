<template>
  <transition name="fade">
    <div class="question-card flex justify-center p-4 container mx-auto" @click="markAnswered">
      <div class="max-w-sm border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded p-4 flex flex-col justify-between leading-normal shadow">
        <div class="mb-8">
          <div class="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
          <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink">
          <div class="text-sm">
            <p class="text-black leading-none">Jonathan Reinink</p>
            <p class="text-grey-dark">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
    </transition>
</template>

<script>
export default {
  name: "QuestionCard",
  methods: {
    markAnswered: function (event) {
      console.log(this, event)
    }
  }
}

</script>

<style lang="scss" scoped>
.question-card {
  animation: slide-in 0.75s cubic-bezier(0.51, 0.42, 0.55, 1.1);
}

.fade-enter-active,
.fade-leave-active {
  animation: slide-in 0.5s;
}

.fade-enter,
.fade-leave-to {
  animation: slide-out 0.5s;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(100vh);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-out {
  0% {
    transform: translateY(50px);
  }

  100% {
    opacity: 0;
    transform: translateY(-50px);
  }
}
</style>