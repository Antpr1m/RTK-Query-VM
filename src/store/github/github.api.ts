import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IOwner, IRepo, IUser, ServerResponse } from '../../types/types'


//createApi принимает три обязат. параметра
export const githubApi = createApi({
	reducerPath: 'github/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com'
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		searchUsers: build.query<IUser[], string>({
			query: (search: string) => ({						//1 вариант   query: () => 'search/users'    2 вариант
				url: 'search/users',
				params: {
					q: search,
					per_page: 10
				}
			}),
			//изменение response и также изменить в query ServerResponse<IUser> на IUser[]
			transformResponse: (response: ServerResponse<IUser>) => response.items
		}),
		getUserRepos: build.query<IRepo[], string>({
			query: (username: string) => ({
				url: `users/${username}/repos`
			})
		})
	})
})

// Создается на основе endpoint 
export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi