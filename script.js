let passwordLength = parseInt(
    prompt("How long would you like your password to be?")
  );
  while (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("Please enter correct password length");
    passwordLength = parseInt(
      prompt("How long would you like your password to be?")
    );
  }
  
  let specialChars = confirm("Would you like special characters(!@#$)?");
  let uppercaseChars = confirm("Would you like uppercase  characters(ABCD)?");
  let lowercaseChars = confirm("Would you like lowercase characters(abcd)?");
  let numberChars = confirm("Would you like to include numbers(1234)?");
  
  while (!specialChars && !uppercaseChars && !lowercaseChars && !numberChars) {
    alert("Please pick at least one!");
    specialChars = confirm("Would you like special characters(!@#$)?");
    uppercaseChars = confirm("Would you like uppercase  characters(ABCD)?");
    lowercaseChars = confirm("Would you like lowercase characters(abcd)?");
    numberChars = confirm("Would you like to include numbers(1234)?");
  }
  
  const upperCaseArray = ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K","L","M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y","Z"];
  const lowerCaseArray = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const specialArray = ["!", "@", "#", "$", "%","&"];
  const numbersArray = ["1", "2", "3", "4", "5","6","7","8","9","0"];
  
  let generatePassword = (maxNum) => {
    let array = [];
    for (let index = 0; index < maxNum; index++) {
      let rand = Math.floor(Math.random() * 4);
      while (
        (!uppercaseChars && rand === 0) ||
        (!lowercaseChars && rand === 1) ||
        (!specialChars && rand === 2) ||
        (!numberChars && rand === 3)
        ){
          rand = Math.floor(Math.random() * 4); 
      }
      if (uppercaseChars && rand === 0) {
          let upperCaseRand = Math.floor(Math.random() * upperCaseArray.length);
          array.push(upperCaseArray[upperCaseRand]);
        }
      if (lowercaseChars && rand === 1) {
        let lowerCaseRand = Math.floor(Math.random() * lowerCaseArray.length);
        array.push(lowerCaseArray[lowerCaseRand]);
      }
      if (specialChars && rand === 2) {
        let specialRand = Math.floor(Math.random() * specialArray.length);
        array.push(specialArray[specialRand]);
      }
      if (numberChars && rand === 3) {
        let numbersRand = Math.floor(Math.random() * numbersArray.length);
        array.push(numbersArray[numbersRand]);
      }
    }
    return array;
  };
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword(passwordLength).join("");
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  