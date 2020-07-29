/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:8080/tibuuroncitos/rest/cliente'
    }).done(function(data){
        $.each(data, function(i, item) {
            $("#clientes").append('<li style="padding:0.1rem;">'+ '<button type="button" class="btn btn-info" onclick="datosCliente('+item['id']+')">Ver</button>'+ '&nbsp;&nbsp;&nbsp;' +item['nombre']+'</li>');
        });
    });
});

$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:8080/tibuuroncitos/rest/transaccion'
    }).done(function(data){
        $.each(data, function(i, item) {
            $("#transacciones").append('<li style="padding:0.1rem;">'+ '<button type="button" class="btn btn-success" onclick="datosTransaccion('+item['nroTrans']+')">Ver</button>'+ '&nbsp;&nbsp;&nbsp;' +item['nroTrans']+'</li>');
        });
    });
});

$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:8080/tibuuroncitos/rest/cuenta'
    }).done(function(data){
        $.each(data, function(i, item) {
            $("#cuentas").append('<li style="padding:0.1rem;">'+ '<button type="button" class="btn btn-dark" onclick="datosCuenta('+item['nroCuenta']+')">Ver</button>'+ '&nbsp;&nbsp;&nbsp;' +item['nroCuenta']+'</li>');
        });
    });
});

$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:8080/tibuuroncitos/rest/bono'
    }).done(function(data){
        $.each(data, function(i, item) {
            $("#bonos").append('<li style="padding:0.1rem;">'+ '<button type="button" class="btn btn-danger" onclick="datosBono('+item['nroBono']+')">Ver</button>'+ '&nbsp;&nbsp;&nbsp;' +item['nroBono']+'</li>');
        });
    });
});
//JS Bonos api
$(document).ready(function(){
    $("#enviarBono").click(function(x){
        x.preventDefault();
        let precioCompra = $("#inputPrecioCompra").val();
        let vencimiento = $("#inputVencimientoBono").val() + "T03:00:00Z[UTC]";
        let precioPago = $("#inputPrecioPago").val();
        $.ajax({
            url: "http://localhost:8080/tibuuroncitos/rest/bono",
            type: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({"precioCompra": precioCompra, "precioPago": precioPago, "vencimiento": vencimiento}),
            success: function (){
                window.location.reload(true);
            },
            error: function (data) {
                console.log('Error:', data);
            }
        })
    });
    $("#eliminarBono").click(function(x){
        x.preventDefault();
        let nroBono = $("#inputNroBono").val();
        $.ajax({
            url: "http://localhost:8080/tibuuroncitos/rest/bono/" + nroBono,
            type: 'delete',
            contentType: 'application/json',
            dataType: 'json',
            success: function (){
                window.location.reload(true);
            },
            error: function (data) {
                console.log('Error:', data);
            }
        })
    });
});
//JS Cuentas api
$(document).ready(function(){
    $("#enviarCuenta").click(function(x){
        x.preventDefault();
        let balance = $("#inputBalance").val();
        let estadoCuenta = $("#inputEstadoCuenta").val();
        $.ajax({
            url: "http://localhost:8080/tibuuroncitos/rest/cuenta",
            type: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({"balance": balance, "estadoCuenta": estadoCuenta}),
            success: function (){
                window.location.reload(true);
            },
            error: function (data) {
                console.log('Error:', data);
            }
        })
    });
    $("#eliminarCuenta").click(function(x){
        x.preventDefault();
        let nroCuenta = $("#inputNroCuenta").val();
        $.ajax({
            url: "http://localhost:8080/tibuuroncitos/rest/cuenta/" + nroCuenta,
            type: 'delete',
            contentType: 'application/json',
            dataType: 'json',
            success: function (){
                window.location.reload(true);
            },
            error: function (data) {
                console.log('Error:', data);
            }
        })
    });
});
//JS Clientes api
$(document).ready(function(){
    $("#enviarCliente").click(function(x){
        x.preventDefault();
        let nombre = $("#inputNombreCliente").val();
        let apellido = $("#inputApellidoCliente").val();
        let dni = $("#inputDNICliente").val();
        let fechaNacimiento = $("#inputDateCliente").val() + "T03:00:00Z[UTC]";
        let situacionEco = $("#inputSituacionEcoCliente").val();
        let telefono = $("#inputTelefonoCliente").val();
        let direccion = $("#inputDireccionCliente").val();
        console.log(nombre);
        console.log(apellido);
        console.log(dni);
        console.log(fechaNacimiento);
        console.log(situacionEco);
        console.log(telefono);
        console.log(direccion);
         $.ajax({
            url: "http://localhost:8080/tibuuroncitos/rest/cliente",
            type: 'post',
            contentType: 'application/json',
            dataType: 'json',
            //data: JSON.stringify({"nombre": nombre, "apellido": apellido, "DNI": dni, "fechaNacimiento": fechaNacimiento, "situacionEco": situacionEco, "telefono": telefono, "direccion": direccion}),
            data: JSON.stringify({
                                    "apellido": nombre,
                                    "DNI": dni,
                                    "direccion": direccion,
                                    "fechaNacimiento": fechaNacimiento,
                                    "nombre": nombre,
                                    "situacionEco": situacionEco,
                                    "telefono": telefono
                                }),
            success: function (){
                window.location.reload(true);
            },
            error: function (data) {
                console.log('Error:', data);
            }
        })
    });
    $("#eliminarCliente").click(function(x){
        x.preventDefault();
        let nroCliente = $("#inputNroCliente").val();
        $.ajax({
            url: "http://localhost:8080/tibuuroncitos/rest/cliente/" + nroCliente,
            type: 'delete',
            contentType: 'application/json',
            dataType: 'json',
            success: function (){
                window.location.reload(true);
            },
            error: function (data) {
                console.log('Error:', data);
            }
        })
    });
});
//JS Transacciones api
$(document).ready(function(){
    $("#enviarCuenta").click(function(x){
        x.preventDefault();
        let balance = $("#inputBalance").val();
        let estadoCuenta = $("#inputEstadoCuenta").val();
        $.ajax({
            url: "http://localhost:8080/tibuuroncitos/rest/cuenta",
            type: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({"balance": balance, "estadoCuenta": estadoCuenta}),
            success: function (){
                window.location.reload(true);
            },
            error: function (data) {
                console.log('Error:', data);
            }
        })
    });
    $("#eliminarTransaccion").click(function(x){
        x.preventDefault();
        let nroTransaccion = $("#inputNroTransaccion").val();
        $.ajax({
            url: "http://localhost:8080/tibuuroncitos/rest/transaccion/" + nroTransaccion,
            type: 'delete',
            contentType: 'application/json',
            dataType: 'json',
            success: function (){
                window.location.reload(true);
            },
            error: function (data) {
                console.log('Error:', data);
            }
        })
    });
});


function datosCliente(idCliente){
    $.ajax({
        url: 'http://localhost:8080/tibuuroncitos/rest/cliente/'+idCliente
    }).done(function(data){
        $("#id").text(data['id']);
        $("#nombre").text(data['nombre']);
        $("#apellido").text(data['apellido']);
        $("#dni").text(data['DNI']);
        $("#fechaNacimiento").text(data['fechaNacimiento']);
        $("#situacionEco").text(data['situacionEco']);
        $("#telefono").text(data['telefono']);
        $("#direccion").text(data['direccion']);
    });
}

function datosTransaccion(nroTrans){
    $.ajax({
        url: 'http://localhost:8080/tibuuroncitos/rest/transaccion/'+nroTrans
    }).done(function(data){
        $("#nroTrans").text(data['nroTrans']);
        $("#monto").text(data['monto']);
        $("#fecha").text(data['fecha']);
        $("#tipoTrans").text(data['tipoTrans']);
        $("#estadoTrans").text(data['estadoTrans']);
    });
}

function datosCuenta(nroCuenta){
    $.ajax({
        url: 'http://localhost:8080/tibuuroncitos/rest/cuenta/'+nroCuenta
    }).done(function(data){
        $("#nroCuenta").text(data['nroCuenta']);
        $("#estadoCuenta").text(data['estadoCuenta']);
        $("#balance").text(data['balance']);
    });
}
 
function datosBono(nroBono){
    $.ajax({
        url: 'http://localhost:8080/tibuuroncitos/rest/bono/'+nroBono
    }).done(function(data){
        $("#nroBono").text(data['nroBono']);
        $("#precioCompra").text(data['precioCompra']);
        $("#vencimiento").text(data['vencimiento']);
        $("#precioPago").text(data['precioPago']);
    });
}

