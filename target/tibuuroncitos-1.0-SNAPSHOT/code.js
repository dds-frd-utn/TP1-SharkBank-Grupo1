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
            $("#clientes").append('<li>'+item['nombre']+'<button onclick="mostrar('+item['id']+')">Ver</button></li>');
        });
    });
});

function mostrar(idCliente){
    $.ajax({
        url: 'rest/cliente/'+idCliente
    }).done(function(data){
        $("#id").text(data['id']);
        $("#nombre").text(data['nombre']);
        $("#apellido").text(data['apellido']);
        $("#dni").text(data['dni']);
        $("#fechaNacimiento").text(data['fechaNacimiento']);
        $("#situacionEco").text(data['situacionEco']);
        $("#telefono").text(data['telefono']);
        $("#direccion").text(data['direccion']);
    });
}
 


