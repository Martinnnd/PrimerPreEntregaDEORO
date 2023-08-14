let nombreUsuario = prompt("Ingrese su nombre de usuario")
let suContrasenia = prompt("Ingrese su contraseña")



alert("Bienvenido a nuestra tienda " + nombreUsuario);

let opcion = 0;    

do{
    opcion = parseInt(prompt("Menu principal:\n\n1- Ver categoria de productos\n2- Ver sucursales\n3- contactos\n\nPara salir ingrese 9"));
    switch(opcion){
        case 9:
            alert("Gracias por visitar nuestra tienda, vuelva pronto");
            break;
        case 1:
            opcionesCategorias();
            break;
        case 2:
            let elegirSucursal = parseInt(prompt("Nuestras sucursales:\n\n 1.Sucursal Palermo\n 2.Sucursal Belgrano\n 3.Sucursal San isidro"))
            if(elegirSucursal == 1){
                alert("Sucursal de Palermo\n\n Av Libertador 23423")
            }
            else if(elegirSucursal == 2){
                alert("Sucursal de Belgrano\n\n Av Cabildo 2446")
            }
            else if(elegirSucursal == 3){
                alert("Sucursal de San Isidro\n\n Calle San Martin 2457")
            }
            else{
                alert("Opcion invalida, volviendo al menu principal")
            }
            break;
        case 3:
            alert("Contacto:\n\n *Whatsapp 1154224522\n *Email tiendadecomponentes@gmail.com\n *instagram @TiendaDeComponentes")
            break;
        default:
            alert("Opcion no valida, vuelva a ingresar una opcion")
            break;
        }
} while(opcion !== 9)








function opcionesCategorias(){
    let opcionCategorias = parseInt(prompt("Categoria de productos: \n\n 1- Placas de video\n 2- Microprocesadores\n 3- Motherboards\n 4- Memorias RAM\n 5- Perifericos\n 0- Para salir de la tienda "))
            switch(opcionCategorias){
                case 1:
                    let elegirPlaca = parseInt(prompt("Placas de video:\n\n 1.RTX 3080 = 1000u$d\n 2.RTX 2080 = 600u$d\n 3.GTX 1080 = 300u$d" ))
                    if(elegirPlaca == 1){
                        alert("Usted ha agregado Placa RTX 3080 al carrito")
                    }
                    else if(elegirPlaca == 2){
                        alert("Usted ha agregado Placa RTX 2080 al carrito")
                    }
                    else if(elegirPlaca == 3){
                        alert("Usted ha agregado Placa GTX 1080 al carrito")
                    }
                    else{
                        alert("Opcion invalida, volviendo al menu principal")
                    }
                    break;
                case 2: 
                    let elegirProcesador = parseInt(prompt("Microprocesadores: \n\n 1.Intel I5 13ra Generacion = 150u$d\n 2.Intel I7 13ra Generacion = 200u$d\n 3.Ryzen 5 3200 = 200u$d"));
                    if(elegirProcesador == 1){
                        alert("Usted ha agregado Intel I5 13ra generacion al carrito")
                    }
                    else if(elegirProcesador == 2){
                        alert("Usted ha agregado Intel I7 13ra generacion al carrito")
                    }
                    else if(elegirProcesador == 3){
                        alert("Usted ha agregado Ryzen 5 3200 al carrito")
                    }
                    else{
                        alert("Opcion invalida, volviendo al menu principal")
                    }
                    break;
                case 3:
                    let elegirMother = parseInt(prompt("Motherboards: \n\n 1.Gigabyte B450m = 100u$d\n 2.Asrock H510 Pro = 210u$d\n 3.Asus Prime H610m-e = 250u$d"));
                    if(elegirMother == 1){
                        alert("Usted ha agregado Mother Gigabyte B450m al carrito")
                    }
                    else if(elegirMother == 2){
                        alert("Usted ha agregado Mother Asrock H510 pro al carrito")
                    }
                    else if(elegirMother == 3){
                        alert("Usted ha agregado Asus Prime H610-e al carrito")
                    }
                    else{
                        alert("Opcion invalida, volviendo al menu principal")
                    }
                    break;
                case 4:
                    let elegirRam = parseInt(prompt("Memorias RAM:\n\n 1.Memoria Patriot V4s viper Steel Series 8gb ddr4 = 50u$d\n 2.Memoria Netac Shadow 8gb ddr4 = 50u$d\n 3.Memoria Patriot Signature Line 16gb ddr4 = 90u$d"));
                    if(elegirRam == 1){
                        alert("Usted ha agregado Memoria Patriot V4s viper Steel Series 8gb ddr4 al carrito")
                    }
                    else if(elegirRam == 2){
                        alert("Usted ha agregado Memoria Netac Shadow 8gb ddr4 al carrito")
                    }
                    else if(elegirRam == 3){
                        alert("Usted ha agregado Memoria Patriot Signature Line 16gb ddr4 al carrito")
                    }
                    else{
                        alert("Opcion invalida, volviendo al menu principal")
                    }
                    break;
                case 5:
                    let elegirPeriferico = parseInt(prompt("Perifericos:\n\n 1.Auriculares Redragon Ares = 30u$d\n 2.Mouse Gamer Razer Viper = 35u$d\n 3.Teclado Gamer Razer Blackwidow = 40u$d"));
                    if(elegirPeriferico == 1){
                        alert("Usted ha agregado Auriculares Redragon Ares al carrito")
                    }
                    else if(elegirPeriferico == 2){
                        alert("Usted ha agregado Mouse Gamer Razer Viper al carrito")
                    }
                    else if(elegirPeriferico == 3){
                        alert("Usted ha agregado Teclado Gamer Razer Blackwidow      al carrito")
                    }
                    else{
                        alert("Opcion invalida, volviendo al menu principal")
                    }
                    break;
                case 0:
                    alert("Gracias por visitar nuestra tienda, vuelva pronto");
                    break;
                default:
                    alert("Opcion no valida, vuelva a ingresar una opcion");
                    break;
            }
}