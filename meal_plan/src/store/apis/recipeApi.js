import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// DEV ONLY!!!
// const pause = (duration) => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, duration);
// 	});
// };

const recipeApi = createApi({
	reducerPath: 'recipe',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://192.168.50.179:3005', //this must change if your IP changes
		fetchFn: async (...args) => {
			//REMOVE FOR PRODUCTION. ONLY FOR TEST
			// await pause(1000); //removing this as we no longer want to simulate delays
			return fetch(...args);
		},
	}),
	endpoints(builder) {
		return {
			fetchRecipe: builder.query({
				providesTags: (result, error, recipe) => {
					const tags = result.map((recipe) => {
						return { type: 'Recipe', id: recipe.id };
					});
					return tags;
				},
				query: () => {
					return {
						url: '/recipe',
						method: 'GET',
					};
				},
			}),
			addRecipe: builder.mutation({
				invalidatesTags: (result, error, recipe) => {
					return [{ type: 'Recipe' }];
				},
				query: ({name}) => {
					return {
						url: 'recipe',
						method: 'POST',
						body: {
							name,
						},
					};
				},
			}),
			removeRecipe: builder.mutation({
				invalidatesTags: (result, error, recipe) => {
					return [{ type: 'Recipe', id: recipe.id }];
				},
				query: (recipe) => {
					return {
						url: `/recipe/${recipe.id}`,
						method: 'DELETE',
					};
				},
			}),
		};
	},
});

export const { useFetchRecipeQuery, useAddRecipeMutation, useRemoveRecipeMutation } = recipeApi;
export { recipeApi };
