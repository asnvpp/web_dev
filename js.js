const bars = document.getElementById("bars");
const dropdown = document.getElementById("dropmenu");


function drop () {
    bars.addEventListener("click", () => {
        console.log("false")
        dropdown.classList.add("show");
        dropdown.classList.add("droplist")
    });

}

drop()