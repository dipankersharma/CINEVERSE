import { useParams } from "react-router-dom";
import axios from "../../Utils/Axios";
import { loadSeason } from "../Reducers/SeasonSlice";
export { removeSeason } from "../Reducers/SeasonSlice";

export const asyncloadseason = (id, number) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}/season/${number}`);
    const externalid = await axios.get(
      `/tv/${id}/season/${number}/external_ids`
    );
    const credits = await axios.get(`/tv/${id}/season/${number}/credits`);
    const videos = await axios.get(`/tv/${id}/season/${number}/videos`);
    const watchproviders = await axios.get(
      `/tv/${id}/season/${number}/watch/providers`
    );

    let ultimatedeatils = {
      detail: detail.data,
      externalid: externalid.data,
      credits: credits.data,
      watchproviders: watchproviders.data.results.IN,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
    };
    dispatch(loadSeason(ultimatedeatils));
  } catch (error) {
    console.log(error);
  }
};
