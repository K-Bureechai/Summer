function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#enter-a-city");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector("#submit-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);