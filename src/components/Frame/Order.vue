<template>
  <div class="bg-sky-50">
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
      <p class="text-3xl">Step 3 - Confirm Order</p>
      <p class="text-sm text-gray-500 pt-2">
        We will need the below information to deliver orders at your desired
        address. All information provided by you is kept private.
      </p>
    </div>

    <div class="flex space-x-4 mx-40">
      <div class="w-2/3">
        <div class="w-full mt-10">
          <form
            @submit.prevent="handleSubmit"
            class="bg-pink-50 shadow-xl rounded px-8 pt-6 pb-8 mb-4 border border-pink-200"
          >
            <!-- Full Name Field -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="fullName"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                v-model="form.fullName"
                @input="clearValidationErrors('fullName')"
                :class="{ 'border-red-500': errors.fullName }"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <p v-if="errors.fullName" class="text-red-500 text-xs italic">
                {{ errors.fullName }}
              </p>
            </div>

            <!-- Address Field with Select and Input -->

            <label for="address">Shipping Address *</label>
            <div class="mb-4 flex mt-2">
              <select
                v-model="form.addressType"
                class="block appearance-none w-1/3 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option disabled value="">Select</option>
                <option>Inside Ringroad</option>
                <option>Outside Ringroad</option>
              </select>
              <input
                type="text"
                v-model="form.address"
                placeholder="Enter your address"
                class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                required
              />
            </div>

            <!-- Mobile Number Field -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="mobileNumber"
              >
                Mobile Number *
              </label>
              <input
                type="number"
                id="mobileNumber"
                v-model="form.mobileNumber"
                @input="clearValidationErrors('mobileNumber')"
                :class="{ 'border-red-500': errors.mobileNumber }"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <p v-if="errors.mobileNumber" class="text-red-500 text-xs italic">
                {{ errors.mobileNumber }}
              </p>
            </div>

            <!-- Special Instructions Field -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="specialInstructions"
              >
                Special Instructions
              </label>
              <textarea
                id="specialInstructions"
                v-model="form.specialInstructions"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            <!-- Checkbox Field -->

            <p class="mb-2 text-md font-semibold text-gray-700">
              Mode of Payment
            </p>
            <div class="mb-2">
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  v-model="form.cod"
                  checked
                  class="form-checkbox h-5 w-5 text-gray-600"
                /><span class="ml-2 text-gray-700">Cash on Delivery</span>
              </label>
            </div>

            <p class="text-gray-500 text-md mb-4">
              By placing an order, I agree to
              <span class="text-primary-orange hover:cursor-pointer"
                >Terms and Conditions</span
              >
            </p>

            <!-- Submit Button -->
            <div class="mb-4">
              <button
                type="submit"
                class="bg-primary-orange w-full hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Confirm and Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="w-1/3">
        <!-- <img
          v-if="imageUrl"
          :src="imageUrl"
          alt="Uploaded Image Preview"
          class="h-[230px] w-[450px]"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        fullName: "",
        addressType: "",
        address: "",
        mobileNumber: "",
        specialInstructions: "",
        cod: false,
      },
      errors: {
        fullName: "",
        mobileNumber: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) {
        // Submit the form
        console.log("Form data:", this.form);
        alert("Form submitted");
      }
    },
    validateForm() {
      this.errors = {}; // Reset errors before validation
      let valid = true;
      if (!this.form.fullName) {
        this.errors.fullName = "Full Name is required";
        valid = false;
      }
      if (!this.form.mobileNumber) {
        this.errors.mobileNumber = "Mobile Number is required";
        valid = false;
      }
      return valid;
    },
    clearValidationErrors(field) {
      this.errors[field] = "";
    },
  },
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

<style scoped>
/* Tailwind CSS is directly usable here, no extra styles needed for this example */
</style>
