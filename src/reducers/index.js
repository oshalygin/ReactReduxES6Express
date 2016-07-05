import { combineReducers } from "redux";
import courses from "./course.reducer";
import authors from "./author.reducer";

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;