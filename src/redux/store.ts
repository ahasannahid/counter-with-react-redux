import  {configureStore} from '@reduxjs/toolkit';
import counterReducer from "./features/counter/counterSlice";
import logger from './middlewares/logger';
// import logger from 'redux-logger'

const store = configureStore({
    reducer : {
        counter : counterReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    // custom middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    // devTools : false,
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;

