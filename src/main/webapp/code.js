/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $.ajax({
        url: 'rest/cliente'
    }).done(function(data){
        $.each(data, function(i, item) {
            $("#clientes").append('<li style="padding:0.1rem;">'+ '<button type="button" class="btn btn-info" onclick="datosCliente('+item['id']+')">Ver</button>'+ '&nbsp;&nbsp;&nbsp;' +item['nombre']+'</li>');
        });
    });
});

$(document).ready(function(){
    $.ajax({
        url: 'rest/transaccion'
    }).done(function(data){
        $.each(data, function(i, item) {
            $("#transacciones").append('<li style="padding:0.1rem;">'+ '<button type="button" class="btn btn-success" onclick="datosTransaccion('+item['nroTrans']+')">Ver</button>'+ '&nbsp;&nbsp;&nbsp;' +item['nroTrans']+'</li>');
        });
    });
});

$(document).ready(function(){
    $.ajax({
        url: 'rest/cuenta'
    }).done(function(data){
        $.each(data, function(i, item) {
            $("#cuentas").append('<li style="padding:0.1rem;">'+ '<button type="button" class="btn btn-dark" onclick="datosCuenta('+item['nroCuenta']+')">Ver</button>'+ '&nbsp;&nbsp;&nbsp;' +item['nroCuenta']+'</li>');
        });
    });
});

$(document).ready(function(){
    $.ajax({
        url: 'rest/bono'
    }).done(function(data){
        $.each(data, function(i, item) {
            $("#bonos").append('<li style="padding:0.1rem;">'+ '<button type="button" class="btn btn-danger" onclick="datosBono('+item['nroBono']+')">Ver</button>'+ '&nbsp;&nbsp;&nbsp;' +item['nroBono']+'</li>');
        });
    });
});

function datosCliente(idCliente){
    $.ajax({
        url: 'rest/cliente/'+idCliente
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
        url: 'rest/transaccion/'+nroTrans
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
        url: 'rest/cuenta/'+nroCuenta
    }).done(function(data){
        $("#nroCuenta").text(data['nroCuenta']);
        $("#estadoCuenta").text(data['estadoCuenta']);
        $("#balance").text(data['balance']);
    });
}
 
function datosBono(nroBono){
    $.ajax({
        url: 'rest/bono/'+nroBono
    }).done(function(data){
        $("#nroBono").text(data['nroBono']);
        $("#precioCompra").text(data['precioCompra']);
        $("#vencimiento").text(data['vencimiento']);
        $("#precioPago").text(data['precioPago']);
    });
}

