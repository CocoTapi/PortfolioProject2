import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// DEV ONLY!!!
// const pause = (duration) => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, duration);
// 	});
// };

const menuApi = createApi({
	reducerPath: 'menu',
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
			fetchMenu: builder.query({
				providesTags: (result, error, menu) => {
					const tags = result.map((menu) => {
						return { type: 'Menu', id: menu.id };
					});
					return tags;
				},
				query: () => {
					return {
						url: '/menu',
						method: 'GET',
					};
				},
			}),
			addMenu: builder.mutation({
				invalidatesTags: (result, error, menu) => {
					return [{ type: 'Menu' }];
				},
				query: ({name}) => {
					return {
						url: 'menu',
						method: 'POST',
						body: {
							name,
						},
					};
				},
			}),
			removeMenu: builder.mutation({
				invalidatesTags: (result, error, menu) => {
					return [{ type: 'Menu', id: menu.id }];
				},
				query: (menu) => {
					return {
						url: `/menu/${menu.id}`,
						method: 'DELETE',
					};
				},
			}),
		};
	},
});

export const { useFetchMenuQuery, useAddMenuMutation, useRemoveMenuMutation } =
	menuApi;
export { menuApi };
