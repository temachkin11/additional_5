module.exports = function check(str, bracketsConfig) { 
  // your solution 
  var bracketStatus = []; 
  for (let i = 0; i<str.length; i++) 
  bracketStatus[i] = 1; 
  var keySimilar7 = 0; 
  var keySimilar8 = 0; 
  var keySimilar9 = 0; 
  for (let i = 0; i<str.length; i++){ 
  for (let j = bracketsConfig.length-1; j>=0; j--){ 
  if (str[i] === bracketsConfig[j][1]){ 
  if((bracketsConfig[j][1] === '7') && (keySimilar7 === 0)) { 
  keySimilar7 = 1; 
  break; 
  } 
  if((bracketsConfig[j][1] === '8') && (keySimilar8 === 0)) { 
  keySimilar8 = 1; 
  break; 
  } 
  if((bracketsConfig[j][1] === '|') && (keySimilar9 === 0)) { 
  keySimilar9 = 1; 
  break; 
  } 
  let keyIndex = i-1; 
  while ( (bracketStatus[keyIndex] === 0) || (str[keyIndex] !== bracketsConfig[j][0]) ){ 
  keyIndex--; 
  if (keyIndex < 0) return false; 
  } 
  for (var checker = keyIndex+1; checker<i; checker++) 
  if (bracketStatus[checker] !== 0) return false; 
  bracketStatus[keyIndex] = 0; 
  bracketStatus[i] = 0; 
  if((bracketsConfig[j][1] === '7') && (keySimilar7 === 1)) 
  keySimilar7 = 0; 
  if((bracketsConfig[j][1] === '8') && (keySimilar8 === 1)) 
  keySimilar8 = 0; 
  if((bracketsConfig[j][1] === '|') && (keySimilar9 === 1)) 
  keySimilar9 = 0; 
  } 
  } 
  } 
  if (bracketStatus[str.length-1] !== 0) return false; 
  return true 
  }