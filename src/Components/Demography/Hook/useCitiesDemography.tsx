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
		{
			id: 3,
			city: 'Gdańsk',
			img: 'https://cdn.pixabay.com/photo/2021/08/18/09/25/river-6555127_960_720.jpg',
			description:
				'Pierwsza wzmianka o Gdańsku pochodzi z 999 roku. Jako Gdańsk prawa miejskie uzyskał w 1457 roku. Wcześniej prawa miejskie uzyskiwał pod innymi nazwami',
			population: {
				'1900': 170337,
				'1925': 206458,
				'1950': 194633,
				'1975': 420977,
				'2000': 462995,
				'2023': 470907,
			},
		},
		{
			id: 4,
			city: 'Katowice',
			img: 'https://cdn.pixabay.com/photo/2017/04/03/17/46/city-2199041_960_720.jpg',
			description: 'Prawa miejskie Gorzów Wielkopolski otrzymał w 1257 roku.',
			population: {
				'1900': 31738,
				'1925': 112657,
				'1950': 175496,
				'1975': 343723,
				'2000': 330625,
				'2023': 279200,
			},
		},
	]

	return { ListCitiesDemography }
}

export default useCitiesDemography
