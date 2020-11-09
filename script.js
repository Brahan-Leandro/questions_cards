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
		question: 'Who won the presidency of the united states 2020?',
		a: 'Donald Trump',
		b: 'Joe Biden',
		c: 'Howie Hawkins',
		d: 'Jo Jorgensen',
		correct: 'b'
	}, {
		question: 'What does HTML stand for',
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


const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;

	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
};

submitBtn.addEventListener("click", () => {
	currentQuiz++;

	loadQuiz();
	if (currentQuiz > 3) {
		currentQuiz = -1
	}
})

