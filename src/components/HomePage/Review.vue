<template>
  <div class="bg-sky-50">
    <div class="md:mx-40 pt-16 pb-16">
      <img
        src="../../assets/quote.svg"
        alt=""
        class="h-16 w-16 p-3 bg-orange-200 rounded-lg ml-8"
      />
      <p class="text-4xl font-bold w-1/3 pt-4 pl-8">
        Loved by 1000+ customers.
      </p>

      <!-- Swiper -->

      <div class="flex space-x-2 justify-end mr-4">
        <button @click="nextSlide" class="bg-primary-orange rounded-md p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            viewBox="0 0 492.004 492.004"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class="h-4 w-4"
          >
            <g
              transform="matrix(-1,-1.2246467991473532e-16,1.2246467991473532e-16,-1,492.0040893554687,492.00401306152355)"
            >
              <path
                d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                fill="#ffffff"
                opacity="1"
                data-original="#000000"
                class=""
              ></path>
            </g>
          </svg>
        </button>
        <button @click="prevSlide" class="bg-primary-orange rounded-md p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            viewBox="0 0 492.004 492.004"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class="h-4 w-4"
          >
            <g>
              <path
                d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                fill="#ffffff"
                opacity="1"
                data-original="#000000"
                class=""
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <div class="review-slider relative overflow-hidden pt-8">
        <div
          class="slides flex transition-transform duration-[1800ms]"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(chunk, index) in reviewChunks"
            :key="index"
            class="slide min-w-full flex md:flex-row flex-col justify-around"
          >
            <div
              v-for="review in chunk"
              :key="review.id"
              class="review-card px-8 pt-8 pb-4 border rounded-lg mx-2 md:w-1/3 md:mb-0 mb-4"
            >
              <div class="flex">
                <svg
                  v-for="star in 5"
                  :key="star"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-5 h-5"
                  :class="
                    star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                  "
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0L12.8 5.964a1 1 0 0 0 .752.676l3.675.534c.96.14 1.342 1.317.648 1.993l-2.66 2.593a1 1 0 0 0-.288.885l.628 3.661c.17.993-.871 1.75-1.756 1.28L12 16.347a1 1 0 0 0-.93 0l-3.283 1.725c-.885.47-1.926-.287-1.756-1.28l.628-3.661a1 1 0 0 0-.288-.885l-2.66-2.593c-.694-.676-.312-1.853.648-1.993l3.675-.534a1 1 0 0 0 .752-.676l1.849-3.037z"
                  />
                </svg>
              </div>
              <p class="pt-4">{{ review.text }}</p>

              <div class="mt-8 flex space-x-2 items-center">
                <img :src="review.image" alt="" class="rounded-full" />
                <span class="font-bold">{{ review.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,

      reviews: [
        {
          id: 1,
          text: "Thanks jhalko for making my memory more memorable with perfect  quality.",
          name: "John Doe",
          image: "https://via.placeholder.com/50",
          rating: 5,
        },
        {
          id: 2,
          text: "Great Service with premium products. Thank you jhalko.com",
          name: "Jane Smith",
          image: "https://via.placeholder.com/50",
          rating: 4,
        },
        {
          id: 3,
          text: "The best thing about jhalko is the delivery time!!! Thanks for the Prints!!!",
          name: "Bob Johnson",
          image: "https://via.placeholder.com/50",
          rating: 4,
        },
        {
          id: 4,
          text: "Great Service with premium products. Thank you jhalko.com",
          name: "Alice Brown",
          image: "https://via.placeholder.com/50",
          rating: 5,
        },
        {
          id: 5,
          text: "The best thing about jhalko is the delivery time!!! Thanks for the Prints!!!",
          name: "Charlie Davis",
          image: "https://via.placeholder.com/50",
          rating: 5,
        },
        {
          id: 6,
          text: "Thanks jhalko for making my memory more memorable with perfect quality.",
          name: "Dana Wilson",
          image: "https://via.placeholder.com/50",
          rating: 4,
        },
        // Add more reviews as needed
      ],
    };
  },
  computed: {
    reviewChunks() {
      const chunkSize = 3;
      const chunks = [];
      for (let i = 0; i < this.reviews.length; i += chunkSize) {
        chunks.push(this.reviews.slice(i, i + chunkSize));
      }
      return chunks;
    },
    totalSlides() {
      return this.reviewChunks.length;
    },
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    },
  },
};
</script>

<style>
.review-slider {
  max-width: 1200px;
  margin: auto;
}
.review-card {
  background-color: #ffffff;
}
</style>
