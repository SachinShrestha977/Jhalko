<template>
  <div class="bg-sky-50 pb-8">
    <div
      class="md:-mt-12 pt-2 flex flex-col items-center justify-center md:mx-80 mx-12 text-center"
    >
      <p class="text-3xl">Step 2 - Quantity, Size & Frames</p>
      <p class="text-sm text-gray-500 pt-2">
        Please select the desired quantity, photo size and the desired frame.
        Jhalko.com will automatically suggest appropriate size and available
        frames based on your photograph's dimension.
      </p>
    </div>

    <div
      class="mt-16 bg-white rounded-sm border border-gray-300 md:mx-40 flex md:flex-row flex-col pb-8"
    >
      <div class="md:w-1/2 py-10 relative">
        <img
          src="../../assets/golden-frame.png"
          alt="Frame"
          class="h-[250px] md:w-[500px] w-[435px] md:pl-28 px-12"
        />
        <img
          v-if="imageUrl"
          :src="imageUrl"
          alt="Uploaded Image Preview"
          class="absolute top-[74px] left-[80px] md:left-[24%] h-[180px] md:w-[272px] w-[266px]"
        />

        <p class="text-center text-gray-500 px-8 pt-8 text-sm">
          Using Jhalko.com's AI, the tags found in this image are Clothing,
          Jeans, Trousers, Vision care, Smile, Human, Eyewear, Fashion,
          Sunglasses and Leisure. In this image we found four faces.
        </p>
      </div>

      <div class="md:w-1/2">
        <div class="flex w-full pt-10 px-4">
          <button @click="activeTab = 'size'" :class="buttonClass('size')">
            Size
          </button>
          <button @click="activeTab = 'frame'" :class="buttonClass('frame')">
            Frame
          </button>
        </div>
        <div class="mt-4">
          <div v-if="activeTab === 'size'">
            <!-- Content for Size -->
            <p class="text-gray-500 text-xl pl-4 pt-4">
              Select a photo size...
            </p>
            <div class="pl-4 flex flex-wrap gap-y-4 space-x-4 pt-4">
              <div
                v-for="(price, size) in sizes"
                :key="size"
                @click="selectSize(size)"
                :class="sizeBoxClass(size)"
                class="cursor-pointer p-2 border rounded text-center w-24 text-xl hover:border-primary-orange"
              >
                {{ size }}
              </div>
            </div>

            <div class="flex items-center justify-between px-4 pt-16">
              <div class="flex items-center space-x-4 pl-4 pt-4">
                <button
                  @click="decrementQuantity"
                  class="bg-gray-200 px-4 py-2 rounded"
                >
                  -
                </button>
                <span>{{ quantity }}</span>
                <button
                  @click="incrementQuantity"
                  class="bg-gray-200 px-4 py-2 rounded"
                >
                  +
                </button>
              </div>
              <div class="pl-4 pt-4">
                <p class="text-xl">Price: NPR. {{ totalPrice }}</p>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'frame'">
            <div class="flex items-center justify-between px-4">
              <p class="text-gray-500 text-xl pl-4 pt-4">
                ...and pick a frame.
              </p>
              <div>
                <select
                  id="options"
                  v-model="selectedOption"
                  class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="" disabled>Select an option</option>
                  <option
                    v-for="option in options"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>

            <div class="p-4">
              <div class="flex flex-wrap -m-2">
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="w-1/3 p-2 relative group"
                >
                  <img
                    :src="image.img"
                    alt="Image"
                    class="w-full h-auto rounded-lg border-2 border-gray-300 p-2 hover:border-primary-orange"
                    @click="selectImage(index)"
                    :class="[
                      'w-full h-auto rounded-lg p-2',
                      selectedImage === index
                        ? 'border-2 border-primary-orange'
                        : 'border-2 border-gray-300 hover:border-primary-orange',
                    ]"
                  />

                  <div
                    class="absolute top-0 left-0 w-full text-center p-1 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <p class="text-sm">{{ image.info }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between px-4 pt-16">
              <div class="flex items-center space-x-4 pl-4 pt-4">
                <button
                  @click="decrementQuantity"
                  class="bg-gray-200 px-4 py-2 rounded"
                >
                  -
                </button>
                <span>{{ totalQuantity }}</span>
                <button
                  @click="incrementQuantity"
                  class="bg-gray-200 px-4 py-2 rounded"
                >
                  +
                </button>
              </div>
              <div class="pl-4 pt-4">
                <p class="text-xl">Price: NPR. {{ totalPrice }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between pt-8 md:mx-40 mx-4">
      <button
        class="bg-primary-orange p-2 rounded-md text-gray-50 flex items-center hover:bg-orange-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0"
          y="0"
          viewBox="0 0 349.03 349.031"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="h-3 w-3"
        >
          <g>
            <path
              d="M349.03 141.226v66.579a9.078 9.078 0 0 1-9.079 9.079H216.884v123.067a9.077 9.077 0 0 1-9.079 9.079h-66.579c-5.009 0-9.079-4.061-9.079-9.079V216.884H9.079A9.08 9.08 0 0 1 0 207.805v-66.579a9.079 9.079 0 0 1 9.079-9.079h123.068V9.079c0-5.018 4.069-9.079 9.079-9.079h66.579a9.078 9.078 0 0 1 9.079 9.079v123.068h123.067a9.077 9.077 0 0 1 9.079 9.079z"
              fill="#ffffff"
              opacity="1"
              data-original="#000000"
              class=""
            ></path>
          </g>
        </svg>
        <span class="ml-1"> Add More </span>
      </button>
      <button
        @click="confirmOrder"
        class="bg-primary-orange p-2 rounded-md text-gray-50 flex items-center hover:bg-orange-400"
      >
        Next Step: Confirm Order
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0"
          y="0"
          viewBox="0 0 492 492"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="w-4 h-4 ml-1"
        >
          <g transform="matrix(-1,0,0,1,491.99989318847656,0)">
            <path
              d="M198.608 246.104 382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"
              fill="#ffffff"
              opacity="1"
              data-original="#000000"
              class=""
            ></path>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import frame1 from "../../assets/frame1.png";
import frame from "../../assets/frame.png";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";
import frame5 from "../../assets/frame5.png";
import frame6 from "../../assets/frame6.png";
import frame7 from "../../assets/frame7.png";
import frame8 from "../../assets/frame8.png";
import frame9 from "../../assets/frame9.png";
import frame10 from "../../assets/frame10.png";
import frame11 from "../../assets/frame11.png";
import frame12 from "../../assets/frame12.png";

export default {
  data() {
    return {
      activeTab: "size", // Default active tab
      sizes: {
        "8x10": 100,
        "8x12": 200,
        "10x12": 300,
        "10x15": 400,
        "12x15": 500,
        "12x18": 600,
      },
      selectedSize: "8x10", // Default selected size
      quantity: 1,
      selectedImage: null,

      selectedOption: "",
      options: ["Fiber Frames", "Wooden Frames", "Box and Mount"],
      images: [
        {
          img: frame1,
          info: "Frame #110 - NRS 20.00/in",
        },
        {
          img: frame,
          info: "Frame #111 - NRS 24.00/in",
        },

        {
          img: frame3,
          info: "Frame #112 - NRS 28.00/in",
        },
        {
          img: frame4,
          info: "Frame #113 - NRS 32.00/in",
        },
        {
          img: frame5,
          info: "Frame #114 - NRS 36.00/in",
        },
        {
          img: frame6,
          info: "Frame #115 - NRS 40.00/in",
        },
        {
          img: frame7,
          info: "Frame #116 - NRS 35.00/in",
        },
        {
          img: frame8,
          info: "Frame #117 - NRS 19.00/in",
        },
        {
          img: frame9,
          info: "Frame #118 - NRS 21.00/in",
        },
        {
          img: frame10,
          info: "Frame #119 - NRS 25.00/in",
        },
        {
          img: frame11,
          info: "Frame #120 - NRS 27.00/in",
        },
        {
          img: frame12,
          info: "Frame #121 - NRS 24.00/in",
        },
      ],
    };
  },

  methods: {
    selectImage(index) {
      this.selectedImage = index;
    },
    buttonClass(tab) {
      return this.activeTab === tab
        ? "bg-primary-orange w-full text-white px-4 py-2 rounded"
        : "bg-gray-200 w-full text-gray-700 px-4 py-2 rounded";
    },
    sizeBoxClass(size) {
      return this.selectedSize === size
        ? "border-2 border-primary-orange"
        : "border-2 border-gray-300";
    },

    selectSize(size) {
      this.$store.dispatch("updateSelectedSize", size);
      this.activeTab = "frame"; // Switch to the frame tab
    },
    incrementQuantity() {
      const newQuantity = this.$store.state.quantity + 1;
      this.$store.dispatch("updateQuantity", newQuantity);
    },
    decrementQuantity() {
      if (this.$store.state.quantity > 1) {
        const newQuantity = this.$store.state.quantity - 1;
        this.$store.dispatch("updateQuantity", newQuantity);
      }
    },
    confirmOrder() {
      this.$router.push("/order");
    },
  },
  computed: {
    ...mapGetters(["getImageFile", "totalPrice", "totalQuantity"]),

    imageUrl() {
      return this.getImageFile ? URL.createObjectURL(this.getImageFile) : null;
    },
  },
  unmounted() {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
    }
  },
};
</script>
