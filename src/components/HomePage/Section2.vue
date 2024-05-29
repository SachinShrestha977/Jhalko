<template>
  <div class="bg-slate-50 pb-16">
    <div class="mx-40 pt-16 flex items-center">
      <div class="w-1/2 p-10">
        <p class="font-bold text-6xl uppercase">For You</p>
        <p class="font-bold text-6xl uppercase">By You</p>
        <p class="text-xl font-semibold pt-8 uppercase">Design your own mug</p>
        <button
          class="px-4 py-2 mt-4 font-semibold text-white text-sm bg-[#f37125] rounded hover:bg-orange-600 uppercase"
        >
          Design custom gift mug
        </button>
      </div>
      <div class="w-1/2">
        <img src="../../assets/cup-tshirt.png" alt="" class="px-16" />
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
