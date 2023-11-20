import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// DEV ONLY!!!
// const pause = (duration) => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, duration);
// 	});
// };

const recipeApi = createApi({
	reducerPath: 'recipes',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3005', //this must change if your IP changes
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
					//console.log(result)
					const tags = result.map((recipe) => {
						return { type: 'Recipe', id: recipe.id };
					});
					return tags;
				},
				query: () => {
					return {
						url: '/recipes',
						method: 'GET',
					};
				},
			}),
			// fetchRecipeById: builder.query({
			// 	query: (recipe) => {
			// 		return {
			// 			url: `/recipes/${recipe.id}`,
			// 			method: 'GET',
			// 		};
			// 	},
			// }),
			addRecipe: builder.mutation({
				invalidatesTags: (result, error, recipe) => {
					return [{ type: 'Recipe' }];
				},
				query: ({
					userName,
					title, 
					eatWith, 
					protein,
					prepTime,
					cookTime,
					servings,
					ingredients,
					instructions
				}) => {
					return {
						url: 'recipes',
						method: 'POST',
						body: {
							userName,
							title, 
							eatWith, 
							protein,
							prepTime,
							cookTime,
							servings,
							ingredients,
							instructions
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
						url: `/recipes/${recipe.id}`,
						method: 'DELETE',
					};
				},
			}),
			editRecipe: builder.mutation({
				invalidatesTags: (result, error, recipe) => {
					return [{ type: 'Recipe', id: recipe.id }];
				},
				query: (recipe) => {
					return {
						url: `/recipes/${recipe.id}`,
						method: 'PATCH',
						body: recipe
					};
				},
			}),
			
		};
	},
});

export const { 
	useFetchRecipeQuery,
	//useFetchRecipeByIdQuery, 
	useAddRecipeMutation, 
	useRemoveRecipeMutation, 
	useEditRecipeMutation
 } = recipeApi;
export { recipeApi };
