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
				'Osada Białystok powstała między 1440 a 1444 rokiem. Prawa miejskie Białystok otrzymał  około 1691 roku.',
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
			img: 'https://cdn.pixabay.com/photo/2019/05/12/00/39/bydgoszcz-4196936_960_720.jpg',
			description:
				'Gród bydgoski zbudowano w 1038 roku. Prawa miejskie uzyskała 19 kwietnia 1346 roku. Ostatie lata to tendencja wyludniania.',
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
			description: 'Pierwsza wzmianka pochodzi z 999 roku. Jako Gdańsk prawa miejskie uzyskał w 1457 roku.',
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
			city: 'Gorzów Wielkopolski',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bulwar_i_mural_z_kaset%C4%85_BN.jpg/1280px-Bulwar_i_mural_z_kaset%C4%85_BN.jpg',
			description: 'Prawa miejskie Gorzów Wielkopolski otrzymał w 1257 roku.',
			population: {
				'1900': 33598,
				'1925': 43303,
				'1950': 32825,
				'1975': 87179,
				'2000': 126285,
				'2023': 115247,
			},
		},
		{
			id: 5,
			city: 'Katowice',
			img: 'https://cdn.pixabay.com/photo/2015/09/09/17/31/city-932032_960_720.jpg',
			description:
				'Katowice powstały jako wieś zagrodnicza pod koniec XVI wieku. Prawa miejskie otrzymały 11 września 1865 roku.',
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
			id: 6,
			city: 'Kielce',
			img: 'https://cdn.pixabay.com/photo/2018/10/27/15/30/kielce-3776754_960_720.jpg',
			description:
				'Kielce prawa miejskie otrzymały przed 1259 rokiem. Jako niewielka osada pozostawały na uboczu historii do XVIII w.',
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
			id: 7,
			city: 'Kraków',
			img: 'https://cdn.pixabay.com/photo/2019/08/29/19/31/krakow-4439817_960_720.jpg',
			description:
				'Kraków jest jednym z najstarszych miast Polski. Do 1795 roku był formalnie stolicą Polski. Prawa miejskie przed 1228 rokiem.',
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
			id: 8,
			city: 'Lublin',
			img: 'https://cdn.pixabay.com/photo/2015/10/18/12/00/view-of-the-city-994220_960_720.jpg',
			description:
				'Początki ośrodka osadniczego sięgają VI wieku. Prawa miejskie Lublin uzyskał 15 sierpnia 1317 roku.',
			population: {
				'1900': 57237,
				'1925': 103206,
				'1950': 116629,
				'1975': 271955,
				'2000': 358933,
				'2023': 332852,
			},
		},
		{
			id: 9,
			city: 'Łódź',
			img: 'https://cdn.pixabay.com/photo/2020/02/10/21/23/poland-4837733_960_720.jpg',
			description: 'Łódź ma metrykę średniowieczną. Prawa miejskie nadane zostały w Przedborzu 29 lipca 1423 roku.',
			population: {
				'1900': 314020,
				'1925': 452000,
				'1950': 620273,
				'1975': 798263,
				'2000': 793217,
				'2023': 655279,
			},
		},
		{
			id: 10,
			city: 'Olsztyn',
			img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Olsztyn%2C_stary_ratusz..jpg',
			description:
				'Miasto powstawało na surowym korzeniu w 1348 roku, wcześniej nie znajdowała się tam osada. Prawa miejskie 31 października 1353 r.',
			population: {
				'1900': 24255,
				'1925': 39637,
				'1950': 43831,
				'1975': 112723,
				'2000': 172843,
				'2023': 168212,
			},
		},
		{
			id: 11,
			city: 'Opole',
			img: 'https://cdn.pixabay.com/photo/2019/05/22/23/13/opole-4222852_960_720.jpg',
			description: 'Gród i podgrodzie w miejscu Opola istniały już w IX wieku. Prawa miejskie w 1217 roku.',
			population: {
				'1900': 0,
				'1925': 0,
				'1950': 38464,
				'1975': 105998,
				'2000': 130427,
				'2023': 128140,
			},
		},
		{
			id: 12,
			city: 'Poznań',
			img: 'https://cdn.pixabay.com/photo/2018/08/10/16/35/poznan-3597198_960_720.jpg',
			description:
				'Miasto ma metrykę średniowieczną i jest notowane od X wieku. Poznań prawa miejskie uzyskał 23 kwietnia 1253 toku',
			population: {
				'1900': 110000,
				'1925': 220023,
				'1950': 320670,
				'1975': 515962,
				'2000': 574896,
				'2023': 538439,
			},
		},
		{
			id: 13,
			city: 'Rzeszów',
			img: 'https://cdn.pixabay.com/photo/2018/09/11/10/14/city-3669040_960_720.jpg',
			description:
				'Rzeszów prawa miejskie otrzymał od króla Kazimierza Wielkiego 19 stycznia 1354 roku, co uznaje się za początek pisanej historii miasta.',
			population: {
				'1900': 15010,
				'1925': 24942,
				'1950': 28133,
				'1975': 95772,
				'2000': 160779,
				'2023': 197181,
			},
		},
		{
			id: 14,
			city: 'Szczecin',
			img: 'https://cdn.pixabay.com/photo/2022/05/25/09/42/szczecin-7220179_960_720.jpg',
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
		{
			id: 15,
			city: 'Toruń',
			img: 'https://cdn.pixabay.com/photo/2018/09/29/09/33/torun-3711031_960_720.jpg',
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
		{
			id: 16,
			city: 'Wrocław',
			img: 'https://cdn.pixabay.com/photo/2016/09/12/09/55/wrocaw-1663406_960_720.jpg',
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
		{
			id: 17,
			city: 'Zielona Góra',
			img: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Zielona_g%C3%B3ra_city_bicycle22.jpg',
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
