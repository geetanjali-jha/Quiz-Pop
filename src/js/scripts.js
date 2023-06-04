import data from "./../dataset/dataset.json";

const musicData = data.music;
const modArt = data["modern-art"];
const codingData = data.coding;
var score = 0;
// Add Event listener for Music Button click
var musicBtn = document.getElementById("musicButton");
musicBtn.addEventListener("click", () => {
  loadQuiz(musicData[0]);
});

// Add Event listener for Modern Art click
var modernArtBtn = document.getElementById("modernArtButton");
modernArtBtn.addEventListener("click", () => {
  loadQuiz(modArt[0]);
});

// Add Event listener for coding click
var codingBtn = document.getElementById("codingButton");
codingBtn.addEventListener("click", () => {
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

  // create Question Box --> it will contain question details
  var questionBox = document.createElement("div");
  questionBox.setAttribute("id", "question-box");

  var titleDiv = document.createElement("div");
  titleDiv.setAttribute("id", "title");

  var textPara = document.createElement("p");
  textPara.innerHTML = "Music-Quiz Pop";
  textPara.setAttribute("id", "textPara");

  var scoreElement = document.createElement("p");
  scoreElement.setAttribute("id", "score");
  scoreElement.innerHTML = "Score";

  var closeButton = document.createElement("button");
  closeButton.setAttribute("id", "close-btn");
  closeButton.textContent = "Close Quiz";

  titleDiv.appendChild(textPara);
  titleDiv.appendChild(scoreElement);
  titleDiv.appendChild(closeButton);

  var questionHeader = document.createElement("h2");
  questionHeader.setAttribute("id", "questionHeader");
  questionHeader.innerHTML = "Question 1 out of 10: Single Selection";

  // create Question paragraph
  var questionPara = document.createElement("p");
  questionPara.innerHTML = data.question;

  //create first  Option
  var firstOption = document.createElement("input");
  firstOption.setAttribute("type", "radio");
  firstOption.setAttribute("name", "radioButton");
  firstOption.setAttribute("answer", data.answer);
  firstOption.setAttribute("value", data.options[0]);
  firstOption.setAttribute("id", "radio0");

  //set label for first option
  var firstLabel = document.createElement("Label");
  firstLabel.innerHTML = data.options[0];
  firstLabel.setAttribute("id", "label0");
  var break1 = document.createElement("br");

  //create second  Option
  var secondOption = document.createElement("input");
  secondOption.setAttribute("type", "radio");
  secondOption.setAttribute("name", "radioButton");
  secondOption.setAttribute("answer", data.answer);
  secondOption.setAttribute("value", data.options[1]);
  secondOption.setAttribute("id", "radio1");

  //set label for second option
  var secondLabel = document.createElement("Label");
  secondLabel.innerHTML = data.options[1];
  secondLabel.setAttribute("id", "label1");
  var break2 = document.createElement("br");

  //create third  Option
  var thirdOption = document.createElement("input");
  thirdOption.setAttribute("type", "radio");
  thirdOption.setAttribute("name", "radioButton");
  thirdOption.setAttribute("answer", data.answer);
  thirdOption.setAttribute("value", data.options[2]);
  thirdOption.setAttribute("id", "radio2");

  //set label for third option
  var thirdLabel = document.createElement("Label");
  thirdLabel.innerHTML = data.options[2];
  thirdLabel.setAttribute("id", "label2");
  var break3 = document.createElement("br");

  //create fourth  Option
  var fourthOption = document.createElement("input");
  fourthOption.setAttribute("type", "radio");
  fourthOption.setAttribute("name", "radioButton");
  fourthOption.setAttribute("answer", data.answer);
  fourthOption.setAttribute("value", data.options[3]);
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
  //   questionBox.appendChild(nextButton);
  parentNode.appendChild(questionBox);

  var radios = document.querySelectorAll(
    'input[type=radio][name="radioButton"]'
  );

  radios.forEach((radio) =>
    radio.addEventListener("change", () => {
      checkButton.removeAttribute("disabled");
      checkButton.setAttribute("style", "background-color:teal");
      if (radio.value == data.answer) {
        if (setScore == true) {
          score = score + 1;
          setScore = false;
        }
      }
    })
  );

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
        questionFooter1.innerHTML = "Press Next to Continue";
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
        questionFooter2.innerHTML = "Press Next to Continue";
        questionBox.appendChild(questionFooter);
        questionBox.appendChild(questionFooter1);
        questionBox.appendChild(questionFooter2);
        $("input").click(function (e) {
          event.preventDefault();
        });
      }
    });
  });
}
