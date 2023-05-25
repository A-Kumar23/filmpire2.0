import { configureStore } from "@reduxjs/toolkit";
import { tmbdAPI } from "../service/TMDB";
import  genreOrCategoryReducer  from "../features/currentGenreOrCatagory";

// export default configureStore(
//     {
//         reducer: {
//             [tmbdAPI.reducerPath]: tmbdAPI.reducer,
//         }
//     }
// )

const store = configureStore({
    reducer: {
        [tmbdAPI.reducerPath]: tmbdAPI.reducer,
        currentGenreOrCatagory: genreOrCategoryReducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(tmbdAPI.middleware),
    
})

export default store;