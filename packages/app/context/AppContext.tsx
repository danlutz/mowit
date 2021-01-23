import React, { createContext, useReducer } from "react"

const MOCK_PRODUCTS: Product[] = []

export interface Product {
	id: string
	name: string
	description: string
	/**
	 * Price in euros per rented hour
	 */
	rentPriceEurosPerHours: number
	/**
	 * Url or filepath
	 */
	image?: string
	category: string
	username: string
}

export interface Profile {
	firstName: string
	lastName: string
}

export const defaultAppContext: AppContextState = {
	user: { firstName: "Max", lastName: "Mustermann" },
	products: MOCK_PRODUCTS,
	isLoggedIn: false,
	// eslint-disable-next-line
	dispatch: (action: AppContextReducerAction) => {},
}

export interface AppContextState {
	user: { firstName: string; lastName: string }
	isLoggedIn: boolean
	products: Product[]
	dispatch: DispatchAppContext
}

const AppContext = createContext(defaultAppContext)

const appContextReducer = (state: AppContextState, action: AppContextReducerAction) => {
	const { type, payload } = action

	switch (type) {
		case "ADD_PRODUCT":
			return {
				...state,
				products: [...state.products, payload],
			}

		case "LOGIN":
			return {
				...state,
				isLoggedIn: true,
			}

		case "LOGOUT":
			return {
				...state,
				isLoggedIn: false,
			}

		case "UPDATE_USER":
			return {
				...state,
				user: payload,
			}

		default:
			console.error(`Undefined reducer action type "${type}"`)
			return state
	}
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const [state, dispatch] = useReducer(appContextReducer, {
		...defaultAppContext,
	})
	return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>
}

interface AppContextProviderProps {
	children: React.ReactNode
}

export interface AppContextReducerAction {
	type: "ADD_PRODUCT" | "LOGIN" | "LOGOUT" | "UPDATE_USER"
	payload?: any
}

export type DispatchAppContext = (action: AppContextReducerAction) => void

export default AppContext
