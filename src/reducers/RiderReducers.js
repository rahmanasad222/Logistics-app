import { riderConstants } from "../constants/RiderConstants";

const initialState = {
  riders: [],
};
export const riderData = (state = initialState, { type, payload }) => {
  switch (type) {
    case riderConstants.RIDER_DATA:
      return { ...state, riders: payload };
    default:
      return state;
  }
};

const initialData = {
  data: {},
};
export const riderChatData = (state = initialData, { type, payload }) => {
  switch (type) {
    case riderConstants.RIDER_CHAT_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
};

const initialMessage = {
  messages: [],
};

export const riderMessages = (state = initialMessage, { type, payload }) => {
  switch (type) {
    case riderConstants.RIDER_MESSAGES:
      return { ...state, ...{ messages: payload } };
    default:
      return state;
  }
};
