<template>
  <div class="bg-sky-50">
    <!-- Banner Part -->
    <div class="flex md:flex-row flex-col w-full md:space-x-2 md:pl-40 pt-8">
      <div class="md:w-1/2 px-4 py-4">
        <p class="font-bold text-3xl">
          QUALITY PHOTOS PRINTED, FRAMED & DELIVERED.
        </p>
        <p class="font-bold text-3xl mt-8">
          गुणस्तरीय फोटो फ्रेमहरु घरमै पाउनुहोस्।
        </p>

        <div class="mt-8">
          <button
            @click="openFileDialog"
            class="px-4 py-2 font-semibold text-white text-sm bg-primary-orange rounded hover:bg-orange-600 uppercase"
          >
            Upload Photos
          </button>

          <!-- Hidden file input -->
          <input
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            accept="image/*"
            class="hidden"
          />
        </div>
      </div>
      <div
        class="relative md:w-1/2 hover:cursor-pointer"
        @click="openImageDialog"
      >
        <input
          type="file"
          ref="imageInput"
          @change="handleImageChange"
          accept="image/*"
          class="hidden"
        />
        <img
          src="../../assets/golden-frame.png"
          alt="Decorative Frame"
          class="w-[600px]"
        />
        <div
          class="absolute top-0 md:-left-10 w-full h-full flex flex-col items-center justify-center"
        >
          <p class="text-center text-black text-xl">
            Drag and drop your photographs here
          </p>
          <p class="text-center text-black text-sm">
            Please use jpeg/jpg formats.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["updateImageFile"]),

    openFileDialog() {
      this.$refs.fileInput.click();
    },
    openImageDialog() {
      this.$refs.imageInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const fileExtension = file.name.split(".").pop().toLowerCase();
        if (fileExtension === "jpeg" || fileExtension === "jpg") {
          this.updateImageFile(file); // Use Vuex action
          this.$router.push("/frame");
        } else {
          toast.error("Please upload a file in JPEG or JPG format.");
        }
      }
    },
    // handleImageChange(event) {
    //   const image = event.target.files[0];
    //   if (image) {
    //     const fileExtension = image.name.split(".").pop().toLowerCase();
    //     if (fileExtension === "jpeg" || fileExtension === "jpg") {
    //       this.$router.push("/frame");
    //     } else {
    //       toast.error("Please upload a file in JPEG or JPG format.");
    //     }
    //   }
    // },
    handleImageChange(event) {
      const image = event.target.files[0];
      if (image) {
        const fileExtension = image.name.split(".").pop().toLowerCase();
        if (fileExtension === "jpeg" || fileExtension === "jpg") {
          this.updateImageFile(image); // Use Vuex action
          this.$router.push("/frame");
        } else {
          this.$toast.error("Please upload a file in JPEG or JPG format.");
        }
      }
    },
  },
};
</script>
