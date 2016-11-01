function convertTemp(temp, unit){
  if (unit === "F"){
    return temp * 1.8 + 32;
  } else if (unit === "C"){
    return (temp - 32) / 9 * 5;   
  }
}

var answer = convertTemp(212, "C");
console.log(answer)