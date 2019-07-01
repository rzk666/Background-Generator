let inputContainer = document.querySelector(".inputContainer");
let h3 = document.querySelector("h3");

let bodyColorStyle = document.body;

function changeColor(event){
     bodyColorStyle.style.background = 
     "linear-gradient(to right, " + 
                      String(inputContainer.children[0].value) +
                      " , " +
                      String(inputContainer.children[1].value) +
                      " )";
    h3.textContent = String(bodyColorStyle.style.background);
    }

inputContainer.addEventListener("input", changeColor);

