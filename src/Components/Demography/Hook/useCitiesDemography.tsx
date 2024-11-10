import { CitiesDemography } from '../Types/TypeForCitiesData'

const useCitiesDemography = () => {
	const ListCitiesDemography: CitiesDemography = [
		{
			id: 0,
			city: 'Warszawa',
			population: {
				'1900': 686000,
				'1925': 1103000,
				'1950': 822036,
				'1975': 1436122,
				'2000': 1610471,
				'2023': 1863056,
			},
		},
		{
			id: 1,
			city: 'Białystok',
			population: {
				'1900': 66654,
				'1925': 89802,
				'1950': 68503,
				'1975': 195861,
				'2000': 285507,
				'2023': 295683,
			},
		},
		{
			id: 2,
			city: 'Bydgoszcz',
			population: {
				'1900': 52204,
				'1925': 104000,
				'1950': 162254,
				'1975': 322657,
				'2000': 375676,
				'2023': 326434,
			},
		},
	]

	return { ListCitiesDemography }
}

export default useCitiesDemography
