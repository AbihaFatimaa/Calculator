function appendToDisplay(value){
  document.getElementById('display').value +=value;  
}
function clearDisplay(){
    document.getElementById('display').value = '';
}
function deleteLast(){
let display = document.getElementById('display').value;
document.getElementById('display').value = display.substring(0, display.length - 1);
}
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ("0123456789+-*/.".includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});