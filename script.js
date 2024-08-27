function criptografar() {
    let texto = document.querySelector(".input").value;
    let outputImage = document.querySelector(".output-image")
    let outputText = document.querySelector(".output-text")
    let outputResult = document.querySelector(".output-result")
    let copyboardButton = document.querySelector("#copyboard-button")

    if (texto != "") {
        outputImage.style.setProperty("display", "none")
        outputText.style.setProperty("display", "none")
        copyboardButton.style.setProperty("display", "block")
        outputResult.style.setProperty("display", "block")

        outputResult.innerHTML = criptografarTexto(texto)
    } else {
        outputImage.style.setProperty("display", "block")
        outputText.style.setProperty("display", "block")
        copyboardButton.style.setProperty("display", "none")
        outputResult.style.setProperty("display", "none")
        outputResult.innerHTML = texto
    }

}

function criptografarTexto(texto) {
    texto = texto.replace("e", "enter")
    texto = texto.replace("i", "imes")
    texto = texto.replace("a", "ai")
    texto = texto.replace("o", "ober")
    texto = texto.replace("u", "ufat")

    return texto
}

function descriptografar() {
    let outputResult = document.querySelector(".output-result");

    if (outputResult.innerHTML != "") {
        outputResult.innerHTML = descriptografarTexto(outputResult.innerHTML)
    }
}

function descriptografarTexto(texto) {
    texto = texto.replace("enter", "e")
    texto = texto.replace("imes", "i")
    texto = texto.replace("ai", "a")
    texto = texto.replace("ober", "o")
    texto = texto.replace("ufat", "u")

    return texto
}

function copyboard(element) {
    let texto = document.querySelector(element).innerHTML
    navigator.clipboard.writeText(texto)
}