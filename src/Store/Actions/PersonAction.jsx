import axios from "../../Utils/Axios";
import { loadperson } from "../Reducers/PeopleSlice";
export { removeperson } from "../Reducers/PeopleSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedcredits = await axios.get(`/person/${id}/combined_credits`);
    const moviecredit = await axios.get(`/person/${id}/movie_credits`);
    const tvcredits = await axios.get(`/person/${id}/tv_credits`);

    let ultimatedeatils = {
      detail: detail.data,
      externalid: externalid.data,
      combinedcredits: combinedcredits.data,
      moviecredit: moviecredit.data,
      tvcredits: tvcredits.data,
    };
    dispatch(loadperson(ultimatedeatils));
  } catch (error) {
    console.log(error);
  }
};
