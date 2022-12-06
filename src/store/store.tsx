import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { githubApi } from './github/github.api'
import { githubReducer } from './github/github.slice'

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer,			//регистрация api и соединение его со store
		github: githubReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(githubApi.middleware)
})

// For - refetchOnFocus: true
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>