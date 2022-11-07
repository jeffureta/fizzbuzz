function getNumber() {
    return Number(document.querySelector("input").value)
}
function makeArray(number) {
    let myArray = [];
    for (let i = 0; i < number; i++) {
        myArray.push(i+1)
    }
    return myArray;
}
function replaceNumber(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] % (3 * 5) == 0) {array[index] = "fizzbuzz"}
        else if(array[index] % 3 == 0) {array[index] = "fizz"}
        else if (array[index] % 5 == 0) {array[index] = "buzz"}   
    }
    return array;
}
function getPara() {
    return document.querySelector("p")
}
function getInput() {
    return document.querySelector("input")
}
function convertToString(array) {
    return array.toString()
}
function getAnswer() {
    return convertToString(
            replaceNumber(
                makeArray(
                    getNumber()
                )))
}
function showResult() {
    return getPara().textContent = getAnswer()
}
getInput().addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        showResult();
    }
})