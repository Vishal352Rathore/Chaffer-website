export const nextStage1 = (data) => {
  return {
    type: "NEXT_STAGE_1",
    payload: data,
  };
};

export const previousStage1 = (data) => {
  return {
    type: "PREVIOUS_STAGE_1",
    payload: data,
  };
};


export const intialStage1 = (data) => {
  return {
    type: "INITIAL_STAGE_1",
    payload: data,
  };
};

export const nextStage2 = (data) => {
  return {
    type: "NEXT_STAGE_2",
    payload: data,
  };
};

export const previousStage2 = (data) => {
  return {
    type: "PREVIOUS_STAGE_2",
    payload: data,
  };
};


export const intialStage2 = (data) => {
  return {
    type: "INITIAL_STAGE_2",
    payload: data,
  };
};

export const updateBookingData1 = (data) => {
  return { 
    type: "UPDATE_USER_DATA_1", 
    payload: data 
  };
};

export const updateBookingData2 = (data) => {
  return { 
    type: "UPDATE_USER_DATA_2", 
    payload: data 
  };
};

export const intialBookingData1 = () => {
  return { 
    type: "INTIAL_USER_DATA_1"  
  };
};

export const intialBookingData2 = () => {
  return { 
    type: "INTIAL_USER_DATA_2"
    };
};



export const updatePaymentData1 = (data) => {
  return {
     type: "UPDATE_PAYMENT_DATA_1",
     payload: data 
    };
};

export const updatePaymentData2 = (data) => {
  return {
     type: "UPDATE_PAYMENT_DATA_2",
     payload: data 
    };
};

export const intialPaymentData1 = () => {
  return {
     type: "INTIAL_PAYMENT_DATA_1",
    };
};

export const intialPaymentData2 = () => {
  return {
     type: "INTIAL_PAYMENT_DATA_2",
    };
};