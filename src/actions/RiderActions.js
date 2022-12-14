import { riderConstants } from "../constants/RiderConstants";

export const fetchRiders = (pageNo) => async (dispatch) => {
  const url = `${process.env.REACT_APP_BASE_URL}/alerts_rider?page=` + pageNo;
  const response = await fetch(url, {
    method: "GET",
    headers: window.h,
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: riderConstants.FETCH_RIDERS,
        payload: data.results,
      });
    });
};
export const fetchRider = (Id, pageNo) => async (dispatch) => {
  const url =
    `${process.env.REACT_APP_BASE_URL}/rider/rider_alerts?rider=` +
    Id +
    "&page=" +
    pageNo +
    "&";
  const response = await fetch(url, {
    method: "GET",
    headers: window.h,
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: riderConstants.FETCH_RIDER,
        payload: data.data.alerts,
      });
    });
};

export const riderChatData = (data) => {
  return {
    type: riderConstants.RIDER_CHAT_DATA,
    payload: data,
  };
};

export const fetchToken = (state) => async (dispatch) => {
  const url = `${process.env.REACT_APP_BASE_URL}/login`;
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(state),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: riderConstants.USER_TOKEN,
        payload: data.token,
      });
    });
};
