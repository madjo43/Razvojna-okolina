const dateElement = document.querySelector("#date");
const currentDate = new Date();

dateElement.innerHTML = currentDate.toLocaleString();


console.log(currentDate);

