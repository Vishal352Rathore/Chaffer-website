const initialState = {
  paymentDetail1: {
    nameofcard: "",
    cardnumber: "",
    expirationdate: "",
    cvv: "",
  },
  paymentDetail2: {
    nameofcard: "",
    cardnumber: "",
    expirationdate: "",
    cvv: "",
  }
};

const paymentDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PAYMENT_DATA_1":
      return {
        ...state, paymentDetail1 : action.payload
      };
      case "INTIAL_PAYMENT_DATA_1":
        return {
          ...state, paymentDetail1 : initialState.paymentDetail1
        };
    case "UPDATE_PAYMENT_DATA_2":
      return {
        ...state, paymentDetail2 : action.payload
      };
      case "INTIAL_PAYMENT_DATA_2":
        return {
          ...state, paymentDetail2 :  initialState.paymentDetail2
        };
    default:
      return state;
  }
};

export default paymentDetailReducer;

// const initialState = {
//     nameofcard: "",
//     cardnumber: "",
//     expirationdate: "",
//     cvv: "",
//   }
  
//   const paymentDetailReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "UPDATE_PAYMENT_DATA":
//             return {
//               ...state,
//               ...action.payload
//             };
//       default:
//         return state;
//     }
//   };
  
//   export default paymentDetailReducer;
  