const initialState = {
  bookingStage1: 1,
  bookingStage2: 1
};

const bookingStageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_STAGE_1":
      return {
        ...state,
        bookingStage1: state.bookingStage1 + 1
      };
    case "PREVIOUS_STAGE_1":
      return {
        ...state,
        bookingStage1: state.bookingStage1 - 1
      };
    case "INITIAL_STAGE_1":
      return {
        ...state,
        bookingStage1: 1
      };
      case "UPDATE_STAGE_1":
        return {
          ...state,
          bookingStage1: action.payload
        };
    case "NEXT_STAGE_2":
      return {
        ...state,
        bookingStage2: state.bookingStage2 + 1
      };
    case "PREVIOUS_STAGE_2":
      return {
        ...state,
        bookingStage2: state.bookingStage2 - 1
      };
    case "INITIAL_STAGE_2":
      return {
        ...state,
        bookingStage2: 1
      };
    default:
      return state;
  }
};

export default bookingStageReducer;


// const initialState = 1;

// const bookingStageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEXT_STAGE":
//       return (state = state + 1);
//     case "PREVIOUS_STAGE":
//       return (state = state - 1);
//     case "INITIAL_STAGE":
//       return (state = 0);
//     default:
//       return state;
//   }
// };

// export default bookingStageReducer;
