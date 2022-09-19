function calcular() {
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)

    let soma = peso / (altura * altura)

    if (soma <= 18.5) {
        document.getElementById('resultado').innerHTML = `<p> Seu teste deu <strong>${soma}</strong>, você esta abaixo do peso. </p> `
    }
    else if (soma >= 18.6 && soma <= 24.9) {
        document.getElementById('resultado').innerHTML = `<p> Seu teste deu <strong>${soma}</strong>, você esta no peso ideal (parbéns). </p> `
    }
    else if (soma >= 25 && soma <= 29.9) {
        document.getElementById('resultado').innerHTML = `<p> Seu teste deu <strong>${soma}</strong>, você esta levemente acima do peso. </p> `
    }
    else if (soma >= 30 && soma <= 34.9) {
        document.getElementById('resultado').innerHTML = `<p> Seu teste deu <strong>${soma}</strong>, você tem obesidade de 1º grau. </p> `
    }
    else if (soma >= 35 && soma <= 39.9) {
        document.getElementById('resultado').innerHTML = `<p> Seu teste deu <strong>${soma}</strong>, você tem obesidade de 2º grau (severa). </p> `
    }
    else {
        document.getElementById('resultado').innerHTML = `<p> Seu teste deu <strong>${soma}</strong>, você tem obesidade de 3º grau (mórbida). </p> `
    }

}