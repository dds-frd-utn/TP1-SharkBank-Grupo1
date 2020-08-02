/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var ID = sessionStorage.getItem('idCliente'); 
    $.ajax({
        url: 'http://localhost:8080/tibuuroncitos/rest/cliente/' + ID,
    }).done(function(data){
        if (typeof data !== 'undefined' && data !== null){
            $("#id").text(data['id']);
            $("#nombre").text(data['nombre']);
            $("#apellido").text(data['apellido']);
            $("#dni").text(data['DNI']);
            $("#fechaNacimiento").text(data['fechaNacimiento']);
            $("#situacionEco").text(data['situacionEco']);
            $("#telefono").text(data['telefono']);
            $("#direccion").text(data['direccion']);  
        } else {
            alert('Usuario no valido');
            window.location.replace("http://localhost:8080/tibuuroncitos");
        }
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
        });
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
        });
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
        });
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
        });
    });
});
//JS Transacciones api
$(document).ready(function(){
    $("#enviarDeposito").click(function(x){
        x.preventDefault();   
        let current_datetime = new Date();
        let formatted_date = current_datetime.getFullYear() + "-" + appendLeadingZeroes(current_datetime.getMonth() + 1) + "-" + appendLeadingZeroes(current_datetime.getDate()) + "T03:00:00Z[UTC]";
        
        let nroCuentaDeposito = $("#inputNroCuentaDeposito").val();
        let montoDeposito = $("#inputMontoDeposito").val();
        let fechaDeposito = formatted_date;
        let tipoTrans = "Depósito";
        let estadoTrans = "En Proceso";
        $.ajax({
            url: "http://localhost:8080/tibuuroncitos/rest/transaccion",
            type: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                "estadoTrans": estadoTrans,
                "fecha": fechaDeposito,
                "monto": montoDeposito,
                "tipoTrans": tipoTrans
            }),
            success: function (){
                window.location.reload(true);
            },
            error: function () {
                console.log('Error:', data);
            }
        });
        
        $.ajax({
            url:"http://localhost:8080/tibuuroncitos/rest/cuenta/" + nroCuentaDeposito,
            type: 'get'
        }).done(function(data){
            if (typeof data !== 'undefined' && data !== null && data['estadoCuenta'] === 'Habilitada'){
                $.ajax({
                    url: "http://localhost:8080/tibuuroncitos/rest/cuenta/" + nroCuentaDeposito,
                    type: 'put',
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify({
                        "nroCuenta": data['nroCuenta'],
                        "estadoCuenta": data['estadoCuenta'] ,
                        "balance": parseInt(data['balance']) + parseInt(montoDeposito)
                    }),
                    success: function (){
                        window.location.reload(true);
                    },
                    error: function () {
                        console.log('Error:', data);
                    }  
                });
            }else{
                alert('La cuenta a la que usted quiere depositar, no esta disponible.');
                window.location.reload(true);
                actualizarTransaccion();
            }

        });

    });
    
    $("#enviarExtraccion").click(function(x){
        x.preventDefault();   
        let current_datetime = new Date();
        let formatted_date = current_datetime.getFullYear() + "-" + appendLeadingZeroes(current_datetime.getMonth() + 1) + "-" + appendLeadingZeroes(current_datetime.getDate()) + "T03:00:00Z[UTC]";
        
        let nroCuentaExtraccion = $("#inputNroCuentaExtraccion").val();
        let montoExtraccion = $("#inputMontoExtraccion").val();
        let fechaExtraccion = formatted_date;
        let tipoTrans = "Extracción";
        let estadoTrans = "En Proceso";
        $.ajax({
            url: "http://localhost:8080/tibuuroncitos/rest/transaccion",
            type: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                "estadoTrans": estadoTrans,
                "fecha": fechaExtraccion,
                "monto": montoExtraccion,
                "tipoTrans": tipoTrans
            }),
            success: function (){
                window.location.reload(true);
            },
            error: function () {
                console.log('Error:', data);
            }
        });
        
        $.ajax({
            url:"http://localhost:8080/tibuuroncitos/rest/cuenta/" + nroCuentaExtraccion,
            type: 'get'
        }).done(function(data){
            if (typeof data !== 'undefined' && data !== null && data['estadoCuenta'] === 'Habilitada' && data['balance'] - montoExtraccion >= 0){
                $.ajax({
                    url: "http://localhost:8080/tibuuroncitos/rest/cuenta/" + nroCuentaExtraccion,
                    type: 'put',
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify({
                        "nroCuenta": data['nroCuenta'],
                        "estadoCuenta": data['estadoCuenta'] ,
                        "balance": parseInt(data['balance']) - parseInt(montoExtraccion)
                    }),
                    success: function (){
                        window.location.reload(true);
                    },
                    error: function () {
                        console.log('Error:', data);
                    }  
                });
            }else{
                alert('La cuenta a la que usted quiere extraer dinero, no esta disponible o el monto de extraccion supera el balance de la cuenta.');
                window.location.reload(true);
                actualizarTransaccion();
            }

        });

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
        });
    });
});

function appendLeadingZeroes(n){
  if(n <= 9){
    return "0" + n;
  }
  return n;
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

