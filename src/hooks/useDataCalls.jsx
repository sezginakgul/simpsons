import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/dataSlice";

const useDataCalls = () => {
  const dispatch = useDispatch();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  //!------------- GET CALLS ----------------
  const getBaseData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.get(BASE_URL + url);
      dispatch(getSuccess({ data, url }));
      await localStorage.setItem("Simpsons", JSON.stringify(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getData = () => getBaseData("simpsons");
  return { getData };
};

export default useDataCalls;
