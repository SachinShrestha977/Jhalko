<template>
  <div class="bg-red-500 bg-star-animation pb-8">
    <div class="md:mx-40 flex md:flex-row flex-col items-center">
      <div class="md:w-1/2 p-5">
        <img src="../../assets/star.png" alt="" />
      </div>
      <div class="md:w-1/2 flex flex-col items-center justify-center">
        <img
          src="../../assets/starmap.svg"
          alt=""
          class="h-16 items-center justify-center"
        />
        <p class="text-white font-bold text-3xl text-center pt-8">
          PERSONALIZED STAR MAP OF YOUR SPECIAL MOMENTS
        </p>
        <button
          class="px-4 py-2 mt-8 font-semibold text-white text-sm bg-primary-orange rounded hover:bg-orange-600 uppercase"
        >
          Create Now
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StarMap",
  data() {},
};
</script>

<style>
@keyframes move-stars {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

.bg-star-animation {
  background-image: url(../../assets/starmap.jpg); /* Update with your image path */
  background-size: 1000 1000px; /* Adjust size to fit your design needs */
  animation: move-stars 500s linear infinite;
}
</style>
