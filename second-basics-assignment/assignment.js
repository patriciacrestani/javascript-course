const task3Element = document.getElementById('task-3');

function showAlert() {
    alert('Hello!');
}

function showName(name) {
    alert(name);
}

showAlert();
showName("Patricia");

task3Element.addEventListener("click", showAlert);

function concatStrings(firstString, secondString, thirdString) {
    return (firstString + secondString + thirdString);
}

alert(concatStrings('I ', 'love ', 'cats!'));