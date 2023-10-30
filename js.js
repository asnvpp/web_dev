const bars = document.getElementById("bars");
const dropdown = document.getElementById("dropdown");
var rotated= false;

function show() {
    bars.addEventListener("click", () => {
        console.log("testing");
        dropdown.classList.toggle('show');
        if (rotated === false) {
            bars.style.transform = "rotate(90deg)";
            rotated = true;
        } else {
            if (rotated === true) {
                bars.style.transform = "rotate(0deg)";
                rotated = false;
            }
        }
    });
}

document.addEventListener("click", function(event) {
    if (event.target !== bars) {
        console.log("testing");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            if (rotated === true) {
                bars.style.transform = "rotate(0deg)";
                rotated = false;
            }
        }
    }
});

show();

