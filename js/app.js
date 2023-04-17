// Declaracion de  variables  // 
let articulo1 = '1-smartphone';
let articulo2 = '2-auriculares';
let articulo3 = '3-cargador inalambrico';
let articulo4 = '4-parlante bluetooth';
let articulo5 = '5-cable hdmi';
let salir     = '0-salir'
let nArticulos = 0
let respuesta;
let listaArticulos = '';
let listaArticulos2 = '';

respuesta = prompt('Bienvenida a nuestra tienda virtual'+'\n'+'Eres mayor de 18 años (si/no)');

switch( respuesta.toLowerCase()) {
        case 'si':
                listaArticulos = prompt('Seleccione una opción de la siguiente lista de artículos que desea comprar =>'+'\n'+articulo1+'\n'+articulo2+'\n'+articulo3+'\n'+articulo4+'\n'+articulo5+'\n'+salir+'\n'+
                                        'Debe seleccionar entre los valores 1 a 5 o 0(cero) para salir');

                if ( listaArticulos == '0')
                {
                        alert('Muchas gracias por su visita');
                }                                        

                if ( listaArticulos!='1' && listaArticulos!='2' && listaArticulos!='3' && listaArticulos!='4' && listaArticulos!='5')
                {
                        alert('Debe seleccionar un opción valida, valores entre 1 a 5, muchas gracias por su vista');                        
                }
                
                nArticulos = nArticulos + 1

                while (listaArticulos2!='0') {
                
                        listaArticulos2 = prompt('Se agrego el artículo '+listaArticulos+'\n'+'Desea agregar otra opción de la siguiente lista de artículos =>'+'\n'+articulo1+'\n'+articulo2+'\n'+articulo3+'\n'+articulo4+'\n'+articulo5+'\n'+salir+'\n'+
                        'Debe seleccionar entre los valores 1 a 5 o 0(cero) para salir');
                                
                        if (listaArticulos2=='1' || listaArticulos2=='2' || listaArticulos2=='3' || listaArticulos2=='4' || listaArticulos2=='5' || listaArticulos2=='0') {
                                if (listaArticulos2!='0') {
                                        listaArticulos = listaArticulos+'\n'+listaArticulos2                                        
                                        nArticulos = nArticulos + 1
                                }                        
                        } else {
                                alert('Debe seleccionar un opción valida, valores entre 1 a 5 o 0(cero) para salir');
                        }
                
                }

                if (listaArticulos2=='0') {
                        alert('Su lista de compras contiene los siguientes articulos => '+
                        listaArticulos+'\n'+'Cantidad de articulos: '+nArticulos+'\n'+'\n'+'Muchas gracias por su visita');                        
                }
                
                break
        
        case 'no':
                alert('Debe ser mayor de 18 años, gracias por su visita');
                break
        default:
                alert('Debe indicar "si" o "no"');
}