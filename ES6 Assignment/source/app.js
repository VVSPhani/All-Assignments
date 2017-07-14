const a = document.getElementById("button1");
a.addEventListener('click',decodedType);

function decodedType() {  
  let sum = 0;
  let temp = 0;
  let tempArr = [];
  let j = 0;
  const number = document.getElementById("numb").value;
  let arr = [];
  arr = Array.from(number.toString()).map(Number);

  for (let i = 0; i < arr.length; i++) {
    j = 0;
    tempArr = [];
    for (let k = i + 1; k < i + arr[i] + 1; k++) {
      tempArr[j] = arr[k]; 
      j++;  		
    }
    temp = Number(tempArr.join(''));
    sum = temp + sum;
    i = i + arr[i];
  }
  if (sum % 2 === 0) {
    document.getElementById("demo").innerHTML = "Even Number";
  }
  else {
    document.getElementById("demo").innerHTML = "Odd Number";
  }
}  
