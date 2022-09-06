function getRandomNumber(min, max) {
  let range = max - min + 1;
  let random = Math.floor(Math.random() * range) + min;
  return random;
}

function getModul(number, modul) {
  if (NaN(number) && NaN(modul)) {
    return number % modul == 0;
  } else {
    alert("please insert a number");
  }
}

function getResetHTML(value) {
  value.innerHTML = "";
}

function getPromptSwitch(firstArray, secondArray) {
  for (let index = 0; index < firstArray.length; index++) {
    // const element = array[index];
    switch (index) {
      case 0:
        secondArray.push(
          parseInt(prompt("scrivi il numero che era nel verde"))
        );

        break;
      case 1:
        secondArray.push(
          parseInt(prompt("scrivi il numero che era nel rosso"))
        );

        break;
      case 2:
        secondArray.push(parseInt(prompt("scrivi il numero che era nel blu")));

        break;
      case 3:
        secondArray.push(
          parseInt(prompt("scrivi il numero che era nel giallo"))
        );
        break;
    }
  }
}
/**
 *
 * @param {PUT FIRST ARRAY FOR CONFRONT} firstArray
 * @param {PUT YOUR SECOND ARRAY FOR CONFRONT} secondArray
 * @param {PUT YOUR ARRAY FOR ELEMENT CORRECT} correct
 * @param {PUT YOUR ARRAY FOR ELEMENT NOT CORRECT} fault
 * @param {PUT YOUR ARRAY FOR THE WRONG ELEMENTS} error
 */
function getConfrontArray(firstArray, secondArray, correct, fault, error) {
  for (let index = 0; index < firstArray.length; index++) {
    const element_FirstArray = firstArray[index];
    const element_SecondArray = secondArray[index];
    if (element_FirstArray == element_SecondArray) {
      correct.push(element_FirstArray);
    } else {
      fault.push(element_FirstArray);
      error.push(element_SecondArray);
    }
  }
  if (secondArray.includes(NaN)) {
    alert("neanca bon de scrivere un numero... cossa vuto fare?");
  } else if (correct.length == firstArray.length) {
    alert("le mie congratulazioni hai vinto!");
  } else if (fault.length == firstArray.length) {
    alert(
      "sei un disastro! meglio se ti dai all'ippica, le hai sbagliate tutte!"
    );
  } else {
    alert(
      `potresti fare meglio, hai indovinato ${correct} e hai sbagliato ${fault} scrivendo invece ${error}, per un totale di ${correct.length} risposte corrette e ${fault.length} risposte sbagliate`
    );
    alert(
      "riprova mi dai speranze! non come chi non sa scrivere un numero o ha una memoria da criceto"
    );
  }
}
