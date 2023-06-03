import data from './../dataset/dataset.json';

const musicData = data.music;
const modArt = data['modern-art'];
const codingData = data.coding;

// Add Event listener for Music Button click
var musicBtn = document.getElementById("musicButton");
musicBtn.addEventListener('click', () => {
    loadQuiz(musicData[0]);
});

// Add Event listener for Modern Art click
var modernArtBtn = document.getElementById("modernArtButton");
modernArtBtn.addEventListener('click', () => {
    loadQuiz(modArt[0]);
});

// Add Event listener for coding click
var codingBtn = document.getElementById("codingButton");
codingBtn.addEventListener('click', () => {
    console.log(codingData);
    loadQuiz(codingData[0]);
});


function loadQuiz(data) {
    console.log(data);

    //get parent Div
    var parentNode = document.getElementById("mainDiv");
    var topicBox = document.getElementById("topicDiv");

    topicBox.remove();

    // create Question Box --> it will contain question details
    var questionBox = document.createElement("div");

    // create Question paragraph
    var questionPara = document.createElement("p");
    questionPara.innerHTML = data.question;

    //create first  Option
    var firstOption = document.createElement("input");
    firstOption.setAttribute("type", "radio");
    firstOption.setAttribute("name", "radioButton");
    
    //set label for first option
    var firstLabel = document.createElement("Label");
    firstLabel.innerHTML = data.options[0];
    var break1 = document.createElement("br");

    //create first  Option
    var secondOption = document.createElement("input");
    secondOption.setAttribute("type", "radio");
    secondOption.setAttribute("name", "radioButton");
    
    //set label for first option
    var secondLabel = document.createElement("Label");
    secondLabel.innerHTML = data.options[1];
    var break2 = document.createElement("br");

    //create first  Option
    var thirdOption = document.createElement("input");
    thirdOption.setAttribute("type", "radio");
    thirdOption.setAttribute("name", "radioButton");
    
    //set label for first option
    var thirdLabel = document.createElement("Label");
    thirdLabel.innerHTML = data.options[2];
    var break3 = document.createElement("br");


    //create first  Option
    var fourthOption = document.createElement("input");
    fourthOption.setAttribute("type", "radio");
    fourthOption.setAttribute("name", "radioButton");
    
    //set label for first option
    var fourthLabel = document.createElement("Label");
    fourthLabel.innerHTML = data.options[3];
    var break4 = document.createElement("br");

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

    parentNode.appendChild(questionBox);
}