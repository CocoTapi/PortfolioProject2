import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipeApi } from './apis/recipeApi';


export const store = configureStore({
    reducer: {
        [recipeApi.reducerPath]: recipeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(recipeApi.middleware)
    }
});

setupListeners(store.dispatch);

export {
    useFetchRecipeQuery,
    useFetchRecipeByIdQuery,
    useAddRecipeMutation,
    useRemoveRecipeMutation,
    useEditRecipeMutation,
} from './apis/recipeApi';
