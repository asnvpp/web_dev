const bars = document.getElementById("bars");
const dropdown = document.getElementById("dropdown");

function show() {
    bars.addEventListener("click", () => {
        console.log("testing");
        dropdown.classList.toggle('show');
    });
}

document.addEventListener("click", function(event) {
    if (event.target !== bars) {
        console.log("testing");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});

show();


/// look at this next
//https://stackoverflow.com/questions/19126432/rotate-a-div-using-javascript