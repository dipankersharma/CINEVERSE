import axios from "../../Utils/Axios";
import { loadTvShow } from "../Reducers/Tvslice";
export { removeTvShow } from "../Reducers/Tvslice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
    const episode = await axios.get(`/tv/${id}/screened_theatrically`);

    let ultimatedeatils = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
      episodegroups: episode.data.results,
    };
    dispatch(loadTvShow(ultimatedeatils));
  } catch (error) {
    console.log(error);
  }
};
