const initialState = {
  userDetail1: {
    bookingFor: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    flight_no: "",
    chauffer_notes: "",
    cost_center: ""
  },
  userDetail2: {
    bookingFor: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    flight_no: "",
    chauffer_notes: "",
    cost_center: ""
  }
};

const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_DATA_1":
      return {
        ...state, userDetail1 : action.payload
      };
      case "INTIAL_USER_DATA_1":
      return {
        ...state, userDetail1 : initialState.userDetail1
      };
    case "UPDATE_USER_DATA_2":
      return {
        ...state, userDetail2 : action.payload
      };
      case "INTIAL_USER_DATA_2":
        return {
          ...state, userDetail2 : initialState.userDetail2
        };
    default:
      return state;
  }
};

export default userDetailReducer;


// const initialState = {
//     bookingFor : "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobileNumber: "",
//     flight_no :"",
//     chauffer_notes :"",
//     cost_center:""
//   }
  
//   const userDetailReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "UPDATE_BOOKING_DATA":
//             return {
//               ...state,
//               ...action.payload
//             };
//       default:
//         return state;
//     }
//   };
  
//   export default userDetailReducer;
  