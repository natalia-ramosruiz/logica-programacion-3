function calcularFactorial() {
    // Pedir un número al usuario
    let input = document.getElementById("numero").value; 

    // Convertir el valor ingresado a número
    let numero = Number(input);

    // Validar que el usuario ingresó un número válido
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        document.getElementById("resultado").innerText = "Por favor, ingrese un número entero válido.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById("resultado").innerText = `El factorial de ${numero} es: ${factorial}`;
}
