<template>
  <div class="relative w-[595px] h-[395px] mx-auto overflow-hidden">
    <!-- Container for the images -->
    <!-- Frame image -->
    <img
      src="../../assets/golden-frame.png"
      alt="Decorative Frame"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- Uploaded image preview -->
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Uploaded Image Preview"
      class="absolute h-[310px] w-[480px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getImageFile"]),

    imageUrl() {
      return this.getImageFile ? URL.createObjectURL(this.getImageFile) : null;
    },
  },
  unmounted() {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl); // Clean up
    }
  },
};
</script>
