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
			description:
				'Katowice powstały jako wieś zagrodnicza pod koniec XVI wieku pod nazwą Kuźnica Bogucka. Prawa miejskie otrzymały 11 września 1865 roku.',
			population: {
				'1900': 31738,
				'1925': 112657,
				'1950': 175496,
				'1975': 343723,
				'2000': 330625,
				'2023': 279200,
			},
		},
		{
			id: 5,
			city: 'Kielce',
			img: 'https://cdn.pixabay.com/photo/2018/10/27/15/30/kielce-3776754_960_720.jpg',
			description:
				'Kielce prawa miejskie otrzymały przed 1259 rokiem. Będąc niewielką osadą pozostawały jednak na uboczu historii aż do XVIII wieku.',
			population: {
				'1900': 14270,
				'1925': 41346,
				'1950': 61332,
				'1975': 151185,
				'2000': 210956,
				'2023': 196335,
			},
		},
		{
			id: 6,
			city: 'Kraków',
			img: 'https://cdn.pixabay.com/photo/2019/08/29/19/31/krakow-4439817_960_720.jpg',
			description:
				'Kraków jest jednym z najstarszych miast Polski. Do 1795 roku był formalnie stolicą Polski, a do 1611 roku siedzibą władców państwa polskiego. Prawa miejskie przed 1228 rokiem.',
			population: {
				'1900': 85300,
				'1925': 206809,
				'1950': 343638,
				'1975': 684600,
				'2000': 758715,
				'2023': 807600,
			},
		},
		{
			id: 7,
			city: 'Lublin',
			img: 'https://cdn.pixabay.com/photo/2015/10/18/12/00/view-of-the-city-994220_960_720.jpg',
			description: 'Dane w trakcie uzupełniania',
			population: {
				'1900': 0,
				'1925': 0,
				'1950': 0,
				'1975': 0,
				'2000': 0,
				'2023': 0,
			},
		},
	]

	return { ListCitiesDemography }
}

export default useCitiesDemography
