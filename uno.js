// Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
// De cada vacunado se solicita:
// -nombre (entre 3 y 10 caracteres)
// -edad ( mayor o igual a 12)
// -vacuna (“rusa”, “china”, “americana”)
// Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
// -dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
// -sexo( “f” o “m” )
// Informar:
// a- Promedio de edad de los que se vacunaron con la rusa
// b- Nombre y vacuna de la mujer con más edad
// c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
// d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
// e- Vacuna menos inoculada

function mostrar() {
	let nombre,
		edad,
		vacuna,
		dosis,
		sexo,
		vacA = 0,
		vacR = 0,
		vacC = 0,
		promeEdadRusa = 0,
		mujerMayorEdad,
		mujerMayorNombre,
		mujerMayorVacuna,
		mujerMayorRespt,
		mayoresAmericana = 0,
		porcentajeMayoresAmerica,
		dDos = 0,
		rDos = 0,
		menorVacuna,
		flagE = 1,
		flagA = 1,
		flagR = 1,
		flagM = 1,
		flagD = 1,
		respuesta;

	do {
		nombre = prompt("Ingrese nombre")
		while (nombre == "") {
			nombre = prompt("ERROR: Ingrese un nombre VALIDO.");
		}

		edad = parseInt(prompt("Ingrese edad."));
		while (isNaN(edad) || edad < 0) {
			edad = parseInt(prompt("ERROR: Ingrese una edad VALIDA."));
		}

		if (edad >= 12 && edad <= 17) {
			vacuna = "americana";
		}
		else {
			vacuna = prompt("Ingrese el tipo de vacuna. (“Rusa”, “China”, “Americana”)").toLowerCase();
			while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana") {
				vacuna = prompt("ERROR: Ingrese un tipo de vacuna VALIDO. (“Rusa”, “China”, “Americana”)").toLowerCase();
			}
		}

		dosis = prompt("Ingrese dosis. (P/S)").toLowerCase();
		while (dosis != "p" && dosis != "s") {
			dosis = prompt("ERROR: Ingrese una dosis VALIDA. (P/S)").toLowerCase();
		}

		sexo = prompt("Ingrese sexo. (M/F)").toLowerCase();
		while (sexo != "m" && sexo != "f") {
			sexo = prompt("ERROR: Ingrese sexo VALIDO. (M/F)").toLowerCase();
		}

		switch (vacuna) {
			case "rusa":
				vacR++;
				promeEdadRusa += edad;
				flagR = 0;
				break;
			case "china":
				vacC++;
				break;
			case "americana":
				vacA++;
				flagA = 0;
				if (edad >= 60) {
					mayoresAmericana++;
					flagM = 0;
				}
				break;
		}


		if ((flagE || mujerMayorEdad < edad) && sexo == "f") {
			mujerMayorEdad = edad;
			mujerMayorNombre = nombre;
			mujerMayorVacuna = vacuna;
			flagE = 0;
		}


		if (dosis == "s") {
			dDos++;
			flagD = 0;
		}

		respuesta = prompt("Quiere agregar otra persona? Si/No").toLowerCase();
		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Respuesta Incorrecta: Quiere agregar otra persona? Si/No").toLowerCase();
		}
	} while (respuesta == "si");

	if (flagR) {
		promeEdadRusa = "No hubo ninguna inoculacion de la vacuna rusa";
	}
	else {
		promeEdadRusa /= vacR;
	}

	if (flagE) {
		mujerMayorResp = "No hubo ninguna mujer vacunada";
	}
	else {
		mujerMayorResp = mujerMayorNombre + " con la vacuna " + mujerMayorVacuna
	}

	if (flagM) {
		porcentajeMayoresAmerica = "No hubo ningun mayor edad vacunado con la americana";
	}
	else {
		porcentajeMayoresAmerica = (mayoresAmericana * 100) / vacA;
	}

	if (flagD) {
		rDos = "No hubo ninguna segunda dosis aplicada";
	}
	else {
		rDos = (dDos * 100) / (vacR + vacC + vacA);
	}

	if (vacR > vacC && vacR > vacA) {
		menorVacuna = "Rusa";
	}
	else if (vacC >= vacR && vacC > vacA) {
		menorVacuna = "China";
	}
	else {
		menorVacuna = "Americana";
	}

	alert(`a- Promedio de edad de los que se vacunaron con la rusa: ${promeEdadRusa} \n
b- Nombre y vacuna de la mujer con más edad: ${mujerMayorResp} \n
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad: ${porcentajeMayoresAmerica} %\n
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados: ${rDos} %\n
e- Vacuna menos inoculada: ${menorVacuna}`);

}

// Alejandro Heidenreich