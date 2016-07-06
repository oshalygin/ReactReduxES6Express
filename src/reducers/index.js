import { combineReducers } from "redux";
import courses from "./course.reducer";
import authors from "./author.reducer";
import xhrStatusReducer from "./xhr.status.reducer";


const rootReducer = combineReducers({
    courses,
    authors,
    xhrStatusReducer
});

export default rootReducer;