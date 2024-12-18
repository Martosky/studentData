const button = document.querySelector("#btn");
const selectContent = document.querySelector("#select-item");
const input = document.querySelector("#no-input");
const output = document.querySelector("#output")

const outputContent = () => {
  const selectVal = selectContent.value;
  const inputContent = input.value;
  const grades = getGrade(inputContent);
  const displayInputs = output;
  if(inputContent !== ""){
    let contents = document.createElement("div")
    contents.classList.add("output-items")
    contents.innerHTML  = `<p class="output-elem no">#</p> <p class="output-elem no-count">${selectVal}</p> 
    <p class="output-elem">${inputContent}</p> <p class="output-elem">${grades}</p>`
    displayInputs.appendChild(contents)
  }else{alert("Score field is empty. please input a valid score")}
  remarksMsg()
  saveData()
}


const getGrade = (score) => {
  if(score == 100){
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



const getAVerage = scores => {
  let sum = 0
  let average
  for(let score of scores){
    sum += score;
    average = sum / scores.length
  }
  return average
}



const hasPassingGrade = score => { return getGrade(score) !== "F"}


const outputMsg = (totalScore, studentScore) => {

    if(hasPassingGrade(totalScore)){
      return `hello`
    }

}


  
  
 