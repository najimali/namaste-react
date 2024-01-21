import { useEffect, useReducer } from "react";
import { apiActions } from "../utils/constant";
import axios from "axios";

const initialState = {
  data: null,
  loading: true,
  error: null,
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case apiActions.FETCH_DATA:
      return { ...state, loading: true };
    case apiActions.SET_DATA:
      return { ...state, data: payload, loading: false };
    case apiActions.SET_ERROR:
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
        dispatch({ type: apiActions.FETCH_DATA });
        const response = await axios.get(url, {
          cancelToken: cancelSource.token,
        });
        dispatch({ type: apiActions.SET_DATA, payload: response?.data?.data });
      } catch (error) {
        if (!axios.isCancel(error)) {
          dispatch({ type: apiActions.SET_ERROR, payload: error });
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
