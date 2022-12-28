function menuInicio(){
    let total = 0
    let menu 
    do {
        menu = prompt("1-comprar camisetas \n 2-cerrar cesion \n 3-salir")
        menu = parseInt(menu)
        switch(menu){
            case 1: total = total + comprarCamiseta()
                    break
            case 2: alert("el total acumulado "+ total)
                    total = 0
                    break
            case 3: alert("gracias vuelvas pronto...")
                    break
            default: alert("opcion invalida")            
        }  
    } while (menu != 3)
}

function comprarCamiseta(){
    let acumulador = 0
    alert("elija su camiseta para poder generar su presupuesto")
    alert("1-camiseta seleccion hombre \n2-camiseta seleccion mujer")
    let tipo = prompt("elija su tipo de camiseta")
    tipo = parseInt(tipo)

    switch(tipo) {
              case 1: acumulador = 21000
                break
              case 2: acumulador = 19000 
                break 
              default: alert("esa opcion no existe") 
    }
    return acumulador
}


menuInicio()

