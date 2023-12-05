while (true) {
    
    let resultado;

    alert("Seleccione Calculo a realizar")
    let operacion = Number(prompt("1-Sumar, 2-Resta, 3-Division, 4-Multiplicacion"))

    if (operacion == 1){
        let numero1 = pedir_numero("Primer Número a Sumar");
        let numero2 = pedir_numero("Segundo Número");

        resultado = sumar(numero1, numero2)

    } else if (operacion == 2){
        let numero1 = pedir_numero("Primer Número a Restar");
        let numero2 = pedir_numero("Segundo Número");

        resultado = restar(numero1, numero2);

    } else if (operacion == 3){
        let numero1 = pedir_numero("Primer Número a Dividir");
        let numero2 = pedir_numero("Segundo Número");

        resultado = dividir(numero1, numero2);
        
    } else if (operacion == 4){
        let numero1 = pedir_numero("Primer Número a Multiplicar");
        let numero2 = pedir_numero("Segundo Número");

        resultado = multiplicar(numero1, numero2);
        
    } else {
        alert("Opción Invalida, Coloque la opción ¡¡Correcta!!");

    }

    alert(`Tu resultado es ${resultado}`);

    if (confirm("¿Quiere salir del programa?")) {

        alert("Que tenga un buen dia !");
        break
        
    }

}

function pedir_numero(str) {
    let num = Number(prompt(str));

    while (isNaN(num)) {
        alert("Debes ingresar un Número");
        num = Number(prompt(str));   
    }
    
    return num
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}