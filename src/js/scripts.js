import dataset from './../dataset/dataset.json';

const musicData = dataset.music;
const modArt = dataset['modern-art'];
const codingData = dataset.coding;

// Initialize local storage
// we will keep empty arrays for musicResponses, ModernArtResponses and CodingResponses

var musicResponses = JSON.stringify([]);
var ModernArtResponses = JSON.stringify([]);
var CodingResponses = JSON.stringify([]);

if (localStorage.getItem("music") === null || JSON.parse(localStorage.getItem("music")).length != 10) {
  localStorage.setItem("music", musicResponses);
}

if (localStorage.getItem("modern-art") === null ||JSON.parse(localStorage.getItem("modern-art")).length != 10) {
  localStorage.setItem("modern-art", ModernArtResponses);
}

if (localStorage.getItem("coding") === null || JSON.parse(localStorage.getItem("coding")).length != 10) {
  localStorage.setItem("coding", CodingResponses);
}

// Pre process ModArt data
for (var i=0;i<modArt.length;i++) {
  modArt[i].id = (i+1);
}

// Pre process codingData 
for (var i=0;i<codingData.length;i++) {
  codingData[i].id = (i+1);
}

var musicQuizCompleted = JSON.parse(localStorage.getItem("music")).length == 10;
var modernArtQuizCompleted = JSON.parse(localStorage.getItem("modern-art")).length === 10;
var codingQuizCompleted = JSON.parse(localStorage.getItem("coding")).length === 10;

// Add Event listener for Music Button click
var musicBtn = document.getElementById('musicButton');
if (musicQuizCompleted ==  true) {
  musicBtn.setAttribute("disabled", musicQuizCompleted);
}

musicBtn.addEventListener('click', () => {
  loadQuiz(musicData[0]);
});

// Add Event listener for Modern Art click
var modernArtBtn = document.getElementById('modernArtButton');
if (modernArtQuizCompleted ==  true) {
  modernArtBtn.setAttribute("disabled", "" +modernArtQuizCompleted);
}
modernArtBtn.addEventListener('click', () => {
  loadQuiz(modArt[0]);
});

// Add Event listener for coding click
var codingBtn = document.getElementById('codingButton');
if (codingQuizCompleted ==  true) {
  codingBtn.setAttribute("disabled", "" + codingQuizCompleted);
}
codingBtn.addEventListener('click', () => {
  loadQuiz(codingData[0]);
});

function loadQuiz(data) {
  //Allow update to score
  let setScore = true;
  //get parent Div
  var parentNode = document.getElementById("mainBody");

  var selectTextBoxNode = document.getElementById("selectTextBox");
  selectTextBoxNode.remove();

  var mainTopicsBoxNode = document.getElementById("mainTopicsBox");
  mainTopicsBoxNode.remove();

  var footerNode = document.getElementById("footer");
  footerNode.remove();

  // create Question Box --> it will contain question details
  var questionBox = document.createElement("div");
  questionBox.setAttribute("id", "question-box");

  var titleDiv = document.createElement("div");
  titleDiv.setAttribute("id", "title");

  var titleDiv = document.createElement('div');
  titleDiv.setAttribute('id', 'title');

  var quizType = "";

  if (data.category == "music") {
    quizType = "Music";
  } else if (data.category == "modern-art") {
    quizType = "Modern Art";
  } else if (data.category == "coding") {
    quizType = "Coding"
  }

  var textPara = document.createElement('p');
  textPara.innerHTML = quizType + " - Quiz Pop";
  textPara.setAttribute('id', "textPara");

  var closeButton = document.createElement("button");
  closeButton.setAttribute("id", "close-btn");
  closeButton.textContent = "Close Quiz";

  titleDiv.appendChild(textPara);
  titleDiv.appendChild(closeButton);

  var questionHeader = document.createElement("h2");
  questionHeader.setAttribute("id", "questionHeader");
  questionHeader.innerHTML = "Question " + data.id + " out of 10: Single Selection";

  // create Question paragraph
  var questionPara = document.createElement("p");
  questionPara.innerHTML = data.question;

  //create first  Option
  var firstOption = document.createElement('input');
  firstOption.setAttribute('type', 'radio');
  firstOption.setAttribute('name', 'radioButton');
  firstOption.setAttribute('value', data.options[0]);
  firstOption.setAttribute('correctAnswer', data.answer);
  firstOption.setAttribute("id", "radio0");

  //set label for first option
  var firstLabel = document.createElement("Label");
  firstLabel.innerHTML = data.options[0];
  firstLabel.setAttribute("id", "label0");
  var break1 = document.createElement("br");

  //create second  Option
  var secondOption = document.createElement('input');
  secondOption.setAttribute('type', 'radio');
  secondOption.setAttribute('name', 'radioButton');
  secondOption.setAttribute('value', data.options[1]);
  secondOption.setAttribute('correctAnswer', data.answer);
  secondOption.setAttribute("id", "radio1");

  //set label for second option
  var secondLabel = document.createElement("Label");
  secondLabel.innerHTML = data.options[1];
  secondLabel.setAttribute("id", "label1");
  var break2 = document.createElement("br");

  //create third  Option
  var thirdOption = document.createElement('input');
  thirdOption.setAttribute('type', 'radio');
  thirdOption.setAttribute('name', 'radioButton');
  thirdOption.setAttribute('value', data.options[2]);
  thirdOption.setAttribute('correctAnswer', data.answer);
  thirdOption.setAttribute("id", "radio2");

  //set label for third option
  var thirdLabel = document.createElement("Label");
  thirdLabel.innerHTML = data.options[2];
  thirdLabel.setAttribute("id", "label2");
  var break3 = document.createElement("br");

  //create fourth  Option
  var fourthOption = document.createElement('input');
  fourthOption.setAttribute('type', 'radio');
  fourthOption.setAttribute('name', 'radioButton');
  fourthOption.setAttribute('value', data.options[3]);
  fourthOption.setAttribute('correctAnswer', data.answer);
  fourthOption.setAttribute("id", "radio3");

  //set label for fourth option
  var fourthLabel = document.createElement("Label");
  fourthLabel.innerHTML = data.options[3];
  fourthLabel.setAttribute("id", "label2");
  var break4 = document.createElement("br");

  // Create a check answer button for Question
  var checkButton = document.createElement("button");
  checkButton.setAttribute("id", "checkBtn");
  checkButton.setAttribute("disabled", true);
  var text = document.createTextNode("Check");
  checkButton.appendChild(text);


  // Create a button for Next Question
  var nextButton = document.createElement("button");
  var text = document.createTextNode("Next");
  nextButton.setAttribute("id", "nextBtn");
  nextButton.appendChild(text);

  // set attributes for current data in the button
  nextButton.setAttribute("index", data.id - 1);
  nextButton.setAttribute("category", data.category)

  questionBox.appendChild(titleDiv);
  questionBox.appendChild(questionHeader);
  questionBox.appendChild(questionPara);

  questionBox.appendChild(firstOption);
  questionBox.appendChild(firstLabel);
  questionBox.appendChild(break1);

  questionBox.appendChild(secondOption);
  questionBox.appendChild(secondLabel);
  questionBox.appendChild(break2);

  questionBox.appendChild(thirdOption);
  questionBox.appendChild(thirdLabel);
  questionBox.appendChild(break3);

  questionBox.appendChild(fourthOption);
  questionBox.appendChild(fourthLabel);
  questionBox.appendChild(break4);

  var buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "buttonContainer");
  buttonContainer.appendChild(nextButton);

  questionBox.appendChild(checkButton);
  questionBox.appendChild(buttonContainer);

  parentNode.appendChild(questionBox);

  var radios = document.querySelectorAll(
    'input[type=radio][name="radioButton"]'
  );

  radios.forEach((radio) =>
    radio.addEventListener("change", () => {
      checkButton.removeAttribute("disabled");
      checkButton.setAttribute("style", "background-color:teal");

      var selectedOption = radio.value;
      var correctOption = data.answer;

      var isCorrect = false;
      if(selectedOption==correctOption){
        isCorrect=true;
      }
      else{
        isCorrect = false;
      }

      var response = {
        "id": data.id,
        "selectedOption": radio.value,
        "isCorrect": isCorrect,
        "question": data.question,
        "options": data.options,
        "answer": data.answer
      };

      var currentResponses = JSON.parse(localStorage.getItem(data.category));

      currentResponses.push(response);

      localStorage.setItem(data.category, JSON.stringify(currentResponses));

      // now we will disable the radio options
      for (var i=0;i<=3;i++) {
        document.getElementById("radio" + i).setAttribute("disabled", true);
      }
    })
  );

  var nxtBtn = document.getElementById('nextBtn');
  nxtBtn.addEventListener('click', (event) => {

        var index = event.target.getAttribute("index");
        var category = event.target.getAttribute("category");
        console.log("index: ", index);
        console.log("category: ", category);

        loadNextQuestion(dataset[category][parseInt(index) + 1]);
  });

  function loadNextQuestion(data) {
        console.log("Inside loadNextQuestion: ", data);
        //get parent Div
        var parentNode = document.getElementById("mainBody");
      
        var questionBoxNode = document.getElementById('question-box');
        questionBoxNode.remove();
      
          // create Question Box --> it will contain question details
        var questionBox = document.createElement('div');
        questionBox.setAttribute('id', 'question-box');
      
        var titleDiv = document.createElement('div');
        titleDiv.setAttribute('id', 'title');
      
        var quizType = "";
      
        if (data.category == "music") {
          quizType = "Music";
        } else if (data.category == "modern-art") {
          quizType = "Modern Art";
        } else if (data.category == "coding") {
          quizType = "Coding"
        }
      
        var textPara = document.createElement('p');
        textPara.innerHTML = quizType+" - Quiz Pop";
        textPara.setAttribute('id', "textPara");
      
        var closeButton = document.createElement('button');
        closeButton.setAttribute('id', 'close-btn');
        closeButton.textContent = 'Close Quiz';
      
        titleDiv.appendChild(textPara);
        titleDiv.appendChild(closeButton);
      
        var questionHeader = document.createElement('h2');
        questionHeader.setAttribute('id', 'questionHeader');
        questionHeader.innerHTML = "Question " + data.id + "/10";
      
        // create Question paragraph
        var questionPara = document.createElement('p');
        questionPara.innerHTML = data.question;
      
        //create first  Option
        var firstOption = document.createElement('input');
        firstOption.setAttribute('type', 'radio');
        firstOption.setAttribute('name', 'radioButton');
        firstOption.setAttribute('value', data.options[0]);
        firstOption.setAttribute("id", "radio0");
      
        //set label for first option
        var firstLabel = document.createElement('Label');
        firstLabel.innerHTML = data.options[0];
        var break1 = document.createElement('br');
      
        //create second  Option
        var secondOption = document.createElement('input');
        secondOption.setAttribute('type', 'radio');
        secondOption.setAttribute('name', 'radioButton');
        secondOption.setAttribute('value', data.options[1]);
        secondOption.setAttribute("id", "radio1");
      
        //set label for second option
        var secondLabel = document.createElement('Label');
        secondLabel.innerHTML = data.options[1];
        var break2 = document.createElement('br');
      
        //create third  Option
        var thirdOption = document.createElement('input');
        thirdOption.setAttribute('type', 'radio');
        thirdOption.setAttribute('name', 'radioButton');
        thirdOption.setAttribute('value', data.options[2]);
        thirdOption.setAttribute("id", "radio2");
      
        //set label for third option
        var thirdLabel = document.createElement('Label');
        thirdLabel.innerHTML = data.options[2];
        var break3 = document.createElement('br');
      
        //create fourth  Option
        var fourthOption = document.createElement('input');
        fourthOption.setAttribute('type', 'radio');
        fourthOption.setAttribute('name', 'radioButton');
        fourthOption.setAttribute('value', data.options[3]);
        fourthOption.setAttribute("id", "radio3");
      
        //set label for fourth option
        var fourthLabel = document.createElement('Label');
        fourthLabel.innerHTML = data.options[3];
        var break4 = document.createElement('br');
      
        // Create a button for Previous Question
        var prevButton = document.createElement('button');
        prevButton.setAttribute('id', 'previousBtn');
        var text = document.createTextNode('Previous');
        prevButton.appendChild(text);
      
        // set attributes for current data in the previous button
        prevButton.setAttribute("index", data.id - 1);
        prevButton.setAttribute("category", data.category)
      
        // Create a button for Next Question
        var nextButton = document.createElement('button');
        var text = document.createTextNode('Next');
        nextButton.setAttribute('id', 'nextBtn');
        nextButton.appendChild(text);
        // set attributes for current data in the button
        nextButton.setAttribute("index", data.id - 1);
        nextButton.setAttribute("category", data.category)

        // Create a check answer button for Question
        var checkButton = document.createElement("button");
        checkButton.setAttribute("id", "checkBtn");
        checkButton.setAttribute("disabled", true);
        var text = document.createTextNode("Check");
        checkButton.appendChild(text);
      
        questionBox.appendChild(titleDiv);
        questionBox.appendChild(questionHeader);
        questionBox.appendChild(questionPara);
      
        questionBox.appendChild(firstOption);
        questionBox.appendChild(firstLabel);
        questionBox.appendChild(break1);
      
        questionBox.appendChild(secondOption);
        questionBox.appendChild(secondLabel);
        questionBox.appendChild(break2);
      
        questionBox.appendChild(thirdOption);
        questionBox.appendChild(thirdLabel);
        questionBox.appendChild(break3);
      
        questionBox.appendChild(fourthOption);
        questionBox.appendChild(fourthLabel);
        questionBox.appendChild(break4);
        questionBox.appendChild(checkButton);

        var buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("id", "buttonContainer");

        if (data.id > 1) {
          buttonContainer.appendChild(prevButton);
        }
        
        if (data.id < 10) {
          buttonContainer.appendChild(nextButton);
        }
        questionBox.appendChild(checkButton);
        questionBox.appendChild(buttonContainer);
      
        parentNode.appendChild(questionBox);
      
        if (data.id < 10) {
          //Add Event listner for Next Button click
          var nxtBtn = document.getElementById('nextBtn');
          nxtBtn.addEventListener('click', (event) => {
        
              var index = event.target.getAttribute("index");
              var category = event.target.getAttribute("category");
              console.log("index: ", index);
              console.log("category: ", category);
        
              loadNextQuestion(dataset[category][parseInt(index) + 1]);
          });
        }

        //Add Event listner for Check Button click
        var chkBtn = document.getElementById("checkBtn");
        chkBtn.addEventListener("click", (event) => {
          radios.forEach((radio) => {
            if (radio.checked == true && radio.value == data.answer) {
              questionBox.removeChild(checkButton);
              radio.setAttribute("style", "accent-color:green");
              var questionFooter = document.createElement("h4");
              questionFooter.setAttribute("id", "questionFooter");
              questionFooter.setAttribute("style", "color:green");
              questionFooter.innerHTML = "Good Job! You got the question right.";
              var questionFooter1 = document.createElement("h4");
              questionFooter1.setAttribute("id", "questionFooter1");
              questionFooter1.setAttribute("style", "color:black");
              questionFooter1.innerHTML = "Press Next/Previous to move to next questions";
              questionBox.appendChild(questionFooter);
              questionBox.appendChild(questionFooter1);
              event.preventDefault();
            } else if (radio.checked == true && radio.value != data.answer) {
              questionBox.removeChild(checkButton);
              radio.setAttribute("style", "accent-color:red");
              var questionFooter = document.createElement("h4");
              questionFooter.setAttribute("id", "questionFooter");
              questionFooter.setAttribute("style", "color:red");
              questionFooter.innerHTML = "Sorry you got the question wrong.";
              var questionFooter1 = document.createElement("h4");
              questionFooter1.setAttribute("id", "questionFooter1");
              questionFooter1.setAttribute("style", "color:black");
              questionFooter1.innerHTML = "The Correct answer was " + data.answer;
              var questionFooter2 = document.createElement("h4");
              questionFooter2.setAttribute("id", "questionFooter2");
              questionFooter2.innerHTML = "Press Next/Previous to move to next questions";
              questionBox.appendChild(questionFooter);
              questionBox.appendChild(questionFooter1);
              questionBox.appendChild(questionFooter2);
              // $("input").click(function (e) {
              //   event.preventDefault();
              // });
            }
          });
        });
      
        if (data.id > 1) {
          //Add Event listner for Previous Button click
          var previousButton = document.getElementById('previousBtn');
          previousButton.addEventListener('click', (event) => {
        
            var index = event.target.getAttribute("index");
            var category = event.target.getAttribute("category");
            console.log("index: ", index);
            console.log("category: ", category);
        
            loadNextQuestion(dataset[category][parseInt(index) - 1]);
          });
        }
      
        var closeBtn = document.getElementById("close-btn");
          closeBtn.addEventListener('click', () => {
          location.reload();
        });
      
      
        // Logic to find out if Question is attempted already
        var currentId = data.id;
        var currentCategory = data.category;
      
        // loop over Localstorage category
        var categoryArrayFromLocalStorage = JSON.parse(localStorage.getItem(currentCategory));
      
        var disableRadios = false;
        var disableRadioIndex = -1;
      
        for (var i=0;i<categoryArrayFromLocalStorage.length;i++) {
          if (categoryArrayFromLocalStorage[i].id == currentId) {
      
            // find the index of option which user selected
            var optionIndexSelected = data.options.indexOf(categoryArrayFromLocalStorage[i].selectedOption);
      
            disableRadios = true;
            disableRadioIndex = optionIndexSelected;
            break;
          }
        }
      
        if (disableRadios == true) {
          // disable the radio options
          for (var i=0;i<=3;i++) {
            document.getElementById("radio" + i).setAttribute("disabled", true);
      
            if (i == disableRadioIndex) {
              document.getElementById("radio" + i).setAttribute("checked", true);
            }
          }
          return;
        }
      
        var radios = document.querySelectorAll(
          'input[type=radio][name="radioButton"]'
        );
      
        radios.forEach((radio) =>
          radio.addEventListener("change", () => {
            checkButton.removeAttribute("disabled");
            checkButton.setAttribute("style", "background-color:teal");
            var selectedOption = radio.value;
            var correctOption = data.answer;
      
            var isCorrect = false;
            if(selectedOption==correctOption){
              isCorrect=true;
            }
            else{
              isCorrect = false;
            }
      
            var response = {
              "id": data.id,
              "selectedOption": radio.value,
              "isCorrect": isCorrect,
              "question": data.question,
              "options": data.options,
              "answer": data.answer
            };
      
      
            var currentResponses = JSON.parse(localStorage.getItem(data.category));
      
            currentResponses.push(response);
      
            localStorage.setItem(data.category, JSON.stringify(currentResponses));
      
            // now we will disable the radio options
            for (var i=0;i<=3;i++) {
              document.getElementById("radio" + i).setAttribute("disabled", true);
            }
      
            // check if all the 10 questions are answered
            if (JSON.parse(localStorage.getItem(data.category)).length == 10) {
              // generate a new window with Score and Generate report
      
              // create a div
              var reportDiv = document.createElement("div");
              reportDiv.setAttribute("id", "reportDivFinal");
      
              var reportParaNode = document.createElement("h3");
              reportParaNode.setAttribute("style", "text-align: center");
              reportParaNode.innerHTML = "Please Click below to check Score or Generate Report";
      
              var scoreAndReportButton = document.createElement("button");
              scoreAndReportButton.setAttribute('id', 'scoreBtn');
              var scoreText = document.createTextNode("View Score and Report");
              scoreAndReportButton.appendChild(scoreText);
      
              reportDiv.appendChild(reportParaNode);
              reportDiv.appendChild(scoreAndReportButton);
      
              //get parent Div
              var parentNode = document.getElementById("mainBody");
      
              var questionBoxNode = document.getElementById('question-box');
              questionBoxNode.remove();
      
              parentNode.appendChild(reportDiv);

              var scoreButton = document.getElementById('scoreBtn');
              scoreButton.addEventListener('click', () => {
                console.log('score button clicked');
      
                // we have to display score
                var finalData = JSON.parse(localStorage.getItem(data.category));
                var score=0;
                for(var i=0; i<finalData.length; i++) {
                  if(finalData[i].isCorrect == true){
                    score = score+1;
                  }
                }
      
                // create a new Div to show Score
                var scoreDiv = document.createElement("div");
                scoreDiv.setAttribute("id", "scoreDivFinal");
                var scoreCorrectText = document.createElement("h2");
                var scoreIncorrectText = document.createElement("h2");
      
                scoreCorrectText.innerHTML = "Correct Answers: " + score;
                scoreCorrectText.setAttribute("style", "color: green;");
                scoreIncorrectText.innerHTML = "Incorrect Answers: " + (10 - score);
                scoreIncorrectText.setAttribute("style", "color: red;");
      
                scoreDiv.appendChild(scoreCorrectText);
                scoreDiv.appendChild(scoreIncorrectText);
      
                // Report Div
                var generatedReportDiv = document.createElement("div");
                generatedReportDiv.setAttribute("id", "generatedReportDivFinal");
      
                for(var i=0; i<finalData.length; i++) {
                  var paragraphRow = document.createElement("h4");
      
                  var correctIncorrectText = "Incorrect";
                  if (finalData[i].isCorrect == true) {
                    correctIncorrectText = "Correct";
                  }
      
                  paragraphRow.innerHTML = "Q" +  finalData[i].id + ". " + finalData[i].question + " (" +  correctIncorrectText + ")";
                  var selectedAnswerText = document.createElement("p");
                  var correctAnswerText = document.createElement("p");
                  selectedAnswerText.setAttribute("style", "color: red");
                  correctAnswerText.setAttribute("style", "color: green");
      
                  selectedAnswerText.innerHTML = "Selected Answer: " + finalData[i].selectedOption;
                  correctAnswerText.innerHTML = "Correct Answer: " + finalData[i].answer;
      
                  generatedReportDiv.appendChild(paragraphRow);
                  if (finalData[i].isCorrect == false) {
                    generatedReportDiv.appendChild(selectedAnswerText);
                  }
                  generatedReportDiv.appendChild(correctAnswerText);
      
                  var hrNode1 = document.createElement("hr");
                  generatedReportDiv.appendChild(hrNode1);
      
                }
      
                //get child nodes of parent
                var parentNode = document.getElementById("mainBody");
      
                var childNodesOfParent = parentNode.childNodes;
                for(var i=0;i<childNodesOfParent.length;i++) {
                  childNodesOfParent[i].remove();
                }
      
                parentNode.appendChild(scoreDiv);
      
                var hrNode2 = document.createElement("hr");
      
                parentNode.appendChild(generatedReportDiv);
      
              });
      
              var generateReportButton = document.getElementById('generateReportBtn');
              generateReportButton.addEventListener('click', () => {
                // Generate the report for questions
                var finalData = JSON.parse(localStorage.getItem(data.category));
      
                var generatedReportDiv = document.createElement("div");
                generatedReportDiv.setAttribute("id", "generatedReportDivFinal");
      
                for(var i=0; i<finalData.length; i++) {
                  var paragraphRow = document.createElement("h4");
      
                  var correctIncorrectText = "Incorrect";
                  if (finalData[i].isCorrect == true) {
                    correctIncorrectText = "Correct";
                  }
      
                  paragraphRow.innerHTML = "Q" +  finalData[i].id + ". " + finalData[i].question + " (" +  correctIncorrectText + ")";
                  var selectedAnswerText = document.createElement("p");
                  var correctAnswerText = document.createElement("p");
                  selectedAnswerText.setAttribute("style", "color: red");
                  correctAnswerText.setAttribute("style", "color: green");
      
                  selectedAnswerText.innerHTML = "Selected Answer: " + finalData[i].selectedOption;
                  correctAnswerText.innerHTML = "Correct Answer: " + finalData[i].answer;
      
                  generatedReportDiv.appendChild(paragraphRow);
                  if (finalData[i].isCorrect == false) {
                    generatedReportDiv.appendChild(selectedAnswerText);
                  }
                  generatedReportDiv.appendChild(correctAnswerText);
      
                }
      
                var parentNode = document.getElementById("mainBody");
      
                var childNodesOfParent = parentNode.childNodes;
                for(var i=0;i<childNodesOfParent.length;i++) {
                  childNodesOfParent[i].remove();
                }
      
                parentNode.appendChild(generatedReportDiv);
      
              });
            }

            //Add Event listner for Check Button click
            var chkBtn = document.getElementById("checkBtn");
            chkBtn.addEventListener("click", (event) => {
              radios.forEach((radio) => {
                if (radio.checked == true && radio.value == data.answer) {
                  questionBox.removeChild(checkButton);
                  questionBox.appendChild(nextButton);
                  radio.setAttribute("style", "accent-color:green");
                  var questionFooter = document.createElement("h4");
                  questionFooter.setAttribute("id", "questionFooter");
                  questionFooter.setAttribute("style", "color:green");
                  questionFooter.innerHTML = "Good Job! You got the question right.";
                  var questionFooter1 = document.createElement("h4");
                  questionFooter1.setAttribute("id", "questionFooter1");
                  questionFooter1.setAttribute("style", "color:black");
                  questionFooter1.innerHTML = "Press Next/Previous to move to next questions";
                  questionBox.appendChild(questionFooter);
                  questionBox.appendChild(questionFooter1);
                  event.preventDefault();
                } else if (radio.checked == true && radio.value != data.answer) {
                  questionBox.removeChild(checkButton);
                  questionBox.appendChild(nextButton);
                  radio.setAttribute("style", "accent-color:red");
                  var questionFooter = document.createElement("h4");
                  questionFooter.setAttribute("id", "questionFooter");
                  questionFooter.setAttribute("style", "color:red");
                  questionFooter.innerHTML = "Sorry you got the question wrong.";
                  var questionFooter1 = document.createElement("h4");
                  questionFooter1.setAttribute("id", "questionFooter1");
                  questionFooter1.setAttribute("style", "color:black");
                  questionFooter1.innerHTML = "The Correct answer was " + data.answer;
                  var questionFooter2 = document.createElement("h4");
                  questionFooter2.setAttribute("id", "questionFooter2");
                  questionFooter2.innerHTML = "Press Next/Previous to move to next questions";
                  questionBox.appendChild(questionFooter);
                  questionBox.appendChild(questionFooter1);
                  questionBox.appendChild(questionFooter2);
                  // $("input").click(function (e) {
                  //   event.preventDefault();
                  // });
                }
              });
            });

            var closeBtn = document.getElementById("close-btn");
            closeBtn.addEventListener('click', () => {
            location.reload();
            });
          })
        );  
  }

  //Add Event listner for Check Button click
  var chkBtn = document.getElementById("checkBtn");
  chkBtn.addEventListener("click", (event) => {
    radios.forEach((radio) => {
      if (radio.checked == true && radio.value == data.answer) {
        questionBox.removeChild(checkButton);
        radio.setAttribute("style", "accent-color:green");
        var questionFooter = document.createElement("h4");
        questionFooter.setAttribute("id", "questionFooter");
        questionFooter.setAttribute("style", "color:green");
        questionFooter.innerHTML = "Good Job! You got the question right.";
        var questionFooter1 = document.createElement("h4");
        questionFooter1.setAttribute("id", "questionFooter1");
        questionFooter1.setAttribute("style", "color:black");
        questionFooter1.innerHTML = "Press Next/Previous to move to next questions";
        questionBox.appendChild(questionFooter);
        questionBox.appendChild(questionFooter1);
        event.preventDefault();
      } else if (radio.checked == true && radio.value != data.answer) {
        questionBox.removeChild(checkButton);
        questionBox.appendChild(nextButton);
        radio.setAttribute("style", "accent-color:red");
        var questionFooter = document.createElement("h4");
        questionFooter.setAttribute("id", "questionFooter");
        questionFooter.setAttribute("style", "color:red");
        questionFooter.innerHTML = "Sorry you got the question wrong.";
        var questionFooter1 = document.createElement("h4");
        questionFooter1.setAttribute("id", "questionFooter1");
        questionFooter1.setAttribute("style", "color:black");
        questionFooter1.innerHTML = "The Correct answer was " + data.answer;
        var questionFooter2 = document.createElement("h4");
        questionFooter2.setAttribute("id", "questionFooter2");
        questionFooter2.innerHTML = "Press Next/Previous to move to next questions";
        questionBox.appendChild(questionFooter);
        questionBox.appendChild(questionFooter1);
        questionBox.appendChild(questionFooter2);
      }
    });
  });

  var closeBtn = document.getElementById("close-btn");
    closeBtn.addEventListener('click', () => {
    location.reload();
  });
}