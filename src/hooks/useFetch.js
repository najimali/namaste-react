import { useEffect, useReducer } from "react";
import { API_ACTIONS } from "../utils/constant";
import axios from "axios";

const initialState = {
  data: null,
  loading: true,
  error: null,
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case API_ACTIONS.FETCH_DATA:
      return { ...state, loading: true };
    case API_ACTIONS.SET_DATA:
      return { ...state, data: payload, loading: false };
    case API_ACTIONS.SET_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      state;
  }
};
const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const cancelSource = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        dispatch({ type: API_ACTIONS.FETCH_DATA });
        const response = await axios.get(url, {
          cancelToken: cancelSource.token,
        });
        dispatch({ type: API_ACTIONS.SET_DATA, payload: response?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants });
      } catch (error) {
        if (!axios.isCancel(error)) {
          dispatch({ type: API_ACTIONS.SET_ERROR, payload: error });
        }
      }
    };

    fetchData();
    return () => {
      cancelSource.cancel("Operation cancelled by the user");
    };
  }, [url]);
  return state;
};

export default useFetch;
