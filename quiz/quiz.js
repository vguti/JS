var user = {}
var responses = []

function question1(){
	var name = prompt('What is your name?')
	user.name = name
}

question1();

 function question2() {
	var firstQuestion = prompt('Does null === 0 ? (Yes or No)')
	if (firstQuestion.toLowerCase() === 'yes') {
		firstQuestion = true;
	} else if (firstQuestion.toLowerCase() === 'no') {
		firstQuestion = false;
	} else {
		alert("Please answer either Yes or No");
		return question2();
	}
	responses.push(firstQuestion);
}

question2(); 

function question3() {
	var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
	js = js.toLowerCase();
	switch (js) {
		case 'java':
		js = false;
		break;

		case 'livescript':
		js = true;
		break;

		case 'javalive':
		js = false;
		break;

		case 'scriptyscript':
		js = false;
		break;

		default:
		alert("Please pick one of the options: Java, LiveScript, JavaLive, ScriptyScript");
		break;
	}
	responses.push(js);
}

question3();

function question4() {
	var creator = prompt('Who is the creator of JavaScript?');
	creator = creator.toLowerCase();
	if (creator == 'brendan eich'){
		creator = true
	} else {
		creator = false
	}
	responses.push(creator);
}

question4(); 

 function question5() {
	var year = prompt('In what year was JavaScript developed?');
	if (year == '1995') {
		year = true;
	} else {
		year = false;
	}
	responses.push(year);
}

question5(); 



function showResults() {
	alert('Student: ' + user.name + ' \nCorrect Answers: ' + totalCorrectAnswers  + '\nIncorrect Answers: ' + totalIncorrectAnswers + '\nThanks for taking this quiz!');
}

function evaluate(responsesArray) {
	var correctAnswers = 0;
	var incorrectAnswers = 0;

	for (var i = 0, l = responsesArray.length; i < l; i++) {
		if (responsesArray[i] == true){
			correctAnswers += 1;
		} else {
			incorrectAnswers += 1;
		}
	}
	 totalCorrectAnswers = correctAnswers
	 totalIncorrectAnswers = incorrectAnswers

	 showResults();
}

evaluate(responses);

