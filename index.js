var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}, you are number ${katzDeliLine.length + 1} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.unshift()}`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine){
  var newStr = "The line is currently: ";
  if (katzDeliLine.length > 0){
    for (var i = 0; i<katzDeliLine.length; i++){
      newStr += `${i+1}. ${katzDeliLine[i]}, `;
    }
    return newStr;
  } else {
    return 'The line is currently empty.';
  }
}