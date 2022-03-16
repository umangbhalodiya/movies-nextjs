import { AllPopularMovies } from "./actionType";
const initialStore = [];

const PopularMovies = (state = initialStore, action) => {
  switch (action.type) {
    case AllPopularMovies:
      return [...action.payload];
    default:
      return state;
  }
};

export default PopularMovies;
