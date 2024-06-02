<template>
  <div class="bg-sky-50">
    <div
      class="md:-mt-12 pt-2 flex flex-col items-center justify-center md:mx-80 mx-16 text-center"
    >
      <p class="text-3xl">Step 3 - Confirm Order</p>
      <p class="text-sm text-gray-500 pt-2">
        We will need the below information to deliver orders at your desired
        address. All information provided by you is kept private.
      </p>
    </div>

    <div class="flex md:flex-row flex-col md:space-x-12 md:mx-40 mx-8 mt-10">
      <div class="md:w-2/3">
        <div class="w-full">
          <form
            @submit.prevent="handleSubmit"
            class="bg-pink-50 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 border border-pink-200"
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
      <div class="md:w-1/3 md:mt-0 mt-8 md:mb-0 mb-5">
        <div class="flex items-center justify-between">
          <p class="uppercase text-xl">Order Summary</p>
          <button
            @click="goToEditFrame"
            class="py-2 px-4 bg-primary-orange rounded-md text-gray-50"
          >
            Edit Order
          </button>
        </div>

        <hr class="my-4" />

        <div class="flex justify-between">
          <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="Uploaded Image Preview"
            class="h-[60px] w-[80px]"
          />

          <p class="text-gray-500">NPR. {{ totalPrice }}</p>
        </div>

        <hr class="my-4" />

        <div class="flex justify-between">
          <p class="text-gray-500">Subtotal:</p>

          <p class="text-gray-500">NPR. {{ totalPrice }}</p>
        </div>

        <div class="flex justify-between pt-2">
          <p class="text-gray-500">Shipping:</p>

          <p class="text-gray-500">NPR. {{ shippingCharge }}</p>
        </div>

        <hr class="my-4" />

        <div class="flex justify-between">
          <p class="text-gray-500 text-lg">Total:</p>

          <p class="text-gray-500 text-lg">NPR. {{ grandTotalPrice }}</p>
        </div>

        <p class="pt-4 text-gray-500 text-sm">
          For deliveries outside the RingRoad or out of Kathmandu valley our
          representative will call you for the charges.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      shippingCharge: 100,

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
        toast.success("Form submitted");
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
    goToEditFrame() {
      this.$router.push("/frame");
    },
  },
  computed: {
    ...mapGetters(["getImageFile", "totalPrice"]),

    imageUrl() {
      return this.getImageFile ? URL.createObjectURL(this.getImageFile) : null;
    },

    grandTotalPrice() {
      return this.totalPrice + this.shippingCharge;
    },
  },
  mounted() {
    console.log("Total Price:", this.totalPrice);
  },

  unmounted() {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl); // Clean up
    }
  },
};
</script>
