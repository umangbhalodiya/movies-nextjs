import { AllPopularTvs } from "./actionType";

export const getPopularTvs = (allPopularTvs) => {
  return {
    payload: allPopularTvs,
    type: AllPopularTvs,
  };
};
