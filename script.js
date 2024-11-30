const button = document.querySelector("#btn");
const selectContent = document.querySelector("#select-item");
const input = document.querySelector("#no-input");
const numberOutput = document.querySelector("#no-count");
const subjectOutput = document.querySelector("#subjec-item");
const stScore = document.querySelector("#st-score");
const studentGrade = document.querySelector("#st-grade");



const outputContent = () => {
  const selectVal = selectContent.value;
  const inputContent = input.value;
  const grades = getGrade(inputContent)
  if(inputContent !== ""){
    let li = document.createElement("li");
    li.innerHTML = selectVal;
    subjectOutput.appendChild(li)
  }else{ alert("Input student score")}
}

const getAVerage = scores => {
  let sum = 0
  let average
  for(let score of scores){
    sum += score;
    average = sum / scores.length
  }
  return average
}


const getGrade = (score) => {
  if(score === 100){
    return "A+";
  }else if(score >=90){
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
  return "F"
}
}

const hasPassingGrade = score => { return getGrade(score) !== "F"}
console.log(hasPassingGrade())

const outputMsg = (totalScore, studentScore) => {

    if(hasPassingGrade(totalScore)){
      return `hello`
    }

}
 