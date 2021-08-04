// El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
// Al ser hisopadas se ingresan sus datos en la aplicación:
// -nacionalidad ("argentina", "extranjero")
// -resultado("positivo", "negativo")
// -edad(entre 18 y 65)
// -cepa("delta", "alfa", "beta", "ninguna")
// Para poder ingresar ninguna el resultado debe ser negativo
// Luego del ingreso informar:
// a- Porcentaje de positivos
// b- Porcentaje de negativos
// c- Cuál es la cepa más encontrada
// d- Edad del mayor extranjero contagiado
// e- Cantidad de personas argentinas contagiadas con la delta

function mostrar() {
    let nacionalidad,
        resultado,
        edad,
        cepa,
        cantPos,
        porPos,
        porNeg,
        cantNeg,
        cDelta = 0,
        cAlfa = 0,
        cBeta = 0,
        mayCepa,
        flagE = 1,
        mayorContag,
        deltaArg = 0;

    for (let i = 0; i < 8; i++) {
        nacionalidad = prompt("Ingrese nacionalidad. (Argentina/Extranjero)").toLowerCase();
        while (nacionalidad != "argentina" && nacionalidad != "extranjero") {
            nacionalidad = prompt("ERROR: Ingrese nacionalidad VALIDA. (Argentina/Extranjero)").toLowerCase();
        }

        resultado = prompt("Ingrese resultado. (Positivo/Negativo)").toLowerCase();
        while (resultado != "positivo" && resultado != "negativo") {
            resultado = prompt("ERROR: Ingrese resultado VALIDO. (Positivo/Negativo)").toLowerCase();
        }

        edad = parseInt(prompt("Ingrese edad. (entre 18 y 65)"));
        while (isNaN(edad) || edad < 18 || edad > 65) {
            edad = parseInt(prompt("ERROR: Ingrese una edad VALIDA. (entre 18 y 65)"));
        }

        cepa = prompt("Ingrese el tipo de cepa. (Delta/Alfa/Beta/Ninguna)").toLowerCase();
        if (resultado == "negativo") {
            cantNeg++;
            while (cepa != "ninguna") {
                cepa = prompt("ERROR: Ingrese un tipo de cepa VALIDO. (Ninguna)").toLowerCase();
            }
        }
        else {
            cantPos++;
            while (cepa != "delta" && cepa != "alfa" && cepa != "beta") {
                cepa = prompt("ERROR: Ingrese un tipo de cepa VALIDO. (Delta/Alfa/Beta)").toLowerCase();
            }
        }

        switch (cepa) {
            case "delta":
                cDelta++;
                if (nacionalidad == "argentina") {
                    deltaArg++;
                }
                break;
            case "alfa":
                cAlfa++;
                break;
            case "beta":
                cBeta++;
                break;
        }


        if ((flagE || mayorContag < edad) && nacionalidad == "extranjero") {
            mayorContag = edad;
        }

    }

    if (cantPos) {
        porPos = (cantPos * 100) / (cantPos + cantNeg);
    }
    else {
        porPos = "No hubo ningun caso positivo";
    }
    if (cantNeg) {
        porNeg = (cantNeg * 100) / (cantPos + cantNeg);
    }
    else {
        porNeg = "No hubo ningun caso positivo";
    }

    if (cDelta == 0 && cAlfa == 0 && cBeta == 0) {
        mayCepa = "No se encontro ninguna cepa"
    }
    else {
        if (cDelta > cAlfa && cDelta > cBeta) {
            mayCepa = "Delta";
        }
        else if (cAlfa >= cDelta && cAlfa > cBeta) {
            mayCepa = "Alfa";
        }
        else {
            mayCepa = "Beta";
        }
    }


    alert(`a- Porcentaje de positivos: ${porPos} %\n
b- Porcentaje de negativos: ${porNeg} %\n
c- Cuál es la cepa más encontrada: ${mayCepa}\n
d- Edad del mayor extranjero contagiado: ${mayorContag}\n
e- Cantidad de personas argentinas contagiadas con la delta ${deltaArg}`);


}

// Alejandro Heidenreich