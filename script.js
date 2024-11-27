const selectElem = document.querySelector("#select");
const inputValue = document.querySelector("#st-score");
const button = document.querySelector("#btn");
const message = document.querySelector("#output-msgs")
const outputData = document.querySelector("#data")

button.onclick = addScoreGrade


function checkAverage(scores){
    let totalScore = 0;
    let averageScore;
  for (let score of scores){
     totalScore += score;
     averageScore = totalScore / scores.length
  }
  return averageScore;
}


function getGrade(score){
      if(score === 100){
        return "A+";
      }else if(score >= 90){
        return "A";
      }else if(score >= 80){
        return "B";
      }else if(score >= 70){
        return "C";
      }else if(score >= 60){
        return "D";
      }else if(score >= 50){
        return "E";
      }else{
        return "F";
      }
      
}


function checkGrade(score){
   return getGrade(score) !== "F";
}

function addScoreGrade(){
    let subject = selectElem.value;
    let stScore = inputValue.value;
    let grade = getGrade(stScore);
    let dataOputElem = `<p>${subject}</p> <p>${stScore}</p> <p>${grade}</p> \n`
    outputData.insertAdjacentHTML("beforeend", dataOputElem)
    subject = ""
}


