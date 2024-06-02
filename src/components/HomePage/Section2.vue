<template>
  <div class="bg-slate-50 pb-16">
    <div class="md:mx-40 pt-16 flex md:flex-row flex-col md:items-center">
      <div class="md:w-1/2 px-10">
        <p class="font-bold text-6xl uppercase">For You</p>
        <p class="font-bold text-6xl uppercase">By You</p>
        <p class="text-xl font-semibold pt-8 uppercase">Design your own mug</p>
        <button
          class="px-4 py-2 mt-4 font-semibold text-white text-sm bg-primary-orange rounded hover:bg-orange-600 uppercase"
        >
          Design custom gift mug
        </button>
      </div>
      <div class="md:w-1/2">
        <img src="../../assets/cup-tshirt.png" alt="" class="md:px-16 px-12" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Section2",
  data() {
    return {
      title: "Section2",
    };
  },
};
</script>
