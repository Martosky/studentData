const selectElem = document.querySelector("#select");
const inputValue = document.querySelector("#st-score");
const button = document.querySelector("#btn");
const message = document.querySelector("#output-msgs")
const outputData = document.querySelector("#data")

button.onclick = addScoreGrade
function addScoreGrade(){
    let subject = selectElem.value;
    let score = inputValue.value;

    let display = `<p>${subject}</p> <p>${score}</p>`
}

function checkScore(score){
      if(score === 100){
        return A++
      }else if(score >= 90){
        return "A";
      }else if(score >= 80){
        return "B";
      }else if(score >= 70){
        return "C";
      }else if(score >= 60){
        return "D";
      }else if(score >= 50){
        return "E"
      }else{
        return "F"
      }
      
}
function checkAverage(score, totalscore){
    
}