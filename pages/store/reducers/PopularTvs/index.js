import { AllPopularTvs } from "./actionType";
const initialStore = [];

const PopularTvs = (state = initialStore, action) => {
  switch (action.type) {
    case AllPopularTvs:
      return [...action.payload];
    default:
      return state;
  }
};

export default PopularTvs;
