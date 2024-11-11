import { CitiesDemography } from '../Types/TypeForCitiesData'

const useCitiesDemography = () => {
	const ListCitiesDemography: CitiesDemography = [
		{
			id: 0,
			city: 'Warszawa',
			img: 'https://cdn.pixabay.com/photo/2021/08/07/18/36/city-6529111_960_720.jpg',
			description:
				'Warszawa uzyskała prawa miejskie przed 1300 rokiem. Jest największym polskim miastem pod względem liczby ludności.',
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
			img: 'https://cdn.pixabay.com/photo/2022/01/07/11/34/krasnoyarsk-6921747_960_720.jpg',
			description:
				'Osada Białystok powstała między 1440 a 1444 rokiem. Prawa miejskie Białystok otrzymał  około 1691 roku. ',
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
			img: 'https://cdn.pixabay.com/photo/2015/08/24/01/47/market-square-904233_960_720.jpg',
			description:
				'Gród bydgoski zbudowano w 1038 roku. Prawa miejskie Bydgoszcz uzyskała 19 kwietnia 1346 roku. W ostatnich kilkunastu latach występuje stała tendencja wyludniania się miasta.',
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
