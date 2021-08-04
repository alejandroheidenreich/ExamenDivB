// Llegan 10 vuelos con vacunas de distintos lugares del mundo
// Se debe registrar de cada vuelo:
// -Origen (“Asia”, “Europa”, “USA”)
// -Cantidad de vacunas (no puede ser 0)
// -Costo del vuelo (entre 1 millón y 5 millones de pesos)
// Informar:
// a- El origen que envió mayor cantidad de vacunas
// b- El promedio de vacunas llegadas de Asia
// c- El total sin descuentos a pagar por los gastos de los viajes
// d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, Si se recibieron entre 2 y 4 millones el descuento es del 20% con menor cantidad no hay descuento.
// Informar si hubo descuento de cuanto fue y el importe final con descuento 

function mostrar() {
	let origen,
		vacunas,
		costo,
		vacAsia = 0,
		vacEuropa = 0,
		vacUsa = 0,
		vacTotal,
		costoTotal = 0,
		promAsia,
		mayorOrigen,
		flagD = 1,
		costoDescuento,
		flagAsia = 1;

	for (let i = 0; i < 10; i++) {
		origen = prompt("Ingrese el origen. (“Asia”, “Europa”, “USA”)").toLowerCase();
		while (origen != "asia" && origen != "europa" && origen != "usa") {
			origen = prompt("ERROR: Ingrese un origen VALIDO. (“Asia”, “Europa”, “USA”)").toLowerCase();
		}
		vacunas = parseInt(prompt("Ingrese cantidad de vacunas."));
		while (isNaN(vacunas) || vacunas < 1) {
			vacunas = parseInt(prompt("ERROR: Ingrese una cantidad de vacunas VALIDA."));
		}
		costo = parseInt(prompt("Ingrese el costo del vuelo. (entre 1 millón y 5 millones de pesos)"));
		while (isNaN(costo) || costo < 1000000 || costo > 5000000) {
			costo = parseInt(prompt("ERROR: Ingrese un costo de vuelo VALIDO. (entre 1 millón y 5 millones de pesos)"));
		}

		costoTotal += costo;

		switch (origen) {
			case "asia":
				flagAsia = 0;
				vacAsia += vacunas;
				break;
			case "europa":
				vacEuropa += vacunas;
				break;
			case "usa":
				vacUsa += vacunas;
				break;
		}
	}

	vacTotal = vacAsia + vacEuropa + vacUsa;

	if (vacAsia > vacEuropa && vacAsia > vacUsa) {
		mayorOrigen = "Asia";
	}
	else if (vacEuropa >= vacAsia && vacEuropa > vacUsa) {
		mayorOrigen = "Europa";
	}
	else {
		mayorOrigen = "USA";
	}

	if (flagAsia) {
		promAsia = "no hubo vuelos a Asia";
	}
	else {
		promAsia = vacTotal / vacAsia;
	}


	if (vacTotal > 4000000) {
		//30%
		costoDescuento = costoTotal *.70;
	}
	else if (vacTotal >= 2000000){
		//20%
		costoDescuento = costoTotal *.80;
	}
	else { 
		flagD = 0;
	}


	if (flagD){
		alert(`a- El origen que envió mayor cantidad de vacunas: ${mayorOrigen} \n
b- El promedio de vacunas llegadas de Asia: ${promAsia}\n
c- El total sin descuentos a pagar por los gastos de los viajes: ${costoTotal} \n
d- Hubo descuento y el importe final con descuento es: ${costoDescuento}`);
	}
	else {
		alert(`a- El origen que envió mayor cantidad de vacunas: ${mayorOrigen} \n
b- El promedio de vacunas llegadas de Asia: ${promAsia}\n
c- El total sin descuentos a pagar por los gastos de los viajes: ${costoTotal} \n
d- No hubo descuento`);
	}

}

// Alejandro Heidenreich