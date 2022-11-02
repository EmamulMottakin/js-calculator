let input = document.getElementById('display')

function calculator (number) {
    input.value += number
}

function result () {
    input.value = eval(input.value);
}

function cls () {
    input.value = ""
}

function del () {
    input.value = input.value.slice(0, -1)
}