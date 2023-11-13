import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { menuApi } from './apis/menuApi';


export const store = configureStore({
    reducer: {
        [menuApi.reducerPath]: menuApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(menuApi.middleware)
    }
});

setupListeners(store.dispatch);

export {
    useFetchMenuQuery,
    useAddMenuMutation,
    useRemoveMenuMutation
} from './apis/menuApi';
