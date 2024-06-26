import { configureStore} from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/AuthSlice";

export default configureStore({
    reducer: {
        auth: authSliceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
