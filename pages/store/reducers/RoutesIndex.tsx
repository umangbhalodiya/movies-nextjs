import { combineReducers } from "redux";
import PopularMovies from "./PopularMovies";
import PopularTvs from "./PopularTvs";

const rootReducer = combineReducers({
    PopularMovies: PopularMovies,
    PopularTvs: PopularTvs
});

export default rootReducer;
