// Pedir un número al usuario
let numero = prompt("Ingresa un número para calcular su factorial:");

// Convertir el valor ingresado a número
numero = Number(numero);

// Verificar si es un número válido
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, ingresa un número válido mayor o igual a 0.");
} else {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
}

function calcularFactorial() {
    let input = document.getElementById("numero").value; // Obtener el valor del input
    let numero = Number(input); // Convertirlo a número

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
