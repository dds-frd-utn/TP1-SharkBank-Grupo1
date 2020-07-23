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


function nuevoCliente(){

    // process the form
    $("#nuevoClienteForm").submit(function() {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'nombre'             : $('input[name=inputNombreCliente]').val(),
            'apellido'           : $('input[name=inputApellidoCliente]').val(),
            'DNI'                : $('input[name=inputDNICliente]').val(),
            'fechaNacimiento'    : $('input[name=inputDateCliente]').val(),
            'situacionEco'       : $('input[name=inputSituacionEcoCliente]').val(),
            'telefono'           : $('input[name=inputTelefonoCliente]').val(),
            'direccion'          : $('input[name=inputDireccionCliente]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'http://localhost:8080/tibuuroncitos/rest/cliente', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'application/json', // what type of data do we expect back from the server
            encode          : true
        });
        console.log("Llegue hasta aca");        
    });
}

