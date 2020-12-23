import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** The `Upload` scalar type represents a file upload. */
	Upload: any
}

export type City = {
	__typename?: "City"
	id?: Maybe<Scalars["ID"]>
	name?: Maybe<Scalars["String"]>
	country?: Maybe<Scalars["String"]>
	coord?: Maybe<Coordinates>
	weather?: Maybe<Weather>
}

export type Coordinates = {
	__typename?: "Coordinates"
	lon?: Maybe<Scalars["Float"]>
	lat?: Maybe<Scalars["Float"]>
}

export type Summary = {
	__typename?: "Summary"
	title?: Maybe<Scalars["String"]>
	description?: Maybe<Scalars["String"]>
	icon?: Maybe<Scalars["String"]>
}

export type Temperature = {
	__typename?: "Temperature"
	actual?: Maybe<Scalars["Float"]>
	feelsLike?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	max?: Maybe<Scalars["Float"]>
}

export type Wind = {
	__typename?: "Wind"
	speed?: Maybe<Scalars["Float"]>
	deg?: Maybe<Scalars["Int"]>
}

export type Clouds = {
	__typename?: "Clouds"
	all?: Maybe<Scalars["Int"]>
	visibility?: Maybe<Scalars["Int"]>
	humidity?: Maybe<Scalars["Int"]>
}

export type Weather = {
	__typename?: "Weather"
	summary?: Maybe<Summary>
	temperature?: Maybe<Temperature>
	wind?: Maybe<Wind>
	clouds?: Maybe<Clouds>
	timestamp?: Maybe<Scalars["Int"]>
}

export type ConfigInput = {
	units?: Maybe<Unit>
	lang?: Maybe<Language>
}

export type Query = {
	__typename?: "Query"
	getCityByName?: Maybe<City>
	getCityById?: Maybe<Array<Maybe<City>>>
}

export type QueryGetCityByNameArgs = {
	name: Scalars["String"]
	country?: Maybe<Scalars["String"]>
	config?: Maybe<ConfigInput>
}

export type QueryGetCityByIdArgs = {
	id?: Maybe<Array<Scalars["String"]>>
	config?: Maybe<ConfigInput>
}

export enum Unit {
	Metric = "metric",
	Imperial = "imperial",
	Kelvin = "kelvin",
}

export enum Language {
	Af = "af",
	Al = "al",
	Ar = "ar",
	Az = "az",
	Bg = "bg",
	Ca = "ca",
	Cz = "cz",
	Da = "da",
	De = "de",
	El = "el",
	En = "en",
	Eu = "eu",
	Fa = "fa",
	Fi = "fi",
	Fr = "fr",
	Gl = "gl",
	He = "he",
	Hi = "hi",
	Hr = "hr",
	Hu = "hu",
	Id = "id",
	It = "it",
	Ja = "ja",
	Kr = "kr",
	La = "la",
	Lt = "lt",
	Mk = "mk",
	No = "no",
	Nl = "nl",
	Pl = "pl",
	Pt = "pt",
	PtBr = "pt_br",
	Ro = "ro",
	Ru = "ru",
	Sv = "sv",
	Se = "se",
	Sk = "sk",
	Sl = "sl",
	Sp = "sp",
	Es = "es",
	Sr = "sr",
	Th = "th",
	Tr = "tr",
	Ua = "ua",
	Uk = "uk",
	Vi = "vi",
	ZhCn = "zh_cn",
	ZhTw = "zh_tw",
	Zu = "zu",
}

export enum CacheControlScope {
	Public = "PUBLIC",
	Private = "PRIVATE",
}

export type SummaryFragment = { __typename?: "Summary" } & Pick<
	Summary,
	"title" | "description" | "icon"
>

export type TemperatureFragment = { __typename?: "Temperature" } & Pick<
	Temperature,
	"actual" | "feelsLike" | "min" | "max"
>

export type WindFragment = { __typename?: "Wind" } & Pick<Wind, "speed" | "deg">

export type CloudsFragment = { __typename?: "Clouds" } & Pick<
	Clouds,
	"all" | "visibility" | "humidity"
>

export type GetCityByNameQueryVariables = Exact<{
	name: Scalars["String"]
}>

export type GetCityByNameQuery = { __typename?: "Query" } & {
	getCityByName?: Maybe<
		{ __typename?: "City" } & Pick<City, "id" | "name" | "country"> & {
				coord?: Maybe<{ __typename?: "Coordinates" } & Pick<Coordinates, "lon" | "lat">>
				weather?: Maybe<
					{ __typename?: "Weather" } & Pick<Weather, "timestamp"> & {
							summary?: Maybe<{ __typename?: "Summary" } & SummaryFragment>
							temperature?: Maybe<
								{ __typename?: "Temperature" } & TemperatureFragment
							>
							wind?: Maybe<{ __typename?: "Wind" } & WindFragment>
							clouds?: Maybe<{ __typename?: "Clouds" } & CloudsFragment>
						}
				>
			}
	>
}

export const SummaryFragmentDoc: DocumentNode<SummaryFragment, unknown> = {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "summary" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Summary" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "icon" } },
				],
			},
		},
	],
}
export const TemperatureFragmentDoc: DocumentNode<TemperatureFragment, unknown> = {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "temperature" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Temperature" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "actual" } },
					{ kind: "Field", name: { kind: "Name", value: "feelsLike" } },
					{ kind: "Field", name: { kind: "Name", value: "min" } },
					{ kind: "Field", name: { kind: "Name", value: "max" } },
				],
			},
		},
	],
}
export const WindFragmentDoc: DocumentNode<WindFragment, unknown> = {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "wind" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Wind" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "speed" } },
					{ kind: "Field", name: { kind: "Name", value: "deg" } },
				],
			},
		},
	],
}
export const CloudsFragmentDoc: DocumentNode<CloudsFragment, unknown> = {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "clouds" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Clouds" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "all" } },
					{ kind: "Field", name: { kind: "Name", value: "visibility" } },
					{ kind: "Field", name: { kind: "Name", value: "humidity" } },
				],
			},
		},
	],
}
export const GetCityByNameDocument: DocumentNode<
	GetCityByNameQuery,
	GetCityByNameQueryVariables
> = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getCityByName" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "getCityByName" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "name" },
								value: { kind: "Variable", name: { kind: "Name", value: "name" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "id" } },
								{ kind: "Field", name: { kind: "Name", value: "name" } },
								{ kind: "Field", name: { kind: "Name", value: "country" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "coord" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "lon" } },
											{ kind: "Field", name: { kind: "Name", value: "lat" } },
										],
									},
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "weather" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "timestamp" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "summary" },
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "FragmentSpread",
															name: {
																kind: "Name",
																value: "summary",
															},
														},
													],
												},
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "temperature" },
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "FragmentSpread",
															name: {
																kind: "Name",
																value: "temperature",
															},
														},
													],
												},
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "wind" },
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "FragmentSpread",
															name: { kind: "Name", value: "wind" },
														},
													],
												},
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "clouds" },
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "FragmentSpread",
															name: { kind: "Name", value: "clouds" },
														},
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		...SummaryFragmentDoc.definitions,
		...TemperatureFragmentDoc.definitions,
		...WindFragmentDoc.definitions,
		...CloudsFragmentDoc.definitions,
	],
}
