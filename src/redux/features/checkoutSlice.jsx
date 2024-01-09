import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    formInput: {
      name: "",
      email: "",
      phone: "",
      address: { place: "", zip: "", city: "", country: "" },
      paymentMethod: "emoney",
      Enumber: "",
      Epin: "",
    },
    validationErrors: {},
    purchaseComplete: false,
  },
  reducers: {
    updateForm: (state, action) => {
      const { name, value } = action.payload;
      state.formInput[name] = value;
    },
    updateAddress: (state, action) => {
      const { name, value } = action.payload;
      state.formInput.address[name] = value;
    },
    updateMethod: (state, action) => {
      const { value } = action.payload;
      state.formInput.paymentMethod = value;
    },
    formValidation: (state) => {
      const errors = {};

      // Validate name
      if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(state.formInput.name.trim())) {
        errors.name = "Name must have first name and last name like 'John Doe'";
      }

      // Validate email
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.formInput.email.trim())) {
        errors.email = "Invalid email format";
      }

      // Validate phone number
      if (!/^\d{1,11}$/.test(state.formInput.phone.trim())) {
        errors.phone = "Phone number must be up to 11 digits";
      }

      // Validate address
      if (
        !/^\d+\s[a-zA-Z]+\s[a-zA-Z\s]+$/.test(state.formInput.address.place)
      ) {
        errors.address = "Invalid address format";
      }

      // Validate zip code
      if (!/^\d{1,4}$/.test(state.formInput.address.zip.trim())) {
        errors.zip = "Zip code must be up to 4 digits";
      }

      // Validate eNumber and ePin for emoney payment method
      if (state.formInput.paymentMethod === "emoney") {
        // Validate eNumber
        if (!/^\d{1,11}$/.test(state.formInput.Enumber.trim())) {
          errors.Enumber = "eNumber must be 11 digits";
        }

        // Validate ePin
        if (!/^\d{4}$/.test(state.formInput.Epin.trim())) {
          errors.Epin = "ePin must be 4 digits";
        }
      }
      // Check if there are no validation errors
      if (Object.keys(errors).length === 0) {
        state.purchaseComplete = true;
        document.querySelectorAll(".invalid-input").forEach((element) => {
          element.style.display = "none";
        });
      } else {
        state.purchaseComplete = false;
        document.querySelectorAll(".invalid-input").forEach((element) => {
          element.style.display = "block";
        });
      }

      state.validationErrors = errors;
    },
    closeModel: (state) => {
      state.purchaseComplete = false;
    },
    confirmOrder: (state) => {
      state.formInput = {
        name: "",
        email: "",
        phone: "",
        address: { place: "", zip: "", city: "", country: "" },
        paymentMethod: "emoney",
        Enumber: "",
        Epin: "",
      };
      localStorage.clear("cart");
      state.purchaseComplete = false;
      alert("Thank You for the Purchase");
    },
  },
});

export const {
  updateForm,
  updateAddress,
  updateMethod,
  formValidation,
  closeModel,
  confirmOrder,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
