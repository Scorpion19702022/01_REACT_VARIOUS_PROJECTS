export type PopulationByYear = {
	[year: string]: number
}

export type CityDemography = {
	id: number
	city: string
	img: string
	description: string
	population: PopulationByYear
}

export type CitiesDemography = CityDemography[]
