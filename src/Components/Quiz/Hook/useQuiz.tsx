const useQuiz = () => {
	const QuizList = [
		{
			id: 0,
			question: 'Misto z Pałacem Kultury i Pałacem Królewskim to?',
			img: 'https://cdn.pixabay.com/photo/2017/09/11/17/26/warsaw-2739767_960_720.jpg',
			answers: [
				{ answerText: 'Berlin', isCorrect: false },
				{ answerText: 'Warszawa', isCorrect: true },
				{ answerText: 'Paryż', isCorrect: false },
				{ answerText: 'Wiedeń', isCorrect: false },
			],
		},
		{
			id: 1,
			question: 'Tu obejrzysz korridę, tańce flamenco i pójdziesz na mecz słynego klubu',
			img: 'https://cdn.pixabay.com/photo/2015/10/12/23/57/spain-985372_960_720.jpg',
			answers: [
				{ answerText: 'Madryt', isCorrect: true },
				{ answerText: 'Londyn', isCorrect: false },
				{ answerText: 'Rzym', isCorrect: false },
				{ answerText: 'Amsterdam', isCorrect: false },
			],
		},
	]

	return { QuizList }
}

export default useQuiz
