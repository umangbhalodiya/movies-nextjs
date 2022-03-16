import { AllPopularMovies } from "./actionType";

export const getPopularMovies = (allPopularMovies) => {
  return {
    payload: allPopularMovies,
    type: AllPopularMovies,
  };
};
