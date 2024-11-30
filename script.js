const button = document.querySelector("#btn");
const selectContent = document.querySelector("#select-item");
const input = document.querySelector("#no-input");
const numberOutput = document.querySelector("#no-count");
const subjectOutput = document.querySelector("#subjec-item");
const studentScore = document.querySelector("#st-score");
const studentGrade = document.querySelector("#st-grade");

const getAVerage = scores => {
  let sum = 0
  let average
  for(let score of scores){
    sum += score;
    average = sum / scores.length
  }
  return average
}
console.log(getAVerage([100, 58, 60, 43, 38, 85, 10]))

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
