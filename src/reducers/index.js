import { combineReducers } from "redux";
import courses from "./course.reducer";
import authors from "./author.reducer";
import numberOfXHRCallsInProgress from "./xhr.status.reducer";


const rootReducer = combineReducers({
    courses,
    authors,
    numberOfXHRCallsInProgress
});

export default rootReducer;