let output = document.getElementById("output");


function display(num) {
    output.value += num;
}

function equal() {
    try {
        output.value = eval(output.value);
    }

    catch(error) {
        alert("Invalid Input")

    }
}

function cl() {
    output.value = "";
}

function del() {
    output.value = output.value.slice(0, -1);
}