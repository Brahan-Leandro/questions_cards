const quizData = [
	{
		question : 'How old is Florin?',
		a: '10',
		b: '17',
		c: '26',
		d: '110',
		correct: 'c'
	}, {
		question: 'Who is he most used programming languege in 2020?',
		a: 'JavaScript',
		b: 'Java',
		c: 'C++',
		d: 'Fortran',
		correct: 'a'
	}, {
		question: 'Who won the presidency of the united states 2020?'
		a: 'Donald Trump',
		b: 'Joe Biden',
		c: 'Howie Hawkins',
		d: 'Jo Jorgensen',
		correct: 'b'
	}, {
		question: 'What does HTML stand for'
		a: 'Hypertext Markup languege',
		b: 'Cascading Style Sheet',
		c: 'Jason Object Notation',
		d: 'Helicopters Terminals Motorboats',
		correct: 'a'
	}, {
		question: 'What year was JavaScript launched?',
		a: '1996',
		b: '1995',
		c: '1994',
		d: 'none of the above',
		correct: 'd'
	}
]


const questionEl = document.getElementByid('question')
const a_text = document.getElementByid('a_text')
const b_text = document.getElementByid('b_text')
const c_text = document.getElementByid('c_text')
const d_text = document.getElementByid('d_text')

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
	const currentQuestionData = quizData[currentQuestion];

	questionEl.innerText = currentQuestionData.question	

	currentQuestion++
}