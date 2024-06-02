<template>
  <div class="bg-sky-50 pb-8">
    <!-- Header -->
    <div class="flex justify-between bg-sky-50">
      <img
        src="../../assets/logo.png"
        alt=""
        class="bg-white md:mx-40 mx-4 h-36 w-32 shadow-2xl"
      />

      <div class="hidden md:flex flex-col">
        <div class="flex space-x-1 items-center pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            viewBox="0 0 401.998 401.998"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class="h-4 w-4"
          >
            <g>
              <path
                d="M401.129 311.475c-1.137-3.426-8.371-8.473-21.697-15.129-3.61-2.098-8.754-4.949-15.41-8.566a1437.412 1437.412 0 0 1-18.13-9.996 605.612 605.612 0 0 1-15.276-8.846c-.76-.571-3.139-2.234-7.136-5-4.001-2.758-7.375-4.805-10.14-6.14-2.759-1.327-5.473-1.995-8.138-1.995-3.806 0-8.56 2.714-14.268 8.135a139.01 139.01 0 0 0-15.7 17.706c-4.757 6.379-9.802 12.275-15.126 17.7-5.332 5.427-9.713 8.138-13.135 8.138-1.718 0-3.86-.479-6.427-1.424-2.566-.951-4.518-1.766-5.858-2.423-1.328-.671-3.607-1.999-6.845-4.004-3.244-1.999-5.048-3.094-5.428-3.285-26.075-14.469-48.438-31.029-67.093-49.676-18.649-18.658-35.211-41.019-49.676-67.097-.19-.381-1.287-2.19-3.284-5.424-2-3.237-3.333-5.518-3.999-6.854-.666-1.331-1.475-3.283-2.425-5.852s-1.427-4.709-1.427-6.424c0-3.424 2.713-7.804 8.138-13.134 5.424-5.327 11.326-10.373 17.7-15.128a138.95 138.95 0 0 0 17.701-15.699c5.424-5.711 8.136-10.467 8.136-14.273 0-2.663-.666-5.378-1.997-8.137-1.332-2.765-3.378-6.139-6.139-10.138-2.762-3.997-4.427-6.374-4.999-7.139a627.13 627.13 0 0 1-8.848-15.271 1441.4 1441.4 0 0 1-9.995-18.131c-3.615-6.658-6.468-11.799-8.564-15.415C98.986 9.233 93.943 1.997 90.516.859 89.183.288 87.183 0 84.521 0c-5.142 0-11.85.95-20.129 2.856-8.282 1.903-14.799 3.899-19.558 5.996-9.517 3.995-19.604 15.605-30.264 34.826C4.863 61.566.01 79.271.01 96.78c0 5.135.333 10.131.999 14.989.666 4.853 1.856 10.326 3.571 16.418 1.712 6.09 3.093 10.614 4.137 13.56 1.045 2.948 2.996 8.229 5.852 15.845 2.852 7.614 4.567 12.275 5.138 13.988 6.661 18.654 14.56 35.307 23.695 49.964 15.03 24.362 35.541 49.539 61.521 75.521 25.981 25.98 51.153 46.49 75.517 61.526 14.655 9.134 31.314 17.032 49.965 23.698 1.714.568 6.375 2.279 13.986 5.141 7.614 2.854 12.897 4.805 15.845 5.852 2.949 1.048 7.474 2.43 13.559 4.145 6.098 1.715 11.566 2.905 16.419 3.576 4.856.657 9.853.996 14.989.996 17.508 0 35.214-4.856 53.105-14.562 19.219-10.656 30.826-20.745 34.823-30.269 2.102-4.754 4.093-11.273 5.996-19.555 1.909-8.278 2.857-14.985 2.857-20.126.006-2.673-.281-4.668-.855-6.012z"
                fill="#000000"
                opacity="1"
                data-original="#000000"
              ></path>
            </g>
          </svg>
          <p class="text-gray-800 text-lg pr-48">(+977) 9803896379</p>
        </div>
      </div>
    </div>

    <div
      class="-mt-12 flex flex-col items-center justify-center mx-80 text-center"
    >
      <p class="text-3xl">Step 2 - Quantity, Size & Frames</p>
      <p class="text-sm text-gray-500 pt-2">
        Please select the desired quantity, photo size and the desired frame.
        Jhalko.com will automatically suggest appropriate size and available
        frames based on your photograph's dimension.
      </p>
    </div>

    <div
      class="mt-16 bg-white rounded-sm border border-gray-300 mx-40 flex pb-8"
    >
      <div class="w-1/2 py-10">
        <img
          v-if="imageUrl"
          :src="imageUrl"
          alt="Uploaded Image Preview"
          class="h-[230px] w-[450px] pl-32"
        />

        <p class="text-center text-gray-500 px-8 pt-8 text-sm">
          Using Jhalko.com's AI, the tags found in this image are Clothing,
          Jeans, Trousers, Vision care, Smile, Human, Eyewear, Fashion,
          Sunglasses and Leisure. In this image we found four faces.
        </p>
      </div>

      <div class="w-1/2">
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
            <div class="pl-4 flex space-x-4 pt-4">
              <div
                v-for="(price, size) in sizes"
                :key="size"
                @click="selectSize(size)"
                :class="sizeBoxClass(size)"
                class="cursor-pointer p-2 border rounded text-center w-20 text-xl"
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
                <p class="text-xl">Price: ${{ totalPrice }}</p>
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
                <span>{{ quantity }}</span>
                <button
                  @click="incrementQuantity"
                  class="bg-gray-200 px-4 py-2 rounded"
                >
                  +
                </button>
              </div>
              <div class="pl-4 pt-4">
                <p class="text-xl">Price: ${{ totalPrice }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between pt-8 mx-40">
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
import { required } from "@vuelidate/validators";
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
      this.selectedSize = size;
      this.activeTab = "frame"; // Switch to the frame tab
    },
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    confirmOrder () {
        this.$router.push("/order")
    }
  },
  computed: {
    ...mapGetters(["getImageFile"]),

    imageUrl() {
      return this.getImageFile ? URL.createObjectURL(this.getImageFile) : null;
    },
    totalPrice() {
      return this.sizes[this.selectedSize] * this.quantity;
    },
  },
  unmounted() {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl); // Clean up
    }
  },
};
</script>
