const useQuiz = () => {
	const QuizListData = [
		{
			id: 0,
			question: 'Miasto z Pałacem Kultury i Pałacem Królewskim to?',
			img: 'https://cdn.pixabay.com/photo/2017/09/11/17/26/warsaw-2739767_960_720.jpg',
			answers: ['Berlin', 'Warszawa', 'Paryż', 'Wiedeń'],
			goodAnswer: 'Warszawa',
		},
		{
			id: 1,
			question: 'Tu obejrzysz korridę, tańce flamenco i pójdziesz na mecz słynnego klubu',
			img: 'https://cdn.pixabay.com/photo/2015/10/12/23/57/spain-985372_960_720.jpg',
			answers: ['Madryt', 'Londyn', 'Rzym', 'Amsterdam'],
			goodAnswer: 'Madryt',
		},
		{
			id: 2,
			question: 'Brama Brandenburska znajduje się w?',
			img: 'https://cdn.pixabay.com/photo/2021/10/27/09/06/gate-6746517_960_720.jpg',
			answers: ['Amsterdam', 'Budapeszt', 'Ateny', 'Berlin'],
			goodAnswer: 'Berlin',
		},
		{
			id: 3,
			question: 'Koloseum? Forum Romanum? Palatyn? To możesz zobaczyć w...',
			img: 'https://cdn.pixabay.com/photo/2018/07/20/14/02/rome-3550739_960_720.jpg',
			answers: ['Rzym', 'Londyn', 'Madryt', 'Warszawa'],
			goodAnswer: 'Rzym',
		},
		{
			id: 4,
			question: 'Malownicze kanały, plac Dam z Pałacem Królewskim jest w?',
			img: 'https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg',
			answers: ['Berlin', 'Praga', 'Amsterdam', 'Paryż'],
			goodAnswer: 'Amsterdam',
		},
		{
			id: 5,
			question: 'W tym mieście zajduje się Akropol, Teatr Dionizosa i Świątynia Zeusa Olimpijskiego',
			img: 'https://cdn.pixabay.com/photo/2012/02/07/17/12/acropolis-12044_960_720.jpg',
			answers: ['Rzym', 'Ateny', 'Londyn', 'Budapeszt'],
			goodAnswer: 'Ateny',
		},
		{
			id: 6,
			question: 'Słynie z budynku Parlamentu. Jest stolicą bratniego narodu Polaków',
			img: 'https://cdn.pixabay.com/photo/2016/06/06/23/49/parliament-1440679_960_720.jpg',
			answers: ['Berlin', 'Bruksela', 'Paryż', 'Budapeszt'],
			goodAnswer: 'Budapeszt',
		},
		{
			id: 7,
			question: 'Pałac Buckingham, Big Ben i Królowa kojarzą się?',
			img: 'https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098_960_720.jpg',
			answers: ['Londyn', 'Rzym', 'Warszawa', 'Madryt'],
			goodAnswer: 'Londyn',
		},
		{
			id: 8,
			question: 'W tej stolicy zobaczysz Wieżę Eiffla, katedrę Notre-Dame czy słynne muzeum Luwr',
			img: 'https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg',
			answers: ['Ateny', 'Amsterdam', 'Paryż', 'Praga'],
			goodAnswer: 'Paryż',
		},
		{
			id: 9,
			question: 'Most Karola, Hradczany i malownicze uliczki są w ...?',
			img: 'https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_960_720.jpg',
			answers: ['Budapeszt', 'Londyn', 'Madryt', 'Praga'],
			goodAnswer: 'Praga',
		},
	]

	return { QuizListData }
}

export default useQuiz
